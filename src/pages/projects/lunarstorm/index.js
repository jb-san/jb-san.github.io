import React from "react"
import "./colors.css"
import style from "./index.module.css"
import Link from "./components/Link"
import Box from "./components/Box"
import Logo from "./components/Logo"
import Separator from "./components/Quicklink/Separator"
import Quicklink from "./components/Quicklink"
import Livebox from "./components/Livebox"
import Livebar from "./compositions/Livebar"
import Navbar from "./compositions/Navbar"
export default function lunarstorm() {
  return (
    <div className={style.body}>
      <Box>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Logo></Logo>
          <Separator></Separator>
        </div>
      </Box>
      <Box>
        <div style={{ display: "flex" }}>
          <Quicklink>GÄSTBOK</Quicklink>
          <Separator></Separator>
          <Quicklink>MELJ</Quicklink>
          <Separator></Separator>
          <Quicklink>DISKUS</Quicklink>
          <Separator></Separator>
          <Quicklink>VÄNNER</Quicklink>
        </div>
      </Box>
      <Livebar text={`jb: this was a fun expirement`} />
      <Navbar />

      <br></br>
      <br></br>
      <br></br>
      <Box>LAJV</Box>
    </div>
  )
}
