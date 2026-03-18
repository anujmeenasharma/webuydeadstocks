import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function GET(request) {
    try {
        await connectToDatabase();

        // Handle pagination cursor (optional for later, currently we will fetch all or page base)
        const { searchParams } = new URL(request.url);
        const cursor = searchParams.get("cursor"); // Using this generic structure to match Shopify's need
        const search = searchParams.get("search") || "";

        const limit = 20;
        let query = {};
        if (search) {
            query.title = { $regex: search, $options: "i" };
        }

        // Let's just do a simple fetch all for now, to match the Shopify layout. 
        // Real cursor-based pagination can be added based on `_id` > cursor if needed.
        const blogs = await Blog.find(query).sort({ publishedAt: -1 });

        // Format to match Shopify's GraphQL structure!
        const edges = blogs.map((blog) => ({
            node: {
                id: blog._id.toString(),
                title: blog.title,
                handle: blog.handle,
                excerpt: blog.excerpt,
                publishedAt: blog.publishedAt,
                image: blog.image,
                contentHtml: blog.contentHtml,
                seo: blog.seo
            }
        }));

        return NextResponse.json({
            edges,
            pageInfo: {
                hasNextPage: false, // simplified for now
                endCursor: null
            }
        }, { status: 200 });

    } catch (error) {
        console.error("Failed to fetch blogs:", error);
        return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        await connectToDatabase();
        const body = await request.json();

        // Ensure handle is unique
        const existingBlog = await Blog.findOne({ handle: body.handle });
        if (existingBlog) {
            return NextResponse.json({ error: "A blog with this handle already exists" }, { status: 400 });
        }

        const newBlog = await Blog.create({
            title: body.title,
            handle: body.handle,
            excerpt: body.excerpt,
            contentHtml: body.contentHtml,
            image: body.image,
            seo: body.seo,
            publishedAt: body.publishedAt || new Date()
        });

        return NextResponse.json({ message: "Blog created successfully", blog: newBlog }, { status: 201 });
    } catch (error) {
        console.error("Failed to create blog:", error);
        return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
    }
}
