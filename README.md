# Panda Planner 🐼
**A Hand-Drawn Monthly Planner — Notebook-Style UI**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 🔗 Live Demo
[**→ View Live Project**](https://ili1iml.github.io/Panda-Planner/)

---


## 💡 About

**Panda Planner** is a browser-based monthly planner with a cozy, notebook aesthetic. The calendar renders dynamically each month — users can write notes directly inside each day cell, jot down general notes, and manage a to-do list, all within a paper-textured UI that feels like a physical planner.

Built as my seventh front-end project, focusing on dynamic calendar logic, editable UI elements, and creating atmosphere through typography and texture.

---

## ✨ Features

- **Dynamic Monthly Calendar** — Renders the correct grid for any month, starting on the right weekday
- **Month Navigation** — Previous/Next buttons to browse through months
- **Editable Day Cells** — Click any day and type notes directly inside it
- **Notes & To-Do Sections** — Two free-write text areas at the bottom of the planner
- **Notebook Aesthetic** — Parchment background, grid borders, hand-drawn font (Patrick Hand)
- **Panda Mascot** — Illustrated character anchored to the top corner of the card

---

## 🛠️ Built With

| Technology | Usage |
|---|---|
| HTML5 | Planner card structure — header, calendar grid, bottom sections |
| CSS3 | Paper texture, ink-style borders, CSS Grid for calendar layout |
| Vanilla JavaScript | Dynamic calendar rendering, month navigation logic |
| Google Fonts (Patrick Hand) | Hand-written cursive typeface for the notebook feel |

---

## 📂 Project Structure

```
panda-planner/
├── index.html      # Planner layout — header, calendar grid, notes sections
├── style.css       # Full styling — paper aesthetic, grid, typography
├── script.js       # Calendar logic — rendering, day offset, month navigation
├── panda.png       # Panda mascot illustration
└── README.md       # You are here
```

---

## 🚀 Getting Started

No installation or dependencies required.

```bash
# Clone the repository
git clone https://github.com/ili1iml/Panda-Planner.git

# Navigate into the folder
cd panda-planner

# Open in your browser
open index.html
```

---

## 🧠 What I Learned

- Calculating **first-day offset** for any month — converting `getDay()` output (Sunday = 0) into a Monday-first grid by adjusting the index with `(firstDay === 0) ? 6 : firstDay - 1`
- Using **CSS Grid with `repeat(7, 1fr)`** to build a clean 7-column calendar layout where cells align automatically
- Rendering **editable UI elements** (`<textarea>`) inside dynamically generated grid cells, keeping each cell independently writeable
- Using **`Intl.DateTimeFormat`** to format month names natively without any date library
- Creating a **physical object aesthetic** through CSS — parchment colors, ink-like `border` widths, and handwriting fonts working together as a design system
- Understanding the difference between `innerHTML` (used here for speed) and more robust DOM creation approaches

---

## 🗺️ Roadmap

- [ ] Save notes per day and month using localStorage
- [ ] Highlight today's date automatically
- [ ] Add a color-coding system for different types of notes
- [ ] Add print-to-PDF functionality so it works as a real printable planner
- [ ] Rebuild with React — month as a prop, DayCell as a reusable component

---

## 👩‍💻 Author

**MOUDI ALOTAIBI**  
*Front-end developer in training — building a portfolio one project at a time*

---

> *Plan your days. Feed the panda. 🐼*
