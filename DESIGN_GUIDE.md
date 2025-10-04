# Design System & Style Guide 🎨

## Color Palette

### Primary Colors
```css
Cyan Blue:     #00f5ff  /* Primary interactive elements */
Purple:        #7b2ff7  /* Secondary accents */
Hot Pink:      #ff006e  /* Accent highlights */
White:         #ffffff  /* Primary text */
Light Gray:    #b8c5d6  /* Secondary text */
```

### Background Colors
```css
Dark Navy:     #0a0e27  /* Main background */
Dark Blue:     #0f1729  /* Card backgrounds */
```

### Gradient Combinations
```css
Gradient 1: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
Gradient 2: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)
Gradient 3: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)
Gradient 4: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)
Hero:       linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)
```

---

## Typography

### Font Families
- **Display/Headings**: Playfair Display (Serif)
- **Body/UI**: Inter (Sans-serif)
- **Fallback**: -apple-system, BlinkMacSystemFont, "Segoe UI"

### Font Sizes (Responsive with clamp)
```css
H1: clamp(2.5rem, 5vw, 4rem)       /* Hero name */
H2: clamp(1.8rem, 4vw, 2.5rem)     /* Section titles */
H3: clamp(1.5rem, 3vw, 2rem)       /* Subsection titles */
H4: clamp(1.2rem, 2.5vw, 1.5rem)   /* Card titles */
Body: 1.05rem                       /* Regular text */
```

### Font Weights
- Light: 300
- Regular: 400
- Medium: 500
- Semi-Bold: 600
- Bold: 700
- Extra-Bold: 800

---

## Spacing System

### Padding Scale
```css
XS:  8px   /* Tight spacing */
SM:  12px  /* Small gaps */
MD:  20px  /* Medium spacing */
LG:  30px  /* Large gaps */
XL:  40px  /* Section spacing */
2XL: 60px  /* Major sections */
```

### Margin Scale
```css
Cards:     15-20px bottom
Sections:  40-60px bottom
Elements:  10-20px between
```

---

## Border Radius

```css
Small:    8px   /* Buttons, small elements */
Medium:   12px  /* Icons, small cards */
Large:    16px  /* Service cards, icons */
XLarge:   20px  /* Major cards, portfolio items */
Round:    50%   /* Circular elements */
Pill:     25-50px /* Navigation, filters */
```

---

## Shadows

### Card Shadows
```css
Default:  0 10px 30px rgba(0, 0, 0, 0.3)
Hover:    0 20px 60px rgba(102, 126, 234, 0.3)
Elevated: 0 15px 40px rgba(102, 126, 234, 0.4)
```

### Icon Shadows
```css
Default: 0 8px 20px rgba(102, 126, 234, 0.2)
Hover:   0 12px 30px rgba(102, 126, 234, 0.4)
```

---

## Animations

### Duration
```css
Fast:    0.2s  /* Quick feedback */
Normal:  0.3s  /* Standard transitions */
Medium:  0.4s  /* Card animations */
Slow:    0.5s  /* Large movements */
XSlow:   0.6s  /* Scroll reveals */
```

### Easing Functions
```css
Standard:     cubic-bezier(0.4, 0, 0.2, 1)  /* Material Design */
EaseInOut:    ease-in-out                    /* Smooth both ways */
EaseOut:      ease-out                       /* Smooth ending */
```

### Common Animations
```css
Fade In:      opacity 0 → 1
Slide Up:     translateY(30px) → 0
Scale Up:     scale(1) → scale(1.05)
Lift:         translateY(0) → translateY(-8px)
Rotate:       rotate(0deg) → rotate(5deg)
```

---

## Effects

### Glass-morphism
```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.1);
box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
```

### Gradient Text
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

### Hover Glow
```css
box-shadow: 0 20px 60px rgba(102, 126, 234, 0.4);
border-color: rgba(102, 126, 234, 0.5);
```

---

## Component Patterns

