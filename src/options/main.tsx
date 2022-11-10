import React from 'react'
import ReactDOM from 'react-dom/client'

console.info('chrome options!');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div>Hi, Chrome options!</div>
  </React.StrictMode>
)