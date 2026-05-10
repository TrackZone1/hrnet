# HRNet - Modernized Version

This project is a complete migration of the legacy HRNet application from jQuery to React. It was developed as part of the OpenClassrooms Frontend Developer path (Project 14).

## Objectives

- Convert the entire HRNet application to React.
- Replace four jQuery plugins with React components.
- Choose one specific plugin and convert it into a custom React library.
- Implement state management using Redux Toolkit.
- Conduct performance audits (Lighthouse) to compare legacy vs. modern versions.

## Tech Stack

- **Framework**: React 19 (Vite)
- **State Management**: Redux Toolkit
- **Routing**: React Router 7
- **Styling**: Vanilla CSS with modern aesthetics
- **Persistence**: LocalStorage (synced via Redux)

## Custom Component

The **Modal** component was chosen for manual conversion. It has been extracted into its own package located in `../hrnet-modal-package`.

## Performance Comparison

A Lighthouse audit was performed on both versions. The React version shows significant improvements in:
- **TBT (Total Blocking Time)**: Reduced due to the removal of heavy jQuery plugins.
- **LCP (Largest Contentful Paint)**: Faster rendering of the employee list.
- **SEO & Accessibility**: Improved through semantic HTML and modern React patterns.

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1. Clone the repository.
2. Navigate to the project folder:
   ```bash
   cd hrnet-react
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

```bash
# Development mode
npm run dev

# Production build
npm run build
npm run preview
```

## Structure

- `src/components`: Reusable UI components (including the custom Modal).
- `src/features`: Redux slices and logic.
- `src/pages`: Main application pages (Create Employee, Employee List).
- `src/store`: Redux store configuration.
