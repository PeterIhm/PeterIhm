---
name: Athletic Prestige
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c9c6c5'
  secondary: '#7a5900'
  on-secondary: '#ffffff'
  secondary-container: '#ffc645'
  on-secondary-container: '#725300'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a1c1c'
  on-tertiary-container: '#838484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ffdea1'
  secondary-fixed-dim: '#f6be3c'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5c4300'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Archivo Narrow
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Archivo Narrow
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Archivo Narrow
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Archivo Narrow
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.5'
  body-md:
    fontFamily: Archivo Narrow
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-lg:
    fontFamily: Archivo Narrow
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Archivo Narrow
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin: 32px
---

## Brand & Style

The brand identity centers on a transition from traditional red-white palettes to a high-impact, prestigious aesthetic of black and gold. This design system evokes a sense of "Sporting Excellence" and "Modern Heritage," targeting athletes, fans, and local community members.

The visual style is a blend of **Corporate Modern** and **Bold High-Contrast**. It utilizes heavy structural lines, aggressive typography, and a limited, punchy color palette to create an environment that feels both elite and accessible. The interface should feel authoritative, energetic, and clean, mirroring the discipline of competitive sports.

## Colors

The palette is anchored by a deep "Championship Black" and a vibrant "Victory Gold." 

- **Primary (Black):** Used for main surfaces, primary text, and branding blocks. It provides a sense of weight and stability.
- **Secondary (Gold):** Used for highlights, call-to-actions, and decorative accents (like the vertical stripes in the crest). It represents excellence and premium quality.
- **Tertiary (Off-White/Light Gray):** Used for background surfaces to keep the UI from feeling overly oppressive while maintaining high contrast.
- **Neutral:** Used for secondary text, borders, and disabled states.

In dark mode scenarios, the Primary and Tertiary roles reverse, but the Secondary Gold remains constant as the functional highlight.

## Typography

This design system utilizes **Archivo Narrow** exclusively to maintain a compact, technical, and athletic feel across all touchpoints. 

The typography relies heavily on uppercase styling for headers and labels to mimic the aesthetic of sports jerseys and scoreboard displays. For long-form reading, normal casing with generous line-height is used to maintain legibility. The condensed nature of Archivo Narrow allows for impactful headlines even in tight spatial constraints on mobile devices.

## Layout & Spacing

The layout follows a **Fluid Grid** system with a strict 8px baseline rhythm. 

- **Desktop:** 12-column grid with 24px gutters.
- **Tablet:** 8-column grid with 24px gutters.
- **Mobile:** 4-column grid with 16px gutters and 16px side margins.

Content is organized into "Tactical Blocks"—distinct sections separated by significant vertical whitespace (`xl`) to allow the high-contrast elements to breathe. Use gold vertical accents or borders to separate editorial content, mimicking the stripe pattern found in the logo.

## Elevation & Depth

Hierarchy is established through **Bold Borders** and **Tonal Layers** rather than soft shadows. 

1. **Surface 0 (Base):** Light gray (#F2F2F2).
2. **Surface 1 (Cards):** Pure white with a 1px solid black or gold border.
3. **Surface 2 (Floating/Modals):** High-contrast black backgrounds with gold accents.

Shadows, when used, are "Hard Shadows"—highly saturated, 0-blur offsets in gold or black to reinforce the graphic, poster-like feel of sports media.

## Shapes

The design system adopts a **Sharp (0)** roundedness philosophy. In sports, sharp corners convey precision, aggression, and strength.

All buttons, cards, input fields, and containers must have 90-degree angles. Circular shapes are reserved strictly for the primary logo badge and user avatars to create a clear visual distinction between brand marks and functional UI components.

## Components

### Buttons
- **Primary:** Solid black background, white uppercase text, sharp corners. On hover, the border becomes 2px gold.
- **Secondary:** Transparent background, 2px gold border, black uppercase text.
- **Action:** Solid gold background, black text for high-urgency interactions.

### Cards
- White background with a "Gold Top-Header" (a 4px gold stripe at the top).
- Heavy 1px black border.
- Headlines are always uppercase Archivo Narrow Bold.

### Input Fields
- Rectangular, white background, 1px neutral-gray border.
- On focus, the border turns black with a 2px gold "underline" effect.

### Chips & Tags
- Used for player positions or match status. 
- Rectangular with black background and gold text, or gold background with black text for "Live" indicators.

### Lists
- Separated by thin 1px horizontal lines. 
- Use the gold stripe motif as a bullet point or leading indicator for active list items.