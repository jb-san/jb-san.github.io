import React from "react"
import style from "./index.module.css"
export default function Livebox({ children }) {
  return <div className={style.root}>{children}</div>
}
