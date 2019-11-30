import React from "react"
import heart from "./heart.svg"
import feet from "./feet.svg"
import mail from "./mail.svg"
import pencils from "./pencils.svg"
export default function Quicklink({ children, icon, to = "#" }) {
  const icons = {
    heart: heart,
    feet: feet,
    mail: mail,
    pencils: pencils,
  }
  return (
    <a
      href={to}
      style={{
        fontFamily: "VT323",
        fontSize: 11,
        letterSpacing: 2,
        height: 32,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontWeight: "bold",
        padding: 5,
        textDecoration: "none",
        color: "white",
      }}
    >
      <div style={{ flexGrow: 1 }}>
        <img src={icons[icon]} alt={`quick link icon`} width={18} height={18} />
      </div>
      <div>{children}</div>
    </a>
  )
}
