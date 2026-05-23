# Technical Brief: We Buy Dead Stocks Website

This document provides a technical overview of the system architecture, file routing structure, environment configurations, and content delivery flows of the website.

---

## 🛠️ Technology Stack Summary

- **Framework**: Next.js (version `16.1.2`) using the **App Router** (`app/` directory).
- **Database / CMS**: MongoDB via **Mongoose** (`models/` directory) for custom admin accounts and dynamic Blog post management.
- **Shopify Integration**: Shopify Storefront API GraphQL (using [shopify.js](file:///Users/anujmeenasharma/Desktop/webuydeadstocks/lib/shopify.js)) to fetch products, collections (lots), deals, recommendations, and search results.
- **Styling**: Tailwind CSS v4 and Lucide React icons.
- **Animations & Scrolling**: GSAP (GreenSock Animation Platform) + `@gsap/react`, Split-type, and Lenis smooth scrolling.
- **Form Handling / Emailing**: Client-side submission handled via `@emailjs/browser` and `react-phone-number-input`.
- **Admin Editor**: `react-quill-new` for rich text blog creation.

---

## 📁 System & Routing Flow

### 1. Language & Internationalization (i18n)

- **User Paths**:
  - **English**: Direct root routes (e.g. `/`, `/services`, `/about`).
  - **Arabic**: Routes prefixed with `/arabic` (e.g. `/arabic`, `/arabic/services`).
- **Language Switcher**: [LanguageSwitcher.js](file:///Users/anujmeenasharma/Desktop/webuydeadstocks/components/i18n/LanguageSwitcher.js) handles updating the translation cookies (`NEXT_LOCALE` and `googtrans`) and pushes route navigation.
- **Translation Engine**: Google Translate script is initialized client-side in the main [layout.js](file:///Users/anujmeenasharma/Desktop/webuydeadstocks/app/%5Blang%5D/layout.js) file to dynamically translate content depending on the active cookie.

> [!WARNING]
> **Observation on `proxy.js` vs `middleware.js`**
> In the project history (commit `ef5b01c4c922967df2d89a9b8cad1418f2a2f175`), `middleware.js` was deleted and replaced by [proxy.js](file:///Users/anujmeenasharma/Desktop/webuydeadstocks/proxy.js).
> Because Next.js expects the middleware entry point file to be explicitly named `middleware.js` or `middleware.ts` in the project root/src folder, the custom URL rewrites, GCC IP geolocation redirection, and `/admin` page protection rules in `proxy.js` are currently not being executed by Next.js.

---

### 2. Dynamic Service Pages (`app/[lang]/services/[slug]/page.js`)

When a user requests a dynamic service slug (e.g., `/services/electronics-scrap`):
1. The app checks if the requested slug matches a category in the hardcoded configuration [data.js](file:///Users/anujmeenasharma/Desktop/webuydeadstocks/lib/data.js). If found, it displays the standard dynamic categories/services component.
2. Otherwise, the app looks for a corresponding static `.html` file inside the [service-next/](file:///Users/anujmeenasharma/Desktop/webuydeadstocks/service-next) directory:
   - It reads the `.html` file synchronously from disk using `fs.readFileSync`.
   - It extracts the body content between `<div class="blog"` and `<div class="bg-[#121212]"` (or `<footer`), strips out scripts, and rewrites external links to relative ones.
   - It renders this cleaned content inside a React wrapper via `dangerouslySetInnerHTML`.

---

### 3. Admin Panel & CMS Blog Flow

- **Route Protection**: All `/admin` sub-routes (e.g., `/admin/blogs`, `/admin/uploadBlogs`) are protected from unauthenticated access by checking and verifying the `admin_token` cookie containing a JWT signature.
- **Authentication**: Done via the `/api/auth/login` endpoint using password verification (`bcryptjs`) against the `Admin` model.
- **CMS REST APIs**:
  - `GET /api/blogs` / `POST /api/blogs`: Reads and writes new posts inside the MongoDB database.
  - `GET /api/blogs/[slug]` / `PUT /api/blogs/[slug]` / `DELETE /api/blogs/[slug]`: Enables individual blog updating, deleting, and fetching.
- **File Uploads**: Handles image/asset uploads inside [api/upload/route.js](file:///Users/anujmeenasharma/Desktop/webuydeadstocks/app/api/upload/route.js), saving the physical files to a local root `uploads` directory. These assets are then dynamically served through the buffer streaming endpoint at [app/uploads/[filename]/route.js](file:///Users/anujmeenasharma/Desktop/webuydeadstocks/app/uploads/%5Bfilename%5D/route.js).

---

## 🔑 Environment Variables Configuration (`.env.local`)

| Environment Variable | Scope | Description |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SHOPIFY_STORE_URL` | Client & Server | Hostname of the target Shopify store (e.g. `738eda.myshopify.com`). |
| `NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN` | Client & Server | Access token used to fetch Shopify Storefront GraphQL query payloads. |
| `NEXT_PUBLIC_SHOPIFY_API_VERSION` | Client & Server | Shopify API version (e.g., `2024-04`). |
| `MONGODB_URI` | Server-only | MongoDB connection URI (`mongodb://127.0.0.1:27017/webuydeadstocks`). |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Client & Server | Google Analytics Measurement tracking ID. |
| `JWT_SECRET` | Server-only | Secret key used to sign and verify JWT authentication tokens (reverts to a development fallback string if not supplied). |
