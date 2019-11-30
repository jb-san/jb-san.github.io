import React from "react"
import Box from "../components/Box"
import Livebox from "../components/Livebox"

export default function Livebar({ text }) {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ border: "1px solid black" }}>
        <Box>
          <div
            style={{
              fontFamily: '"VT323", monospace',
              fontWeight: "bold",
              transformOrigin: "center",
              transform: "scaleY(0.8)",
              paddingLeft: 10,
              color: "#FFF",
              paddingRight: 10,
            }}
          >
            LAJV
          </div>
        </Box>
      </div>
      <div style={{ border: "1px solid black", flexGrow: 1 }}>
        <Livebox>
          <span
            style={{
              fontFamily: '"Trebuchet MS" ,arial,sans-serif',
              paddingLeft: 10,
              paddingRight: 10,
              fontSize: 11,
              color: "#FFF",
            }}
          >
            {text}
          </span>
        </Livebox>
      </div>
    </div>
  )
}
