
# Add Additional Companies to Corporate Achievements

## Overview
Add 8 additional company mentions to the Corporate Achievements section. These will be simple name badges/pills without detailed descriptions, displayed after the existing Welspun and Suzlon cards.

---

## Companies to Add
**Pune-based:**
- PARI
- IAI Joinflex
- ARaymonds
- Carepack

**Other locations:**
- Mahatransco
- MNGL
- Taste'l
- Shop your world

---

## Design Approach

Add a new subsection below the Welspun and Suzlon cards that displays these companies as simple badges/pills in a flex wrap layout:

**Trust Markers Section**
- Leadership Award 2021 badge/highlight
- Client logos displayed in a clean horizontal row (Suzlon, Welspun, hranexi)
- Smooth navigation to all other pages

---

## Technical Details

**Professional Summary**
- Clean layout presenting the seasoned professional background
- Focus on aligning HR to business strategy and cross-functional expertise

**Philosophy Section**
- Highlighted quote: "Even if you're on the right track, you'll get run over if you sit there"
- Visually distinct design treatment to make it memorable

**Credentials & Skills**
- Education: Master's Degree in management science from Bharati Vidyapeeth
- Core skills presented as elegant tags/cards: Business Partnership, Change Management, Industrial Relations, CXO-level Head Hunting

---

## Page 3: Services & Interventions - The "What"

**Core Framework Visual**
- Elegant three-stage visualization: Foundation → Gage → Traverse
- Clean icons representing each stage

**Service Pillars** (presented as cards or tabs)
1. **Strategic**: Vision-Mission-Value drafting, Organization Diagnostics
2. **Talent**: Competency Mapping, Performance Appraisal Systems, Interviewing Skills Workshops
3. **Cultural**: Leadership Alignment, Employee Engagement, Change Management

---

## Page 4: Success Stories - The "How"

**Corporate Achievements**
- **Welspun BAPL (SINTEX)**: M&A due diligence, COVID-19 manpower rationalization
- **Suzlon Energy**: Revamped PMS, managed 2,000+ workforce

**Recent Consulting Projects**
- Mahesh Patil & Co. (Infrastructure)
- DBS Packaging
- Sumeet Trans Logistics

**Engagement Methodology**
- Visual step-by-step flow: Understand & Explore → Agree & Decide → Implement → Review

---

## Page 5: Contact - The Conversion

**Call to Action**
- Clear headline inviting professional meetings
- Quote: "Look forward for the meeting to freeze the interventions and the timelines"

**Contact Information Display**
- Mobile: 91751 23329 (clickable to call)
- Email: 27.anand@gmail.com (clickable to open email client)
- Location: Pune, Maharashtra (with visual indicator)

---

## Navigation & Structure
- Clean, sticky header with navigation links to all 5 pages
- Smooth scrolling single-page option OR multi-page routing (based on preference)
- Mobile-friendly hamburger menu for smaller screens
- Footer with quick links and contact summary

**Changes**:
1. Add a new `div` after the existing 2-column grid (after line 104)
2. Include a subtle label like "Also partnered with" or just display badges directly
3. Create 8 Badge components with company names
4. Style with `flex flex-wrap gap-3 justify-center`
5. Keep consistent with the existing design language
