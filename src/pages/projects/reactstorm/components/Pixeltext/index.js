import React from "react"

export default function Pixeltext({ children, bold, size }) {
  return (
    <div
      style={{
        fontFamily: '"VT323", monospace',
        fontWeight: "bold",
        transformOrigin: "center",
        transform: "scaleY(0.8)",

        color: "#FFF",

        fontSize: size,
      }}
    >
      {children}
    </div>
  )
}
