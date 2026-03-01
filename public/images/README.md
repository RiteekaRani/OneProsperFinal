# Images Folder

All site images are stored here. **Which image appears where** is controlled by **`content/imageConfig.json`**.

## How to change an image

1. **Upload** your image file into this folder (`/public/images/`).
   - Example: save as `hero.jpg` for the homepage hero.

2. **Edit** `content/imageConfig.json` and set the **filename** for the slot you want to change.
   - Example: `"hero_media_placeholder": "hero.jpg"` means the hero section uses `hero.jpg` from this folder.
   - To use a different file later, either replace `hero.jpg` in this folder or change the value to another filename (e.g. `"hero_media_placeholder": "hero-new.jpg"`).

You do **not** need to change any component code. Upload file → set filename in `imageConfig.json` → that image is used everywhere that slot is referenced.

## Image slots (keys in imageConfig.json)

| Key | Where it appears |
|-----|-------------------|
| `hero_media_placeholder` | Home page hero (right side) |
| `mission_image` | What We Do – mission section |
| `service_1_image`, `service_2_image`, `service_3_image` | What We Do – service cards |
| `initiative_schools`, `initiative_learners` | What We Do – initiatives |
| `testimonial_learner_1`, `testimonial_buddy_1`, `testimonial_school_1` | Our Impact – testimonials |
| `story_1_image`, `story_2_image` | Our Impact – story sections |
| `blog_post_1`, `blog_post_2`, `blog_post_3` | Blogs listing and blog post hero |
| `blog_content_image` | Optional image inside blog post body |
| `students_challenge_1` … `schools_benefit_3` | Home page – cards (Students/Schools) |
| `logo_1` … `logo_6` | Home page – logo row |
| `buddy_t_1` … `admin_t_6` | Home page – testimonial carousels |
| `step_1` … `step_6` | Home page – How it works icons |

## Guidelines

- **Formats:** JPG, PNG, WebP (logos/icons can use SVG).
- **Naming:** Match the filename in `imageConfig.json` (e.g. `hero.jpg`, `mission.jpg`).
- **Sizes:** Prefer reasonable dimensions (e.g. 1200px wide for heroes) and optimize for web.
