# 🛒 React Shopping Cart

A modern, fully-functional shopping cart application built with React and Context API. Features real-time cart management, product browsing, and a professional e-commerce interface.

## 🚀 Live Demo

**[View Live Demo](https://cozy-tulumba-1f5a09.netlify.app/)**

## ✨ Features

### 🛍️ Core Shopping Functionality
- **Browse Products** - View products from Fake Store API
- **Add to Cart** - Select quantities and add items to cart
- **Manage Cart** - Update quantities, remove items, view totals
- **Real-time Updates** - Cart count updates instantly across all pages
- **Persistent Cart** - Cart state maintained while browsing

### 🎯 Technical Features
- **React Context API** - Global state management without Redux
- **Custom Hooks** - Clean code organization with `useCart()`
- **API Integration** - Real product data from [Fake Store API](https://fakestoreapi.com/)
- **Client-side Routing** - Smooth navigation with React Router
- **Responsive Design** - Works perfectly on all devices
- **Error Handling** - Graceful handling of loading and error states

### 🎨 User Experience
- **Empty Cart States** - Helpful messaging when cart is empty
- **Loading States** - Smooth user experience while fetching data
- **Quantity Controls** - Intuitive +/- buttons and manual input
- **Price Calculations** - Real-time subtotals, tax, and total calculations
- **Professional UI** - Clean, modern interface with hover effects

## 🛠️ Technologies Used

- **Frontend**: React 18, Vite
- **Routing**: React Router DOM 
- **State Management**: React Context API + useState
- **Styling**: CSS3 with Flexbox/Grid
- **API**: Fake Store API
- **Deployment**: Netlify
- **Development**: ES6+, Hooks, Functional Components

## 📁 Project Structure

├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
    ├── _redirects
    └── vite.svg
├── src
    ├── App.css
    ├── App.jsx
    ├── components
    │   ├── Navbar.css
    │   └── Navbar.jsx
    ├── context
    │   └── CartContext.jsx
    ├── index.css
    ├── main.jsx
    └── pages
    │   ├── Cart.css
    │   ├── Cart.jsx
    │   ├── Home.css
    │   ├── Home.jsx
    │   ├── Shop.css
    │   └── Shop.jsx
└── vite.config.js