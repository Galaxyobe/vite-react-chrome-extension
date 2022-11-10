import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@/index.css'

console.info('chrome content scripts!');



(() => {
  const root = document.createElement('div')
  root.id = 'root'
  document.body.append(root)

  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <div>Hi, Chrome content scripts!</div>
      <App />
    </React.StrictMode>
  )
})()
