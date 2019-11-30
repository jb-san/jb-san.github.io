import React from "react"
import style from "./index.module.css"
export default function Link({ to, children }) {
  return (
    <a href={to} className={style.root}>
      {children}
    </a>
  )
}
