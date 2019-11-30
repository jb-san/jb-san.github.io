import React from "react"
const SSnow =
  typeof window !== `undefined` ? require("react-snow-effect") : null
export default function Snow() {
  return SSnow ? <SSnow></SSnow> : null
}
