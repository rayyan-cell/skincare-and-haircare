# Rayyan - AI Specialist Portfolio

A clean, elegant portfolio website showcasing AI expertise and projects.

## Features

- Single-page responsive design
- Smooth scrolling navigation
- Sections: Hero, About, Skills, Projects, Experience, Contact
- Optimized for recruiters and hiring managers
- Mobile-friendly layout
- Fast loading with vanilla HTML/CSS/JS

## Setup

1. **Customize Content**
   - Open `index.html` and replace placeholder content with your actual information:
     - Update name, bio, and description
     - Add your real projects with links
     - Update skills based on your expertise
     - Add your experience and education timeline
     - Replace contact links (email, LinkedIn, GitHub)

2. **Deploy to GitHub Pages**
   ```bash
   # Create a new repository on GitHub named: yourusername.github.io
   
   # Initialize git in the portfolio folder
   git init
   git add .
   git commit -m "Initial portfolio commit"
   
   # Connect to your GitHub repository
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git branch -M main
   git push -u origin main
   
   # Your site will be live at: https://yourusername.github.io
   ```

3. **Local Testing**
   - Simply open `index.html` in your browser
   - Or use a local server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Then visit: http://localhost:8000
     ```

## Customization Tips

### Colors
Edit CSS variables in `styles.css` (lines 9-16):
```css
:root {
    --primary-color: #2563eb;  /* Main brand color */
    --secondary-color: #1e40af; /* Darker shade */
    /* ... */
}
```

### Adding More Projects
Copy a `.project-card` div in `index.html` and update the content.

### Changing Fonts
Replace the font-family in `styles.css` (line 24) with your preferred font.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Free to use and modify for personal portfolio purposes.
