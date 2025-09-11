# 🐱 React GitHub Users Fetch Hook

A **React custom hook** to fetch GitHub users dynamically from any API endpoint.  
Provides **loading state**, **error handling**, and **user data** for easy integration in React projects.  
Styled examples use **Tailwind CSS** for modern UI.

---

## 🚀 Features

- 🐱 Fetch GitHub users dynamically
- ⏳ Handles loading state
- ❌ Handles API errors gracefully
- 🔁 Returns users in a reusable, typed object
- 🧩 Built with React Hooks (`useState`, `useEffect`)
- 💡 Easy to integrate in any React component

---

## 🧠 Technologies Used

- **React.js**
- **TypeScript**
- **JavaScript (ES6+)**
- **Tailwind CSS** (for UI examples)
- **Fetch API**

---

## 📌 How It Works

- Call the hook with a GitHub API URL:
  ```ts
  const { gitHubUsers, loading, error } = useGitHubUserFetch("https://api.github.com/users");
---
MIT License

Copyright (c) 2025 Nency

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights 
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
copies of the Software, and to permit persons to whom the Software is 
furnished to do so, subject to the following conditions:

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.

---
📸 Preview
  ![preview](./public/img1.png)
---