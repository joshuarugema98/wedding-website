'use client'

import { useEffect, useRef, useState } from 'react'

const links = [
  ['Home', '#home'],
  ['Our Story', '#our-story'],
  ['Photos', '#photos'],
  ['The Things You Might Not Know', '#about'],
  ['When & where', '#celebrations'],
  ['Gift Registry', '#registry'],
  ['Contact', '#contact'],
  ['Travel', '#guests'],
  ['Explore Rwanda ↗', 'https://visitrwanda.com/'],
]

export function Navigation() {
  const dialog = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  function closeMenu() {
    dialog.current?.close()
    setOpen(false)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const section = entries.find((entry) => entry.isIntersecting)
        if (section) setActive('#' + section.target.id)
      },
      { rootMargin: '-15% 0px -60% 0px', threshold: 0 },
    )
    for (const [, href] of links) {
      if (!href.startsWith('#')) continue
      const element = document.getElementById(href.slice(1))
      if (element) observer.observe(element)
    }
    return () => observer.disconnect()
  }, [])

  function openMenu() {
    dialog.current?.showModal()
    setOpen(true)
  }

  return (
    <>
      <header className="site-masthead">
        <a
          className="couple-mark"
          href="#home"
          aria-label="Joshua and Sandrine — home"
        >
          J<span aria-hidden="true"> / </span>S
        </a>
        <button
          className="menu-trigger"
          onClick={openMenu}
          aria-label="Open navigation"
          aria-expanded={open}
          aria-controls="site-menu"
        >
          Menu <span aria-hidden="true">+</span>
        </button>
      </header>
      <dialog
        id="site-menu"
        ref={dialog}
        className="navigation-panel"
        aria-label="Navigation"
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeMenu()
        }}
      >
        <div className="navigation-panel-content">
          <div className="menu-top">
            <span>Joshua & Sandrine</span>
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation"
            >
              ×
            </button>
          </div>
          <nav aria-label="Main navigation">
            {links.map(([label, href], index) => (
              <a
                key={href}
                href={href}
                target={href.startsWith('https:') ? '_blank' : undefined}
                rel={href.startsWith('https:') ? 'noreferrer' : undefined}
                aria-current={active === href ? 'location' : undefined}
                onClick={() => {
                  if (href.startsWith('#')) setActive(href)
                  closeMenu()
                }}
              >
                <span className="menu-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {label}
              </a>
            ))}
          </nav>
          <p className="menu-date">Kigali · 18 & 20 December 2026</p>
        </div>
      </dialog>
    </>
  )
}
