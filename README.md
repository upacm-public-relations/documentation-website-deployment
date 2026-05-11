# UP ACM Public Relations Committee — Documentation System

Internal documentation website for the UP ACM Public Relations Committee.  
Built with Next.js 15, TypeScript, and Tailwind CSS.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
app/
├── (docs)/                     # All documentation pages
│   ├── layout.tsx              # Shared doc layout (sidebar + nav)
│   ├── overview/
│   │   ├── constitution/       # Constitution page
│   │   └── responsibilities/   # Responsibilities page
│   ├── operations/
│   │   ├── partnerships/       # Partnerships Workflow page
│   │   └── automation/
│   │       ├── gemini/         # Gemini Add-on Project
│   │       ├── proposal-reviewer/
│   │       ├── partnership-response/
│   │       ├── email-blast/    # Email Blast System (under automation)
│   │       └── documentation-website/
│   ├── knowledge/
│   │   ├── retrospectives/
│   │   ├── swot/               # SWOT Analysis (4 editable boxes)
│   │   ├── backlogs/
│   │   ├── partners/           # ACM Local Chapter Partners (table)
│   │   └── acm-relations/
│   └── resources/
│       ├── links/              # Relevant Links (table with Name + Link)
│       └── contacts/
├── layout.tsx                  # Root layout
├── page.tsx                    # Home page
└── globals.css                 # Global styles + theme variables

components/
├── DocLayout.tsx               # Main layout wrapper
├── DocSidebar.tsx              # Navigation sidebar
├── TopNav.tsx                  # Top navigation bar
├── ThemeProvider.tsx           # Dark/light mode
├── doc-components/
│   ├── Callout.tsx             # Info/warning/success/error boxes
│   ├── StatusBadge.tsx         # Status indicators
│   ├── PageHeader.tsx          # Reusable page header with breadcrumbs
│   └── PlaceholderSection.tsx  # Placeholder for content
└── pages/
    └── Page.tsx            # Home dashboard

lib/
└── utils.ts                    # cn() utility
```

---

## ✏️ How to Add/Edit Content

### Adding content to a page
Open the relevant file in `app/(docs)/...` and replace placeholder text directly in the JSX.

### Adding a new page
1. Create a new folder under the appropriate section in `app/(docs)/`
2. Add a `page.tsx` file with your content
3. Add a nav item in `components/DocSidebar.tsx` in the `navItems` array

### Editing navigation
Open `components/DocSidebar.tsx` and edit the `navItems` array.

### Updating SWOT Analysis boxes
Open `app/(docs)/knowledge/swot/page.tsx` and edit the `swotQuadrants` array.
Replace the `placeholder` values with your actual analysis.

### Updating ACM Chapter Partners table
Open `app/(docs)/knowledge/partners/page.tsx` and edit the `chapters` array.

### Updating Relevant Links table
Open `app/(docs)/resources/links/page.tsx` and edit the `links` array.

---

## 🎨 Design System

### Brand Colors
| Name | Hex | Usage |
|------|-----|-------|
| Navy Blue | `#0B1F3B` | Primary, headers, sidebar |
| ACM Blue | `#2D9CDB` | Links, interactive elements |
| PR Yellow | `#F4C542` | Accents, highlights, callouts |
| Light Gray | `#F5F7FA` | Section backgrounds |
| Medium Gray | `#A0A4AB` | Secondary text |
| Dark Gray | `#2B2F36` | Primary text |

### Dark Mode
Dark mode is built in. Toggle via the moon/sun icon in the top nav.

---

## 🔧 Technology Stack
- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Lucide React** (icons)
- **next-themes** (dark/light mode)
- **DM Sans** + **DM Mono** fonts

---

Built for the University of the Philippines ACM Chapter  
Public Relations Committee · AY 2025–2026
