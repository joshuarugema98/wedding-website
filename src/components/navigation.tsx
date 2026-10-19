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
  const mobileLinks = useRef<HTMLElement>(null)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')
  const [hasScrolled, setHasScrolled] = useState(false)

  function closeMenu() {
    dialog.current?.close()
    setOpen(false)
  }

  useEffect(() => {
    const sections = links.flatMap(([, href]) => {
      if (!href.startsWith('#')) return []
      const element = document.getElementById(href.slice(1))
      return element ? [element] : []
    })
    let pendingFrame: number | null = null

    function updatePosition() {
      pendingFrame = null
      const readingLine = Math.min(window.innerHeight * 0.25, 180)
      let current = '#home'
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= readingLine) {
          current = '#' + section.id
        }
      }
      if (
        window.scrollY > 0 &&
        window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight - 2
      ) {
        current = '#guests'
      }
      setActive(current)
      setHasScrolled(window.scrollY > 0)
    }

    function scheduleUpdate() {
      if (pendingFrame === null) {
        pendingFrame = window.requestAnimationFrame(updatePosition)
      }
    }

    updatePosition()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    const observer = new ResizeObserver(scheduleUpdate)
    for (const section of sections) observer.observe(section)
    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      observer.disconnect()
      if (pendingFrame !== null) window.cancelAnimationFrame(pendingFrame)
    }
  }, [])

  useEffect(() => {
    if (!hasScrolled) return
    function keepSelectedVisible() {
      if (!window.matchMedia('(max-width: 760px)').matches) return
      const nav = mobileLinks.current
      const selected = nav?.querySelector<HTMLElement>(
        '[aria-current="location"]',
      )
      if (!nav || !selected) return
      const left = selected.offsetLeft
      const right = left + selected.offsetWidth
      if (left < nav.scrollLeft) {
        nav.scrollTo({ left: Math.max(0, left - 8), behavior: 'auto' })
      } else if (right > nav.scrollLeft + nav.clientWidth) {
        nav.scrollTo({ left: right - nav.clientWidth + 8, behavior: 'auto' })
      }
    }
    keepSelectedVisible()
    window.addEventListener('resize', keepSelectedVisible)
    return () => window.removeEventListener('resize', keepSelectedVisible)
  }, [active, hasScrolled])

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
          type="button"
          onClick={openMenu}
          aria-label="Open navigation"
          aria-expanded={open}
          aria-controls="site-menu"
        >
          Menu <span aria-hidden="true">+</span>
        </button>
      </header>
      <div className="mobile-navigation" data-scrolled={hasScrolled}>
        <button
          className="mobile-menu-trigger"
          type="button"
          onClick={openMenu}
          aria-label="Open navigation"
          aria-expanded={open}
          aria-controls="site-menu"
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <nav
          className="mobile-section-links"
          ref={mobileLinks}
          aria-label="Section navigation"
        >
          {links
            .filter(([, href]) => href.startsWith('#'))
            .map(([label, href]) => (
              <a
                key={href}
                href={href}
                aria-current={active === href ? 'location' : undefined}
                onClick={() => setActive(href)}
              >
                {href === '#about'
                  ? 'About Us'
                  : href === '#registry'
                    ? 'Registry'
                    : label}
              </a>
            ))}
        </nav>
      </div>
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
