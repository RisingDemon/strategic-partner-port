

# Update Key Skills Section with New Skill Items

## Overview
Replace the current 4-skill grid with a new list of 7 skill areas, displayed as a clean vertical list with bullet points matching the user's format.

---

## Current State
The Key Skills section shows 4 items in a 2-column grid with icons:
- Business Partnership
- Change Management  
- Industrial Relations
- CXO-level Head Hunting

## New Skills to Display
1. Business Partnership, Leadership alignment, talent - acquire, groom and retain
2. Tools & Systems
3. Organization Structure, Diagnostics, OD, Change Management & Culture
4. Performance Driven culture
5. Employee Engagement
6. Job Analysis, Job Evaluation, Compensation & Benefits
7. Legal compliance and Industrial Relations

---

## Design Approach

Since the new skills are longer text items (some quite lengthy), a simple bulleted list inside a single card will work better than individual boxes:

```text
+---------------------------------------+
|  Key Skills                           |
|                                       |
|  • Business Partnership, Leadership   |
|    alignment, talent - acquire,       |
|    groom and retain                   |
|                                       |
|  • Tools & Systems                    |
|                                       |
|  • Organization Structure,            |
|    Diagnostics, OD, Change            |
|    Management & Culture               |
|                                       |
|  • Performance Driven culture         |
|                                       |
|  • Employee Engagement                |
|                                       |
|  • Job Analysis, Job Evaluation,      |
|    Compensation & Benefits            |
|                                       |
|  • Legal compliance and Industrial    |
|    Relations                          |
+---------------------------------------+
```

---

## Technical Details

**File**: `src/components/sections/AboutSection.tsx`

**Changes**:
1. Update the `skills` array to contain the 7 new skill strings
2. Replace the 2-column grid layout with a single card containing a vertical list
3. Style each item with a bullet point (using a small primary-colored dot or check icon)
4. Maintain the existing header with Target icon
5. Keep scroll animations for visual consistency

