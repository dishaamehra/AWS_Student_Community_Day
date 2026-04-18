# AWS Student Community Day – Enhancement (Task C)

## Task Chosen  
**Task C: Smart Search (Real-time Filtering)**

---

## Overview  

The website contains multiple speaker cards, and as the number of speakers increases, it becomes difficult to find specific ones quickly.  

To solve this, I added a **real-time search feature** that allows users to filter speakers based on what they type.

---

## Feature Added: Smart Search  

- Added a search bar in the speakers section  
- Filters speaker cards dynamically while typing  
- No page reload required  

---

## Implementation Details  

- Added an input field (`#searchBar`) in the speakers section (index.html)  
- Implemented search logic in `speaker_card.js`  
- Used `addEventListener("keyup")` to capture user input  
- Selected all speaker cards using `querySelectorAll(".speaker-card")`  
- For each card:
  - Extracted the speaker name using `querySelector("h3")`  
  - Extracted other details using `.speaker-details`  
- Converted text to lowercase using `toLowerCase()` for case-insensitive matching  
- Used `includes()` to check if the input matches card content  
- Dynamically showed or hid cards using `style.display`  

---

## Concepts Used  

- DOM Selection (`getElementById`, `querySelectorAll`)  
- Event Handling (`keyup`)  
- Looping over elements (`forEach`)  
- String handling (`toLowerCase`, `includes`)  

---

## Result  

- Users can search speakers by:
  - Name  
  - Topic  
  - Company  
- Makes navigation faster and easier  
- Works instantly as the user types  

---
## Repository  

🔗 https://github.com/dishaamehra/AWS_Student_Community_Day

---
## Note  

This project is not deployed yet.  
You can run it locally by opening:

```bash
index.html
