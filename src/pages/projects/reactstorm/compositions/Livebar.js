import React from "react"
import Box from "../components/Box"
import Livebox from "../components/Livebox"

export default function Livebar({ text }) {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ border: "1px solid black" }}>
        <Box>
          <span
            style={{
              fontFamily: '"VT323", monospace',
              fontWeight: "bold",
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            LAJV
          </span>
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
            }}
          >
            {text}
          </span>
        </Livebox>
      </div>
    </div>
  )
}
