# Development Process – Portfolio Website

This document outlines my development approach, decisions, and how AI tools were integrated during the build process.

## Goal

Build and deploy a high-performance, mobile-first personal portfolio using React that:
- Loads fast
- Works on all devices
- Scores 90+ on Lighthouse
- Showcases real-world projects professionally

## Planning Phase

Before coding, I:

- Made a roadmap on how I will achieve the goal before the deadline
- Defined required sections (Hero, About, Projects, Skills, Contact)
- Designed a simple, minimal layout for readability
- Focused on performance and accessibility first (not animations)

Key decisions:
- Use Vite for faster builds
- Component-based architecture
- Mobile-first design

## Implementation

### Step 1 – Setup
- Initialized React app with Vite
- Created modular components for each section

### Step 2 – Layout
- Used Flexbox and CSS Grid
- Added reusable container pattern (max-width + centered layout)
- Ensured responsive design for small screens

### Step 3 – UI
- Clean typography and spacing
- Subtle background gradients
- Card-based project layout

## AI Integration & Prompt Engineering

AI tools (ChatGPT) were used as development assistants for:

### 1. Layout & Design
Prompts:
- "With the components listed, how do I structure them to make a professional portfolio"
When working with this prompt, I understood the importance of using jsx and learned how to work with it.

### 2. Debugging CSS
Prompts:
- "Why is my layout left-aligned?"
While debugging, I realised that the content was left aligned because of the section. I created another component called "Container" and added that in the files to center the content.
- "How do I enhance the style of my portfolio website?"
Once I made the website work, I added designs using jsx files and index.css. 

### 3. Performance Optimization
Prompts:
- "How to improve Lighthouse performance in React?"
The performance was first 62, because I used images in jpg format which was heavy for the loading. So I converted it into avif etc. The performance then went to 98.
- "Ways to optimize background images"

Actions taken:
- Removed render-blocking styles
- Compressed images (AVIF)
- Tested production builds

### 4. Accessibility
Prompts:
- "How to fix Lighthouse accessibility issues?"
Accessibility percentage was around 78. The problems were color contrasts and invalid html syntax. I fixed that with the help of chatGPT.
- "Proper HTML semantics for navigation and buttons"

Improvements:
- Semantic tags (nav, main, section)
- Larger touch targets
- Proper color contrast
- Replaced button-inside-anchor issues
This was the reason for accessibility being 78. I fixed the button-inside-anchor with a clean anchor tag.

## Testing & Optimization

- Tested on Chrome DevTools mobile simulator
- Tested on real devices
- Lighthouse audits (Mobile + Desktop)
- Optimized until scores exceeded 90+

## Deployment

- Pushed code to GitHub
- Connected repository to Vercel
- Enabled automatic deployments

## Key Learnings

- Importance of semantic HTML
- Mobile-first design approach
- Performance optimization techniques
- Accessibility best practices
- Using AI effectively as a development assistant

## Changes after review 1

- Fixed invalid HTML syntax and used anchor tag only.
- Enhanced UI by making the buttons more responsive and engaging. Added translation and border effect for better appearance.

## Outcome

Successfully built a production-ready, responsive, and optimized portfolio that meets all assignment requirements.
