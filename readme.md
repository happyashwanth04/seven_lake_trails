# Seven Lakes Trail Adventure - Next.js Travel Website Template

Seven Lakes Trail Adventure is a modern, SEO-friendly travel website template built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/). It features a responsive design, accessible navigation, destination highlights, detailed itineraries, and contact/social media integration. Easily customizable for your own travel business or project.

## Features

- Modern responsive layout for mobile & desktop
- Destinations listing and detail pages
- SEO-friendly and accessible
- "Why Choose Us" and highlights sections
- Day-wise itinerary with images
- Fixed footer with WhatsApp, email, and social links
- Modern sticky header with mobile menu
- Built with Next.js App Router and Tailwind CSS

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/travelmate.git
cd travelmate
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your site.

## Customization

- **Images:** Place your images in the `public/images/` folder. Refer to `public/images/readme.md` for naming.
- **Destinations:** Edit `app/destinations/[slug]/page.tsx` to add or modify destination details, highlights, and itineraries.
- **Header/Footer:** Customize navigation and contact/social links in `app/components/Header.tsx` and `app/components/Footer.tsx`.
- **Styling:** Modify or extend default styles in `app/globals.css` and `tailwind.config.js`.

## Project Structure

```
app/
  components/
    Header.tsx
    Footer.tsx
  destinations/
    [slug]/
      page.tsx
  about/
    page.tsx
  page.tsx        # Landing page
  layout.tsx
  globals.css
public/
  images/
    # Add your images here
tailwind.config.js
postcss.config.js
package.json
.gitignore
README.md
```

## License

Please review and adapt for commercial use.

---

**Made with ❤️ using Next.js and Tailwind CSS**
