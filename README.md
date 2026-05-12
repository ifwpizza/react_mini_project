# 🚀 FolioGen — Portfolio Generator

A production-grade, SaaS-style portfolio generator designed to help professionals create stunning, fully customizable portfolio websites in minutes — no coding required. Built with a modern tech stack including **React 19**, **Vite**, and a custom **CSS Design System**.

---

## ✨ Key Features

- 🏗️ **Multi-Step Builder**: A guided 6-step wizard (Personal → Skills → Projects → Social → Appearance → Preview) that walks you through every section effortlessly.
- 👁️ **Real-time Live Preview**: See your portfolio update instantly in a side-by-side browser-framed preview panel as you type.
- 🌗 **Dark & Light Mode**: Full theme support for both the builder interface and the generated portfolio, with smooth transitions.
- 📄 **Export & Print**: Download your finished portfolio as a standalone HTML file or print directly to PDF via the browser.
- 🎨 **8 Curated Color Palettes**: Choose from Indigo Nights, Emerald Forest, Rose Garden, Golden Hour, Ocean Breeze, Royal Purple, Teal Mist, and Sunset Blush.
- 📐 **4 Layout Templates**: Modern (gradient hero), Split (sidebar profile), Minimal (typography-first), and Creative (dark & asymmetric).
- 🖼️ **Project Showcase**: Upload images, add technology tags, and link to live demos and source repositories.
- 🔗 **Social Integration**: Connect GitHub, LinkedIn, Twitter/X, Dribbble, Instagram, and your personal website.
- 💾 **Persistent Storage**: All user data is automatically saved to LocalStorage — your progress survives page reloads.
- 🌐 **Premium Landing Page**: A market-ready SaaS landing page with animated hero, feature grid, template showcase, and CTA sections.

---

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Styling**: Custom CSS Design System with CSS Variables & Dark Mode
- **State Management**: React `useReducer` + `Context API` with LocalStorage persistence
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Google Fonts](https://fonts.google.com/) — Outfit, Inter, JetBrains Mono
- **Export**: Native HTML generation & Browser Print API

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ramjeemishra/React_Mini_Project.git
   cd React_Mini_Project
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Launch development server**:
   ```bash
   npm run dev
   ```

4. **Access the App**:
   Navigate to `http://localhost:5173` in your browser.

---

## 📁 Project Structure

```
portfolio-generator/
├── src/
│   ├── context/
│   │   └── PortfolioContext.jsx       # Global state (useReducer + localStorage)
│   ├── pages/
│   │   ├── LandingPage.jsx/css        # SaaS marketing landing page
│   │   └── BuilderPage.jsx            # Portfolio builder shell
│   ├── components/
│   │   ├── Header.jsx/css             # App header with theme/preview toggles
│   │   ├── StepIndicator.jsx/css      # Step navigation with progress bar
│   │   ├── LivePreviewPanel.jsx       # Real-time scaled preview with browser frame
│   │   ├── steps/
│   │   │   ├── PersonalInfoStep.jsx   # Name, title, avatar upload, bio
│   │   │   ├── SkillsExperienceStep.jsx # Skills, work experience, education
│   │   │   ├── ProjectsStep.jsx       # Project cards with images & tech tags
│   │   │   ├── SocialLinksStep.jsx    # Social media URL fields
│   │   │   ├── AppearanceStep.jsx     # Color palette & layout template selection
│   │   │   ├── PreviewStep.jsx        # Final preview with export tools
│   │   │   └── Steps.css              # Shared step component styles
│   │   └── preview/
│   │       ├── PortfolioRenderer.jsx  # Layout switcher
│   │       └── layouts/
│   │           ├── ModernLayout.jsx   # Gradient hero, card-based sections
│   │           ├── SplitLayout.jsx    # Sidebar profile + scrollable content
│   │           ├── MinimalLayout.jsx  # Whitespace-focused, typography-first
│   │           └── CreativeLayout.jsx # Dark, bold, asymmetric design
│   ├── App.jsx / App.css              # Root router & shared layout styles
│   ├── index.css                      # Design system tokens & CSS reset
│   └── main.jsx                       # Entry point with providers
├── index.html                         # HTML shell with Google Fonts
├── vite.config.js                     # Vite + React plugin config
└── package.json                       # Dependencies & scripts
```

---

## 👥 Contributors

This project was developed as a group effort for our college coursework. Below are the core contributors and their primary responsibilities:

| Name | Role | Key Contributions |
| :--- | :--- | :--- |
| **Ramjee** | Architecture & State | Architected component structure, global state with Context API, and LocalStorage persistence. |
| **Krishiv** | UI/UX & Design System | Designed the premium CSS design system, landing page, and responsive layout architecture. |
| **Contributor 3** | Builder Components | Developed the multi-step form wizard, avatar upload, and project showcase components. |
| **Contributor 4** | Templates & Export | Built the 4 portfolio layout templates and implemented HTML/PDF export functionality. |

---

## 📝 Usage Notes

- **Avatar & Images**: Uploaded images are stored as Base64 data URLs in LocalStorage. Very large images may impact storage limits.
- **Browser Storage**: Clearing browser cache/storage will reset all your portfolio data and preferences.
- **Export**: The HTML export produces a fully standalone file with inline styles — no external dependencies required.
- **Responsive**: The builder interface is optimized for desktop screens (1024px+). The generated portfolios are responsive on all devices.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
