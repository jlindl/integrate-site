---
description: How to generate a new blog post
---

1.  **Plan the Post**:
    *   Ask the user for the topic or title if not provided.
    *   Determine a suitable slug (e.g., `my-blog-post-title`).
    *   Determine the category (e.g., Strategy, Tutorials, News).

2.  **Generate Assets**:
    *   Use `generate_image` to create a high-quality, 4k, photorealistic header image.
    *   Prompt structure: "Futuristic abstract representation of [TOPIC], premium editorial style, 4k, high detailed, blog header image".
    *   **CRITICAL**: Save the image to the ROOT public directory: `c:\Users\User\OneDrive\Desktop\apexautomations\public\images\blog\[slug].png`.
    *   **DO NOT** save to `app/public`. Always check the path before saving.

3.  **Create the Page**:
    *   Create a new directory: `app/ai-and-automation-blog/[slug]/page.tsx`.
    *   Use the standard blog post template (see `app/ai-and-automation-blog/future-of-ai-automation-2026/page.tsx` for reference).
    *   Ensure the following key elements are present:
        *   Hero section with the generated image.
        *   Premium typography using Tailwind prose classes.
        *   **STYLING RULES**: Use ONLY Black, White, and Metallic Silver/Gray colors. No blue/purple accents.
        *   `BlogCTA` component at the bottom.
        *   Proper metadata (title, date, read time).

4.  **Update Listing**:
    *   Add the new post object to the `posts` array in `app/ai-and-automation-blog/page.tsx`.
    *   Include the path to the generated image.

5.  **Verify**:
    *   Navigate to the new page to ensure it loads correctly.
    *   Check the listing page to ensure the new card appears with its image.
