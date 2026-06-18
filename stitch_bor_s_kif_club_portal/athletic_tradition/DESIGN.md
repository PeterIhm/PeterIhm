---
name: Athletic Tradition
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#5e3f3b'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#936e69'
  outline-variant: '#e9bcb6'
  surface-tint: '#c0000c'
  primary: '#b5000b'
  on-primary: '#ffffff'
  primary-container: '#e30613'
  on-primary-container: '#fff5f3'
  inverse-primary: '#ffb4aa'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dfe0e0'
  on-secondary-container: '#616363'
  tertiary: '#595958'
  on-tertiary: '#ffffff'
  tertiary-container: '#727171'
  on-tertiary-container: '#faf6f6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4aa'
  on-primary-fixed: '#410001'
  on-primary-fixed-variant: '#930007'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Archivo Narrow
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Archivo Narrow
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
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
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-bold:
    fontFamily: Archivo Narrow
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 80px
---

## Brand & Style
The design system is built to evoke the spirit of a classic Swedish "förening"—reliable, community-focused, and intensely competitive. It balances the heritage of Borås KIF with a modern professional sports aesthetic. 

The style is **High-Contrast & Bold**, utilizing aggressive typography and a high-energy color palette to drive engagement. It avoids unnecessary decorative elements in favor of a "form follows function" approach, characteristic of institutional sports design. The visual mood is authoritative, energetic, and clean, ensuring that information like match results and club news is communicated with urgency and clarity.

## Colors
The palette is dominated by the club’s iconic Red and White. 

- **Primary Red (#e30613):** Used for key brand moments, primary actions, and high-energy accents.
- **Secondary White (#ffffff):** The base for the interface, ensuring a clean and legible background.
- **Deep Carbon (#1a1a1a):** Introduced as a tertiary color for text, heavy borders, and footer elements to ground the vibrant red and provide necessary professional contrast.
- **Stadium Grey (#f4f4f4):** Used for subtle section backgrounds and container fills to prevent the design from feeling too stark.

## Typography
The typography system uses **Archivo Narrow** for all high-impact editorial and directional content. Its condensed nature allows for long Swedish compound words to fit effectively within layouts. All headlines and labels must be set in **Uppercase** to reinforce the athletic, authoritative tone.

**Inter** is utilized for body copy and dense informational blocks to ensure maximum readability and a modern, systematic feel. This pairing bridges the gap between traditional sports posters and contemporary SaaS-level usability.

## Layout & Spacing
The layout follows a **Fixed Grid** model for desktop to maintain the structured feel of an official institution. A 12-column grid is used with a maximum container width of 1280px.

- **Desktop:** Generous section gaps (80px+) create a "premium" feel, allowing high-quality action photography to breathe.
- **Mobile:** Transition to a fluid 4-column layout with 16px margins. 
- **Rhythm:** Spacing follows an 8px base unit. Component internal padding should favor vertical density and horizontal breadth to mimic the rectangular nature of the logo and condensed type.

## Elevation & Depth
This design system rejects soft shadows in favor of **Bold Borders** and **Tonal Layers**. 

Depth is achieved through high-contrast layering—white cards on light grey backgrounds or red elements on white. Where separation is required, use a solid 1px or 2px border in Deep Carbon or Primary Red. This creates a tactile, "printed" feel reminiscent of traditional sports programs. Do not use blurs or gradients; depth should be flat and structural.

## Shapes
The shape language is strictly **Sharp (0px)**. 

To mirror the architectural nature of the club's shield and the industrial history of Borås, all buttons, containers, and image masks use right angles. This creates a sense of strength, stability, and discipline. The only circular elements allowed are the official club crest and specific UI toggles if necessary for accessibility.

## Components
- **Buttons:** Sharp corners, uppercase Archivo Narrow text. Primary buttons are solid Red with White text. Secondary buttons are White with a 2px Deep Carbon border.
- **Match Cards:** Use a light grey background (#f4f4f4) with a vertical red "status" stripe on the left edge. Score results should be in the largest headline weight.
- **Chips/Badges:** Used for league standings or categories. Solid Deep Carbon background with White text, strictly rectangular.
- **Input Fields:** 2px solid borders that change to Red on focus. Labels sit above the field in small, bold, uppercase Archivo Narrow.
- **Imagery:** Large-scale action shots should use a slight high-contrast treatment. Apply a subtle Red color-burn overlay on hover states for interactive images.
- **Navigation:** Top-tier navigation uses bold uppercase links. Active states are indicated by a 4px Red underline rather than a color change.