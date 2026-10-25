"use client"

import { useEffect, useState } from "react"

export type BaseKey = "ba" | "tlv"
export type Base = { key: BaseKey; timeZone: string }

const BASES: Record<BaseKey, Base> = {
  ba: { key: "ba", timeZone: "America/Argentina/Buenos_Aires" },
  tlv: { key: "tlv", timeZone: "Asia/Jerusalem" },
}

// Based in Tel Aviv from 6 Jan 2027 through 25 May 2027; Buenos Aires otherwise.
const ABROAD_FROM = Date.UTC(2027, 0, 6)
const ABROAD_TO = Date.UTC(2027, 4, 26) // exclusive

export function getBase(now = new Date()): Base {
  const t = now.getTime()
  return t >= ABROAD_FROM && t < ABROAD_TO ? BASES.tlv : BASES.ba
}

export function useBase(): Base {
  const [base, setBase] = useState<Base>(() => getBase())
  useEffect(() => {
    setBase(getBase())
  }, [])
  return base
}
