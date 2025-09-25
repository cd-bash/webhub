# CSS Architecture Migration Guide

## Overview
This migration moves from scattered CSS files to a centralized, component-based architecture with better organization and maintainability.

## New Structure
```
src/styles/
├── main.css                 # Main entry point - imports all other styles
├── base/                    # Foundation styles
│   ├── variables.css        # CSS custom properties
│   ├── reset.css           # Browser reset and base styles
│   └── typography.css      # Typography system
├── layout/                  # Layout and structure
│   ├── containers.css      # Container and wrapper styles
│   └── sections.css        # Section layouts
├── components/             # Reusable components
│   ├── buttons.css         # All button variants
│   ├── backgrounds.css     # Background utilities
│   ├── logo.css           # Logo component
│   ├── navigation.css     # Navigation component
│   └── call-to-action.css # CTA component
├── pages/                  # Page-specific styles
│   ├── home.css           # Home page
│   ├── about.css          # About page
│   ├── projects.css       # Projects page
│   └── contact.css        # Contact page
└── utilities/              # Utility classes
    ├── text.css           # Text utilities
    ├── spacing.css        # Margin/padding utilities
    └── responsive.css     # Display and responsive utilities
```

## Key Improvements

### 1. Centralized Variables
- All colors, fonts, spacing, and breakpoints are now in `base/variables.css`
- Uses CSS custom properties for theming and consistency
- Responsive values with clamp() for fluid design

### 2. Component-Based Architecture
- Each component has its own file
- Clear separation of concerns
- Easy to maintain and extend

### 3. Utility-First Approach
- Common patterns extracted into utility classes
- Consistent spacing and text styling
- Responsive utilities for different screen sizes

### 4. Better Organization
- Logical folder structure
- Clear naming conventions
- Easier to find and edit specific styles

## Migration Steps

### 1. Update Import in TypeScript
Replace current CSS imports with:
```typescript
import './styles/main.css';
```

### 2. Update HTML Classes
Replace current button classes with new standardized ones:
```html
<!-- Old -->
<button class="main-button primary dark">Click me</button>

<!-- New -->
<button class="btn btn--main btn--primary-dark">Click me</button>
```

### 3. Use New Utility Classes
Take advantage of the new utility system:
```html
<div class="mt-lg mb-xl text-center">
  <h1 class="text-4xl font-black mb-md">Title</h1>
  <p class="text-base text-secondary">Description</p>
</div>
```

### 4. Leverage CSS Variables
Use the new variable system for consistency:
```css
.custom-component {
  color: var(--color-primary);
  padding: var(--space-lg);
  font-size: var(--text-lg);
  transition: all var(--transition-base);
}
```

## Benefits

1. **Maintainability**: Easier to find and modify styles
2. **Consistency**: Centralized design tokens ensure visual consistency
3. **Scalability**: Clear structure makes adding new components straightforward
4. **Performance**: Single CSS bundle reduces HTTP requests
5. **Developer Experience**: Better organization and naming conventions
6. **Responsive Design**: Standardized breakpoints and utilities

## Next Steps

1. Update your main TypeScript file to import the new CSS
2. Gradually migrate existing HTML to use new class names
3. Remove old CSS files once migration is complete
4. Add new components to the appropriate folders following the established patterns