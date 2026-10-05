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
|Desktop|wider than 900px|Full layout: cards side by side, four impact boxes in a row, four footer columns|
|Tablet|900px and below|Home page cards stack one under the other, impact boxes and footer go to two columns, banner spacing is reduced|
|Phone|600px and below|Everything goes to one column: navigation is stacked and centred, banner text sits above/below the image, donation amounts stack, form labels move above their inputs, and headings are smaller|

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

## Screenshot
### Desktop
<img width="1917" height="1041" alt="image" src="https://github.com/user-attachments/assets/e1879ef8-1945-404a-94d5-c6a2abe96e0e" />

<img width="1915" height="1027" alt="image" src="https://github.com/user-attachments/assets/6eef685b-22e0-447e-bac9-396770e5ab78" />

### Tablet
<img width="1225" height="1037" alt="image" src="https://github.com/user-attachments/assets/c77da0c8-05e2-4533-bf94-432921b42da2" />

<img width="1206" height="1027" alt="image" src="https://github.com/user-attachments/assets/e52af136-6cd3-401f-9c72-5a95a5f8d429" />

### Phone
<img width="413" height="921" alt="image" src="https://github.com/user-attachments/assets/c8af249a-28b5-4b9a-a991-b055f4dad0aa" />

<img width="406" height="918" alt="image" src="https://github.com/user-attachments/assets/a829c3a2-238b-4947-bf4e-4ac3cf218496" />

<img width="396" height="926" alt="image" src="https://github.com/user-attachments/assets/2fc31329-3c3b-4bfd-9078-b46331271196" />

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


## Disclosure of AI Usage in My Assessment

In the development of this project, I have used generative AI tools to assist in various parts of the assignment. Below is a detailed disclosure of where and how these tools were used:

### 1. **Section(s) in which Generative AI was used:**
- **Debugging**: Used AI to find and fix the layout of my page.

### 2. **Name of AI Tool(s) Used:**
- **Claude** (Anthropic)

### 3. **Purpose/Intention Behind Use:**
- **Meaning Making**: Understanding layout issue.

### 4. **Date(s) in Which Generative AI Was Used:**
- **5 October 2026**

### 5. **Link to the AI Chat(s) or Screenshots:**
- **Chat 1 (Website development)**: [Screenshot of the AI conversation/chat]
<img width="1010" height="157" alt="image" src="https://github.com/user-attachments/assets/d40d4d80-9c88-4e51-9fe4-a6b84fcc4725" />

<img width="883" height="911" alt="image" src="https://github.com/user-attachments/assets/7a621c94-9716-416c-be29-35af12182e83" />

<img width="973" height="747" alt="image" src="https://github.com/user-attachments/assets/b5796ecc-d788-4c01-b111-ab600b94ca10" />

- **Chat 2 (Website development)**: [Screenshot of the AI conversation/chat]
<img width="1055" height="907" alt="image" src="https://github.com/user-attachments/assets/789fab73-3ce5-4d66-a049-3e39084197be" />

<img width="1008" height="918" alt="image" src="https://github.com/user-attachments/assets/81b2102e-9207-430b-a1d0-fcc419a80cb2" />

<img width="1023" height="925" alt="image" src="https://github.com/user-attachments/assets/7ee47a66-41c4-498e-b54d-3557f5a122e9" />

<img width="985" height="847" alt="image" src="https://github.com/user-attachments/assets/426e527f-a468-475c-a022-6618a0bf800e" />




---