### Cards
```css
Structure:
- Glass background
- Rounded corners (20px)
- 1px subtle border
- Box shadow for depth
- Hover: Lift + Enhanced shadow
- Transition: 0.4s cubic-bezier
```

### Buttons
```css
Structure:
- Gradient background
- Pill shape (25-30px radius)
- Medium padding (12-14px vertical, 28-32px horizontal)
- Bold font weight
- Box shadow
- Hover: Lift + Brighter gradient
```

### Icons
```css
Structure:
- 16-20px border-radius
- Glass background or gradient
- 50-70px container size
- Centered alignment
- Hover: Scale + Rotate slightly
```

### Navigation Items
```css
Structure:
- Glass pill container
- Individual pill items
- Gradient on active/hover
- Smooth width transition
- Letter spacing for readability
```

---

## Responsive Breakpoints

```css
/* Mobile First Approach */
Mobile:       < 576px   /* Stack everything */
Tablet:       576-768px /* 2-column layouts */
Laptop:       768-992px /* 3-column layouts */
Desktop:      992-1200px /* 4-column layouts */
Large:        > 1200px  /* Full experience */
```

### Mobile Adjustments
- Reduce font sizes slightly
- Stack columns vertically
- Increase touch targets (44px minimum)
- Simplify animations
- Remove cursor effects
- Adjust spacing

---

## Interaction States

### Default
- Base styling
- Subtle border
- Default colors

### Hover (Desktop)
- Transform: translateY(-8px) or scale(1.05)
- Enhanced box-shadow
- Color brightness increase
- Border glow effect
- Smooth transition

### Focus
- Maintain hover state
- Add focus ring for accessibility
- Ensure keyboard navigation visible

### Active/Pressed
- Slight scale down: scale(0.98)
- Reduced shadow
- Brief transition

### Disabled
- Reduced opacity: 0.5
- Grayscale filter
- Cursor: not-allowed
- No hover effects

---

## Animation Keyframes

### Float
```css
@keyframes float {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(30px, -30px) rotate(120deg); }
  66% { transform: translate(-20px, 20px) rotate(240deg); }
}
```

### Gradient Shift
```css
@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

### Fade In Up
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Pulse
```css
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scaleX(1); }
  50% { opacity: 0.5; transform: scaleX(0.95); }
}
```

---

## Best Practices

### Performance
- Use `transform` and `opacity` for animations (GPU accelerated)
- Avoid animating `width`, `height`, `left`, `right` (causes reflow)
- Use `will-change` sparingly
- Throttle scroll events
- Lazy load images

### Accessibility
- Maintain color contrast ratios (WCAG AA minimum)
- Provide focus indicators
- Support keyboard navigation
- Add `prefers-reduced-motion` support
- Use semantic HTML

### Maintainability
- Use CSS variables for colors and spacing
- Comment complex code
- Follow consistent naming conventions
- Modularize large files
- Keep selectors specific but not overly complex

---

## Usage Examples

### Creating a New Card
```css
.my-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 30px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.my-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3);
  border-color: rgba(102, 126, 234, 0.5);
}
```

### Adding a Gradient Button
```css
.my-button {
  padding: 14px 32px;
  background: var(--gradient-1);
  color: white;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.my-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.5);
}
```

### Creating Gradient Text
```css
.gradient-text {
  background: var(--gradient-hero);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientText 8s ease infinite;
  background-size: 200% auto;
}
```

---

## Quick Reference

### Most Used Classes
- `.glass` - Glass-morphism effect
- `.icon-box` - Card with icon
- `.portfolio-item` - Project card
- `.info-box` - Contact card
- `.section-title` - Section header

### CSS Variables to Remember
```css
var(--primary-color)
var(--secondary-color)
var(--accent-color)
var(--text-color)
var(--text-secondary)
var(--dark-bg)
var(--gradient-1)
var(--gradient-hero)
```

---

This design system ensures consistency across your portfolio while maintaining flexibility for future additions. All components follow the same principles: glass-morphism, smooth animations, gradient accents, and modern spacing.

