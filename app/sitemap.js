export default async function sitemap() {
  const baseUrl = "https://webuydeadstocks.com";

  try {
    let allBlogs = [];
    let cursor = null;

    while (true) {
      const res = await fetch(
        `${baseUrl}/api/blogs${cursor ? `?cursor=${cursor}` : ""}`,
        { cache: "no-store" }
      );

      if (!res.ok) throw new Error("Failed to fetch blogs");

      const data = await res.json();

      const blogs = data.blogs || data;

      allBlogs = [...allBlogs, ...blogs];

      if (!data.nextCursor) break;
      cursor = data.nextCursor;
    }

    const blogUrls = allBlogs.map((blog) => ({
      url: `${baseUrl}/blogs/${blog.slug}`,
      lastModified: blog.updatedAt
        ? new Date(blog.updatedAt).toISOString()
        : new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.7,
    }));

    return [
      {
        url: baseUrl,
        lastModified: new Date().toISOString(),
        changeFrequency: "daily",
        priority: 1,
      },
      ...blogUrls,
    ];
  } catch (error) {
    console.error("Sitemap error:", error);

    return [
      {
        url: baseUrl,
        lastModified: new Date().toISOString(),
      },
    ];
  }
}