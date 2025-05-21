# 📰 News Explorer

A responsive, single-page news aggregator app built with React and Vite. Users can search for news articles, register/login, and save articles to a personal collection.

## 🚀 Live Demo

[🔗 View Deployed Site](https://ttruedell.github.io/newsExplorer/)

---

## 🔑 Test Credentials

Since registration is not currently functional on the frontend, use the following login to access the **Saved Articles** feature:

- Email: elise@example.com

- Password: example1234

---

## 📌 Features

- 🔍 Search for news using keywords
- 🧠 Intelligent validation for forms and search
- 💾 Save and manage favorite articles
- 👤 Register/Login functionality
- 🔐 Conditional rendering based on user authentication
- 📱 Responsive design (mobile → desktop)

---

## 🛠 Built With

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [News API](https://newsapi.org/)
- [GitHub Pages](https://pages.github.com/) for deployment

---

## 📂 Project Structure

src/  
├── assets/  
├── components/  
│ ├── About/  
│ ├── App/  
│ ├── ArticleSection/  
│ ├── ConfirmRegister/  
│ ├── Footer/  
│ ├── Header/  
│ ├── LoginModal/  
│ ├── Main/  
│ ├── ModalWithForm/  
│ ├── Navigation/  
│ ├── NewsCard/  
│ ├── Preloader/  
│ ├── RegisterModal/  
│ └── Searchform/  
├── contexts/  
│ └── CurrentUserContext.js  
├── utils/  
│ ├── auth.js  
│ ├── constants.js  
│ └── newsApi.js  
├── vendor/  
│ ├── fonts/  
│ ├── fonts.css  
│ └── normalize.css  
├── index.css  
├── main.jsx  
└── index.html

---

## ⚙️ Setup & Usage

1. Clone the repo  
   `git clone https://github.com/ttruedell/newsExplorer.git`

2. Install dependencies  
   `npm install`

3. Run locally  
   `npm run dev`

4. Deploy to GitHub Pages  
   `npm run deploy`

> 🔑 Don’t forget to insert your own [News API key](https://newsapi.org/) in `newsApi.js`.

---

## 📃 Pull Request for Review

Submit this pull request link for Stage 1 review:  
[🔗 PR to Main](https://github.com/ttruedell/newsExplorer/pull/2)

---

## 📎 License

This project is for educational purposes under the TripleTen bootcamp program.
