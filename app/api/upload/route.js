import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

// Native Next.js 13+ App router file upload without needing external multer middleware.
// This is the recommended approach for modern Next.js.
export async function POST(request) {
    try {
        const data = await request.formData();
        const file = data.get("file");

        if (!file) {
            return NextResponse.json({ error: "No file received." }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Sanitize filename to prevent malicious directory traversal
        const pureName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, '');
        const filename = `${Date.now()}-${pureName}`;
        
        const uploadDir = path.join(process.cwd(), "public/uploads");
        const filepath = path.join(uploadDir, filename);
        
        await writeFile(filepath, buffer);

        // Return the path that the frontend can use to render the image
        return NextResponse.json({ 
            message: "File uploaded successfully", 
            url: `/uploads/${filename}` 
        }, { status: 200 });

    } catch (error) {
        console.error("Upload error:", error);
        return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }
}
