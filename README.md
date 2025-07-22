# 🎬 Front-End Take-Home Assignment: Screening Request Feature

Hi! 👋  
Thanks for your interest in the Front-End Lead position. This small assignment is meant to give us insight into **how you think, structure, and build interfaces**, based on a simplified real-world use case from our app.

It is **not timed**, but we suggest budgeting around **2-3 hours** in total.

---

## 📦 Context

You're joining the front-end team of a **Media Asset Management** (MaM) application. Our clients are major movie distributors and documentary producers, and they use our platform to organize, preview, and deliver their media content.

One common action they perform is requesting **screenings** for external partners — a secure way to share specific videos via a private link.

---

## 🎯 Your Mission

Build a simplified version of our **"Create Screening Request"** flow.

### You’ll implement:

- A 2-step form:
  1. **Select video assets** (from a provided list)
  2. **Add recipient email(s), validity date, and message**
- A **summary screen** before submitting
- Basic state handling via **Redux Toolkit**
- Simulated API interactions (mocked with [MSW](https://mswjs.io/))

---

## 🧰 Tech Stack

The base project is already set up with:

- [Vite](https://vitejs.dev/)
- [React 19](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Material UI](https://mui.com/)
- [Mock Service Worker](https://mswjs.io/) (for simulating APIs)

---

## ✅ Requirements

### Functional

- Allow selecting 1 or more assets from a list
- Let the user enter:
  - One or more **recipient email addresses**
  - A **valid-until date**
  - An optional **message**
- Show a **summary** with all info before confirming
- Simulate the API submission using the mock endpoint

### Technical

- Store all form data (you can use **Redux Toolkit (slices or RTK Query)** but it's not mandatory)
- Use **Material UI** for form and layout elements
- Organize code in a **scalable, modular way**
- Bonus: add **basic form validation\* and/or **unit tests\*\*

### Design

- Design file can be found here : https://www.figma.com/design/FgakeqFI9FIh4GxYV0mEV1/Mediaspot---Technical-test?node-id=0-1&t=DjS8kAMngVlR1nqe-1
- You won't be judged on pixel-perfection nor perfect usage of our theme and variables, however we pay a lot of attention to clean UX in our design process. Keep that in mind for integration !

---

## 📁 Project Structure

Here’s what you’ll find already set up:

```bash
src/
├── app/ # store config
├── features/
│ └── screenings/ # your feature folder
├── services/ # RTK Query API slice
├── mocks/ # MSW handlers for mocked API
├── types/ # Shared types (if needed)
└── theme/ # Our App theme, and component base styling
```

---

## 🔍 Evaluation Criteria

| Area              | What We’re Looking For                                         |
| ----------------- | -------------------------------------------------------------- |
| **Code Quality**  | Readability, structure, naming, small focused components       |
| **Architecture**  | Smart separation of logic, state, and UI                       |
| **Redux Usage**   | Correct & idiomatic use of RTK / slices / queries              |
| **Material UI**   | Sensible use of MUI components and theming                     |
| **UX/Details**    | Validation, good defaults, loading and empty states, usability |
| **Documentation** | Short explanation of your approach, trade-offs, etc.           |

---

## 📬 Submission

When you’re ready, please push your code to a private GitHub repo and share access to @ben-chrn & @lucasbois-vdm

We expect you to update this Readme file explaining

- Your key choices
- Any assumptions or trade-offs you faced during the test
- How you'd expand or scale this feature in a production app

---

## ⏱ Estimated Time

We expect this to take **2-3 hours**, but it can vary.  
Please let us know if you need more time or if you have any questions — don't stay in the dark, that's what we're here for.
Best of luck !
