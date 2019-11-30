import React from "react"
import Box from "../components/Box"
import Link from "../components/Link"

export default function Navbar() {
  return (
    <div>
      <div style={{ border: "1px solid black" }}>
        <Box></Box>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ display: "flex" }}>
          <Link to={"#"}>START</Link>
          <Link to={"#"}>PRO</Link>
        </span>
        <span style={{ display: "flex" }}>
          <Link to={"#"}>DISKUS</Link>
          <Link to={"#"}>KLOTTERPLANKET</Link>
        </span>

        <span style={{ display: "flex" }}>
          <Link to={"#"}>VYKORT</Link>
          <Link to={"#"}>TRÄFFAS</Link>
          <Link to={"#"}>SKOJ</Link>
          <Link to={"#"}>MEJL</Link>
        </span>
        <span style={{ display: "flex" }}>
          <Link to={"#"}>MITT KRYPIN</Link>
          <Link to={"#"}>RÖTTER</Link>
        </span>
        <span style={{ display: "flex" }}>
          <Link to={"#"}>INSTÄLLNINGAR</Link>
          <Link to={"#"}>HJÄLP</Link>
          <Link to={"#"}>X</Link>
        </span>
      </div>
    </div>
  )
}
