import React from "react"
import "./colors.css"
import style from "./index.module.css"
import Box from "./components/Box"
import Logo from "./components/Logo"
import Separator from "./components/Quicklink/Separator"
import Quicklink from "./components/Quicklink"
import Livebar from "./compositions/Livebar"
import Navbar from "./compositions/Navbar"
import Contentbox from "./components/Contentbox"
import Page from "./components/Page"
import Snow from "react-snow-effect"

export default function lunarstorm() {
  return (
    <Page>
      <div className={style.body}>
        <Box>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Logo></Logo>
            <Separator></Separator>
          </div>
        </Box>
        <div style={{ marginLeft: 10 }}>
          <Box>
            <div style={{ display: "flex" }}>
              <Quicklink icon={"feet"}>GÄSTBOK</Quicklink>
              <Separator></Separator>
              <Quicklink icon={"mail"}>MELJ</Quicklink>
              <Separator></Separator>
              <Quicklink icon={"pencils"}>DISKUS</Quicklink>
              <Separator></Separator>
              <Quicklink icon={"heart"}>VÄNNER</Quicklink>
            </div>
          </Box>
          <Livebar text={`jb: this was a fun expirement`} />
          <Navbar />
        </div>
        <div
          style={{
            margin: 10,
            display: "grid",
            gridGap: "10px",
            gridTemplateColumns: "4fr 2fr",
          }}
        >
          <Contentbox
            title={
              <span
                style={{
                  fontFamily: '"VT323", monospace',
                  fontWeight: "bold",
                  fontSize: 24,
                  paddingLeft: 10,
                  paddingRight: 10,
                  color: "#FFF",
                }}
              >
                WELCOME TO REACTSTORM
              </span>
            }
          >
            This was made just as an experiment to use new web technologies to
            rebuild old websites. this probably not the most semantically
            correct or the best way to do this, but it was fun.
          </Contentbox>
          <Contentbox title={`JUST FOR FUN`}>
            all of the code is on my github
            <a href={"https://github.com/jb-san/jb-san.github.io/tree/develop"}>
              here
            </a>
          </Contentbox>
          <Contentbox title={`CREDITS`}>
            Icons made by
            <br />
            <br />
            <a href="https://www.flaticon.com/authors/freepik"> freepik</a>
          </Contentbox>
        </div>
      </div>
    </Page>
  )
}
