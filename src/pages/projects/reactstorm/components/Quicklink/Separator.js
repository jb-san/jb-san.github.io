import React from "react"
import style from "./separator.module.css"
export default function Separator() {
  return (
    <div
      style={{
        // marginLeft: 5,
        // marginRight: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div className={style.root}></div>
      <div className={style.root}></div>
      <div className={style.root}></div>
      <div className={style.root}></div>
      <div className={style.root}></div>
      <div className={style.root}></div>
    </div>
  )
}
