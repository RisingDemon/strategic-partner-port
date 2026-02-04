

# Add Non-Clickable Category Labels to Services Section

## Overview
Add three visual category labels (Strategic, Talent, Cultural) that look like the original tab buttons but are not interactive. These will serve as visual identifiers above the 8 intervention boxes.

---

## Current Structure
```text
Our Interventions (heading)
    |
    v
8 Intervention Boxes (grid)
```

## New Structure
```text
Our Interventions (heading)
    |
    v
[ Strategic ]  [ Talent ]  [ Cultural ]  <-- Non-clickable labels
    |
    v
8 Intervention Boxes (grid)
```

---

## Visual Design

The three category labels will be:
- Styled like rounded buttons/pills with a muted background
- Displayed in a horizontal row, centered
- Non-interactive (no hover cursor change, no click behavior)
- Each with its respective icon (Target, Users, Heart)

```text
+---------------+  +---------------+  +---------------+
|  [icon] Strategic  |  |  [icon] Talent  |  |  [icon] Cultural  |
+---------------+  +---------------+  +---------------+
```

---

## Technical Details

**File**: `src/components/sections/ServicesSection.tsx`

**Changes**:
1. Add a new `div` between the "Our Interventions" heading and the intervention grid
2. Create three styled `div` elements (not buttons) that look like pills/tabs
3. Each label includes:
   - Icon (Target for Strategic, Users for Talent, Heart for Cultural)
   - Category name text
4. Use `cursor-default` to indicate they are not clickable
5. Style with `bg-muted` and `rounded-md` to match the original tab appearance
6. Wrap in `AnimatedSection` for consistent scroll animations

