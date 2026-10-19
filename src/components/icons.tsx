import type { SVGProps } from 'react'

export function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 12h15M13 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M8 3v4M16 3v4M4 10h16M12 21H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v7M18 15v6M15 18h6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function PinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M19 10c0 5-7 12-7 12S5 15 5 10a7 7 0 1 1 14 0Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}
