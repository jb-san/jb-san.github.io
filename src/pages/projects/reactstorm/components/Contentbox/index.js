import React from "react"
import Box from "../Box"

export default function Contentbox({ title, children }) {
  return (
    <div
      style={{
        border: "1px solid black",

        fontFamily: '"Trebuchet MS" ,arial,sans-serif',
        color: "#FFF",
        backgroundColor: "#FFF",
      }}
    >
      <Box>{title}</Box>
      <div
        style={{
          padding: 5,
          borderTop: "1px solid black",
          fontFamily: '"Trebuchet MS" ,arial,sans-serif',
          fontSize: 14,
          color: "black",
          height: "auto",
        }}
      >
        {children}
      </div>
    </div>
  )
}
