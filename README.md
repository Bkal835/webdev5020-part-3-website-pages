# Title: TreePrint

## Student Information
•	Name: Barka Kalongwe  
•	Student Number: ST10527777  
•	Module / Course: Web Development (Introduction)  
•	Submission: Part 1 and Part 2

## Project Overview

TreePrint is a website built to encourage and support tree planting as a way of tackling environmental degradation and promoting sustainability. The site gives visitors a simple way to learn about the initiative, donate towards tree planting efforts, plant a tree themselves, and track planted trees on an interactive map. It also provides information about the team history and vision and clear channels for visitors to get in touch or make enquiries.
This README documents Part 1 and Part 2 of the project. Part 3 will be added in future submissions.

## Website Goals and Objectives

The Treeprint website aims to: 
•	Record and display tree planting locations using an interactive map. 
•	Highlight regions where there is little or no tree coverage. 
•	Encourage donations to support tree-planting projects. 
•	Track yearly tree-planting goals and display progress. 
•	Educate visitors about environmental conservation. 
•	Increase community participation in reforestation projects. 

## Key Features and Functionality (Part 1)

### Home Page
•	Introduction to Treeprint
•	Annual tree goal progress
•	Featured statistics
•	Call-to-action buttons
### About Us
•	Organisation history
•	Mission and vision
•	Environmental impact
### Interactive Tree Map
•	View planted trees
•	Search locations
•	Filter by region
•	Heat map showing areas needing more trees
### Plant a Tree
•	Submit new tree planting records
•	Upload photos
•	Verification process
### Donate
•	Secure online donations
•	Donation amount selection
•	Project sponsorship
### Enquiry
•	Form to fill
•	Enquire about being a volunteer or sponsor
### Contact Us
•	Contact form
•	Email
•	Phone number
•	Social media links

## Key Features and Functionality (Part 2)
 
Part 2 adds the CSS styling and the responsive web design (RWD). Every page links to the same external stylesheet: assets/styles/style.css.
 
### Colour palette
| Colour | Hex code | Purpose |
|--------|----------|---------|
| Forest Green | #2E7D32 | Primary branding colour (headings, banner, footer) |
| Light Green | #81C784 | Highlights and buttons (cards, borders, buttons) |
| Earth Brown | #795548 | Supporting accents (subheadings, footer top border) |
| Sky Blue | #64B5F6 | Interactive elements and links (links, hover and focus states) |
| White | #FFFFFF | Background |
| Dark Grey | #424242 | Text |
 
### Typography
- Headings: Poppins Bold
- Subheadings: Poppins SemiBold
- Body text: Open Sans Regular (Open Sans Bold is used for buttons)
- The fonts are loaded from the assets/fonts folder with @font-face.

### Styling
- Navigation bar: logo on the left and page links on the right (flexbox). Links change colour on hover and the logo grows when the mouse is over it.
- Banners: green banner with text on one side and an image on the other (Home, About Us and Donate).
- Cards: each section and form is a white card with a rounded Light Green border.
- Home Page: the annual goal and the featured statistics sit side by side in a two-column grid.
- About Us: the headings sit at the top of their sections, with an icon next to the text. The "Our Impact So Far" figures are shown in four green boxes with an icon, a large number and a label.
- Tree Map: "Search for a Location" and "Region Filter" are shown in two columns separated by a line.
- Donate: the R50, R100 and R500 amounts are buttons, and a custom amount field with a "Donate" button was added.
- Forms (Plant a Tree and Enquiry): styled inputs with a Sky Blue outline when selected, and rounded buttons that change colour on hover.
- Footer: four columns with headings (Treeprint, Quick Links, Get Involved, Contact Us and Follow Us). "Plant a Tree", "Volunteer" and "Become a Sponsor" are links.

### Responsive web design
- Every page has the viewport meta tag so it scales correctly on mobile devices.
- Layouts are built with flexbox and CSS grid, and the main content has a maximum width so it stays readable on large screens.
- Two breakpoints are set with media queries:
| Screen | Breakpoint | What changes |
|--------|------------|--------------|
| Desktop | wider than 900px | Full layout: cards side by side, four impact boxes in a row, four footer columns |
| Tablet | 900px and below | Home page cards stack one under the other, impact boxes and footer go to two columns, banner spacing is reduced |
| Phone | 600px and below | Everything goes to one column: navigation is stacked and centred, banner text sits above/below the image, donation amounts stack, form labels move above their inputs, and headings are smaller |

## Timeline and milestone

| Dates | Phase	| Key Activities | Milestone |
|-------|-------|----------------|-----------|
|20 July – 31 Aug|Project Initiation and Planning	Organisation overview|goals/KPIs, competitor analysis, feature list and technical requirements drafted and basic HTML structure|Website proposal submitted|
|1 Sept – 5 Oct|Visual Design & Styling	Colour palette, typography, apply visual styles|CSS styling and responsive breakpoints built and tested across devices|Visual design (CSS styling & responsive design) complete|
|6 – 31 Oct|Enhancing Functionality, SEO & Deployment|Location-based feature, SEO, JavaScript interactivity, forms and deployment|Complete website delivered|

## Site map
index.html  
│  
├── aboutus.html          
├── contactus.html           
├── donate.html          
├── enquiry.html  
├── plantatree.html   
└── treemap.html

## Changelog
### Part 1
Tracking changes and improvements to the website over time with the same order all tasks have been completed.
- Initial project setup: project’s folder created with basic organisation.
- The banner for the Homepage downloaded and saved
- Fonts styles downloaded and added to the folder.
- All text relevant to the website completed and added to the folder.
- Html completed in a day and pushed to GitHub.
- The remaining of the images and icons downloaded and saved.
- Few fixes in the Html.
- Few fixes to the chosen proposal.
- Complete the READme

### Part 2
30 September 2026
- Part 2: continued development (commit aa4512a).
- Update README.md (commit 737e301).
- Update README for improved structure and clarity (commit 3cb893d).
- Revise site map in README.md (commit 5a91f6a).
- Fix formatting of enquiry.html in README (commit dcd7b9e).
4 October 2026
- Home page css (commit b3d8c89).
- Update README.md (commit e0e26c2).
- Home page added css (commit 04748d3).
- Merge remote changes (commit ffe02dc).
- Treemap and plantatree css added (commit 27fd54d).
5 October 2026
- CSS and small fixes added (commit efaa264).
- Footer and small fixes (commit 520639b).


## References

- Domains, 2026. Beginner’s Guide to Website Hosting. [online] Available at: < https://www.domains.co.za/knowledgebase/hosting/website-hosting/?keyword=hosting%20for%20website&matchtype=p&device=c&devicemodel&creative=386487473464&network=g&campaignid=174153030&adgroupid=26325629550&gad_source=1&gad_campaignid=174153030&gbraid=0AAAAAD7prVJf7vm_Ed-X9zmH0lXRLrqb0&gclid=EAIaIQobChMI0461ir-nlgMV1oFQBh11txlSEAAYASAAEgJu4vD_BwE> [Accessed 17 August 2026].
- Ecomatcher, 2026. Get Started with EcoMatcher. [online] Available at: <https://www.ecomatcher.com/get-started/> [Accessed 3 August 2026].
- Google. 2026. Gemini (Version 3). [Large language model]. Available at: <https://gemini.google.com/app> [Accessed: 5 August 2026.]
- Hostafrica, 2026. How Much Does It Cost to Build a Website in South Africa? [online] Available at: <https://hostafrica.co.za/blog/websites/website-basics/how-much-does-a-website-cost-in-south-africa/> [Accessed 15 August 2026].


