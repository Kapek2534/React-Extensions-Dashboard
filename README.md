# React Extensions Dashboard

A simple and fast web application built with **React** and **Vite**, styled using **CSS Modules**.  
The app dynamically loads data from a **JSON** file and displays each item as a **extension component** representing an extension.

Users can mark extensions as **active** or **inactive**, and filter the view by:
- **Active extensions**
- **Inactive extensions**
- **All extensions**

---

## Features

- Dynamic data rendering from a JSON source  
- Reusable card components for displaying extension details  
- Status toggling — mark extensions as active or inactive  
- Filtering system with three modes: *Active*, *Inactive*, *All*  
- CSS Modules styling for scoped and maintainable styles  
- Vite-powered development for fast builds and hot reloads  

---

## Tech Stack

- **React** - UI library
- **Vite** - development/build tool
- **CSS Modules** - scoped styling
- **JSON**
- **JavaScript / JSX**
- **Local Storage**

---

## How It Works

- The app loads extension data from a JSON file.
- Each extension is displayed as a card component.
- Each card shows:
  - Name
  - Image
  - Description
  - Status (Active/Inactive) with a toggle button
- The filter bar allows switching between:
  - Active
  - Inactive
  - All
- UI updates dynamically based on user interaction.

---

## Installation & Setup

1. Clone the repository
```
git clone https://github.com/kapek2534/react-extensions-dashboard.git
cd your-repo
```
2. Install dependencies
```
npm install
```
3. Start the development server
```
npm run dev
```
