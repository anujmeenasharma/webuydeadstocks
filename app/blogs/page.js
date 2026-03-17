export default async function sitemap() {
  const baseUrl = "https://webuydeadstocks.com";

  try {
    let allBlogs = [];
    let cursor = null;
    let hasNextPage = true;

    while (hasNextPage) {
      const res = await fetch(
        `${baseUrl}/api/blogs${cursor ? `?cursor=${cursor}` : ""}`,
        { cache: "no-store" }
      );

      if (!res.ok) throw new Error("Failed to fetch blogs");

      const data = await res.json();

      const blogs = data.edges.map((edge) => edge.node);

      allBlogs = [...allBlogs, ...blogs];

      hasNextPage = data.pageInfo?.hasNextPage;
      cursor = data.pageInfo?.endCursor;
    }

    const blogUrls = allBlogs.map((blog) => ({
      url: `${baseUrl}/blogs/${blog.handle}`,
      lastModified: blog.publishedAt
        ? new Date(blog.publishedAt).toISOString()
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