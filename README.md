# GAMWIT Clone - Modern Gaming Analytics Platform

A stunning, modern clone of the GAMWIT website built with Next.js 14, featuring advanced animations, glassmorphism design, and interactive components.

## 🚀 Features

### ✨ Modern UI/UX
- **Glassmorphism Design**: Beautiful frosted glass effects throughout
- **Advanced Animations**: Smooth transitions, floating elements, and micro-interactions
- **Responsive Design**: Mobile-first approach with perfect scaling
- **Dark Theme**: Elegant dark gradient backgrounds with neon accents

### 🎯 Interactive Components
- **Multi-step Signup Form**: With real-time validation and password strength meter
- **Animated Dashboard**: 3D canvas animations with particle effects
- **Scroll-to-Top Button**: Smart visibility with smooth scrolling
- **Interactive Navigation**: Hover effects and active page indicators
- **Location Cards**: Clickable office locations with hover animations

### 📱 Pages & Sections
- **Landing Page**: Hero section, features, solutions, testimonials
- **Product Pages**: AI models, dashboards, alerts, self-service BI
- **Solution Pages**: Marketing, risk, compliance, and customized intelligence
- **Locations Page**: Global offices with exact addresses from GAMWIT
- **Authentication**: Login and signup with modern forms
- **Resources**: Blog page with search and filtering

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: CSS animations + Canvas API
- **Deployment**: Render

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd gamwit-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment to Render

### Prerequisites
- Render account
- GitHub repository connected

### Deployment Steps

1. **Connect Repository**
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository

2. **Configure Build Settings**
   ```
   Build Command: npm install && npm run build
   Start Command: npm start
   ```

3. **Environment Variables** (if needed)
   ```
   NODE_ENV=production
   ```

4. **Deploy**
   - Click "Create Web Service"
   - Render will automatically build and deploy your app

## 📁 Project Structure

```
gamwit-clone/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Landing page
│   ├── layout.tsx                # Root layout
│   ├── login/page.tsx            # Login page
│   ├── signup/page.tsx           # Signup page
│   ├── locations/page.tsx        # Locations page
│   ├── products/                 # Product pages
│   ├── solutions/                # Solution pages
│   └── resources/                # Resource pages
├── components/                   # React components
│   ├── header.tsx               # Navigation header
│   ├── footer.tsx               # Site footer
│   ├── hero.tsx                 # Hero section
│   ├── features.tsx             # Features section
│   ├── solutions.tsx            # Solutions section
│   ├── testimonials.tsx         # Testimonials
│   ├── cta.tsx                  # Call-to-action
│   ├── dashboard-mockup.tsx     # Dashboard component
│   └── scroll-to-top.tsx        # Scroll-to-top button
├── public/                      # Static assets
│   ├── ball.png                 # Logo image
│   ├── gamwit-logo.png         # Company logo
│   └── map-with-pin.png        # World map
└── package.json                 # Dependencies and scripts
```

## 🎨 Key Components

### Scroll-to-Top Button
- Smart visibility (appears after 300px scroll)
- Smooth scrolling animation
- Glassmorphism design with hover effects
- Global implementation in layout

### Multi-step Signup Form
- 3-step registration process
- Real-time validation
- Password strength meter
- 3D canvas animation background
- Responsive design

### Locations Page
- Exact addresses from GAMWIT website
- Interactive office cards
- Color-coded locations
- Animated backgrounds and hover effects

### Navigation
- Sticky header with glassmorphism
- Dropdown menus for Products/Solutions
- Mobile hamburger menu
- Active page indicators

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Adding New Pages
1. Create new file in `app/` directory
2. Export default component
3. Add to navigation in `components/header.tsx`

### Styling Guidelines
- Use Tailwind CSS classes
- Follow glassmorphism patterns: `bg-white/10 backdrop-blur-xl`
- Use gradient backgrounds: `bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900`
- Add hover animations: `hover:scale-105 transition-all duration-300`

## 🌟 Features in Detail

### Glassmorphism Effects
```css
/* Example glassmorphism card */
.glassmorphism {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
}
```

### Animation Classes
- `animate-fade-in-up`: Fade in from bottom
- `animate-pulse`: Pulsing animation
- `animate-ping`: Ping effect
- `animate-gradient-x`: Gradient animation

### Color Scheme
- **Primary**: Blue (`#3B82F6`) to Purple (`#8B5CF6`)
- **Accent**: Green (`#10B981`) to Pink (`#EC4899`)
- **Background**: Dark slate to purple gradients
- **Text**: White and slate variations

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔒 Security

- Form validation on client and server
- Password strength requirements
- Input sanitization
- HTTPS enforcement in production

## 🚀 Performance

- **Image Optimization**: Next.js automatic optimization
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Components load on demand
- **Caching**: Static assets cached efficiently

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for educational purposes. All rights belong to their respective owners.

## 🙏 Acknowledgments

- **GAMWIT**: Original website design inspiration
- **Next.js**: Amazing React framework
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide**: Beautiful icon library

---

**Built with ❤️ using Next.js 14 and Tailwind CSS** 