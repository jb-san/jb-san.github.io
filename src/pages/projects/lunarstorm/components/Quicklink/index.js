import React from "react"

export default function Quicklink({ children }) {
  return (
    <div
      style={{
        fontFamily: "VT323",
        fontSize: 11,
        letterSpacing: 2,
        height: 32,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontWeight: "bold",
      }}
    >
      <div style={{ flexGrow: 1 }}>ICON</div>
      <div>{children}</div>
    </div>
  )
}
