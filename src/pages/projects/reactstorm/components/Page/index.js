import React from "react"

export default function Page({ children }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#296b84",
      }}
    >
      {children}
    </div>
  )
}
