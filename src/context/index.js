import React from "react"
import SiteProvider, { useSite } from "./SiteContext"

export default function Provider({ children }) {
  return <SiteProvider>{children}</SiteProvider>
}

export {
  useSite
}