# 🚀 Shanmukha Vamshi - Portfolio

A modern, responsive, and fully customizable portfolio website built with HTML, CSS, and vanilla JavaScript. Designed to showcase your skills, projects, and professional experience in a clean and professional manner.

![Portfolio Preview](./resources/images/og-image.png)

## ✨ Features

- **🎨 Modern Design** - Clean, minimalist aesthetic with smooth animations
- **🌙 Dark/Light Mode** - Automatic theme detection with manual toggle
- **📱 Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- **⚡ Performance Optimized** - Lazy loading, minimal dependencies, optimized assets
- **♿ Accessible** - ARIA labels, keyboard navigation, reduced motion support
- **🔍 SEO Ready** - Meta tags, Open Graph, Twitter cards, structured data
- **🎭 Smooth Animations** - Scroll-triggered reveals, typing effect, counters
- **📧 Contact Form** - Ready for Formspree integration

## 📋 Sections

1. **Hero** - Eye-catching intro with typing animation and social links
2. **About** - Personal bio with experience cards
3. **Skills** - Technical skills with progress indicators
4. **Experience** - Timeline with tabs for work history and education
5. **Projects** - Filterable project gallery with hover effects
6. **Services** - What you offer with feature lists
7. **Testimonials** - Client testimonials with auto-sliding carousel
8. **Contact** - Contact form with social links
9. **Footer** - Quick links and social media

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Flexbox, Grid, animations
- **JavaScript** - Vanilla JS, Intersection Observer API
- **Google Fonts** - Inter & Poppins
- **Material Icons** - Google Material Symbols

## 🚀 Quick Start

### Option 1: Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shan-Vision05/Portfolio.git
   cd Portfolio
   ```

2. **Open in browser**
   - Simply open `index.html` in your browser
   - Or use a local server like Live Server in VS Code

### Option 2: Deploy to GitHub Pages

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Select "main" branch as source
   - Save and wait for deployment

### Option 3: Deploy to Netlify

1. **Drag and drop** the folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your GitHub repository for automatic deployments

### Option 4: Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

## 📝 Customization

### Personal Information

Edit `index.html` to update:

```html
<!-- Update your name -->
<h1 class="name">Your Name</h1>

<!-- Update your title/role -->
<p class="hero-title">Your Title</p>

<!-- Update your bio -->
<p class="description">Your bio goes here...</p>
```

### Social Links

Find and update these URLs in `index.html`:

```html
<!-- LinkedIn -->
<a href="https://www.linkedin.com/in/YOUR-PROFILE/">

<!-- GitHub -->
<a href="https://github.com/YOUR-USERNAME">

<!-- Resume -->
<a href="YOUR-RESUME-LINK">
```

### Colors & Theme

Edit CSS variables in `styles/main.css`:

```css
:root {
    --color-primary: #6366f1;      /* Main accent color */
    --color-secondary: #ec4899;     /* Secondary accent */
    --color-accent: #06b6d4;        /* Additional accent */
    /* ... more colors */
}
```

### Adding Projects

Add new project cards in the projects section:

```html
<article class="project-card" data-category="web">
    <div class="project-image">
        <img src="./resources/images/projects/your-image.jpg" alt="Project Name">
        <div class="project-overlay">
            <div class="project-links">
                <a href="LIVE-URL" class="project-link">
                    <span class="material-symbols-outlined">visibility</span>
                </a>
                <a href="GITHUB-URL" class="project-link">
                    <span class="material-symbols-outlined">code</span>
                </a>
            </div>
        </div>
    </div>
    <div class="project-info">
        <h3>Project Name</h3>
        <p>Project description...</p>
        <div class="project-tech">
            <span>React</span>
            <span>Node.js</span>
        </div>
    </div>
</article>
```

### Contact Form

To enable the contact form:

1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form
3. Replace the form action URL:

```html
<form action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
```

## 📁 Project Structure

```
Portfolio/
├── index.html              # Main HTML file
├── README.md               # Documentation
├── resources/
│   ├── icons/              # SVG icons & favicon
│   │   └── favicon.svg
│   └── images/
│       ├── og-image.png    # Social media preview
│       └── projects/       # Project screenshots
├── scripts/
│   └── main.js             # JavaScript functionality
└── styles/
    └── main.css            # All styles
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 🎯 Performance Tips

1. **Optimize Images**
   - Use WebP format when possible
   - Compress images with [Squoosh](https://squoosh.app/)
   - Use appropriate sizes (don't serve 4K images for thumbnails)

2. **Add Your Photo**
   - Replace placeholder with your professional photo
   - Recommended size: 400x400px
   - Format: WebP or optimized JPEG

3. **Custom Domain**
   - Purchase a domain from Namecheap, GoDaddy, etc.
   - Configure DNS to point to your hosting

## 🔧 Maintenance

### Adding New Skills

```html
<span class="skill-tag">New Skill</span>
```

### Updating Experience

Edit the timeline items in the experience section.

### Adding Testimonials

Copy an existing testimonial card and update the content.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Google Fonts](https://fonts.google.com/) for typography
- [Material Design Icons](https://fonts.google.com/icons) for icons
- Inspiration from modern portfolio designs

## 📞 Contact

**Shanmukha Vamshi**
- LinkedIn: [k-shanmukha-vamshi](https://www.linkedin.com/in/k-shanmukha-vamshi-92b7161a9/)
- GitHub: [Shan-Vision05](https://github.com/Shan-Vision05)
- Email: shanmukha.vamshi.k@gmail.com

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ by Shanmukha Vamshi
