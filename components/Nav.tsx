"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, PLACEHOLDER, SITE, SOLUTIONS } from "@/lib/site";
import styles from "./Nav.module.css";

/**
 * One menu, one DOM structure. The same <ul> is a horizontal bar above 960px
 * and a disclosure panel below it — the markup is never duplicated for mobile.
 */
export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const solutionsRef = useRef<HTMLLIElement>(null);

  // Close everything on navigation. Adjusting during render rather than in an
  // effect avoids the cascading re-render React warns about.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
    setSolutionsOpen(false);
  }

  // Escape closes the open layer and returns focus to its trigger.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (solutionsOpen) {
        setSolutionsOpen(false);
        return;
      }
      if (menuOpen) {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen, solutionsOpen]);

  // Clicking outside the Solutions group closes it.
  useEffect(() => {
    if (!solutionsOpen) return;
    const onPointer = (e: PointerEvent) => {
      if (!solutionsRef.current?.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, [solutionsOpen]);

  const solutionsActive = pathname.startsWith("/solutions");

  return (
    <header className={styles.header} data-open={menuOpen}>
      <div className={`wrap ${styles.bar}`}>
        <Link href="/" className={styles.brand} aria-label={`${SITE.name} — home`}>
          <Image
            src="/logo-rely-advisory-group.png"
            alt={SITE.logoAlt}
            width={918}
            height={745}
            priority
            className={styles.logo}
          />
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={styles.bars} aria-hidden="true" data-open={menuOpen} />
        </button>

        <nav
          id="primary-navigation"
          className={styles.nav}
          aria-label="Primary"
        >
          <ul className={styles.list}>
            <li className={styles.group} ref={solutionsRef}>
              <button
                type="button"
                className={styles.link}
                aria-expanded={solutionsOpen}
                aria-controls="solutions-menu"
                data-active={solutionsActive}
                onClick={() => setSolutionsOpen((v) => !v)}
              >
                Solutions
                <span className={styles.caret} aria-hidden="true" data-open={solutionsOpen} />
              </button>
              <ul
                id="solutions-menu"
                className={styles.submenu}
                data-open={solutionsOpen}
              >
                <li>
                  <Link href="/solutions" className={styles.subLink}>
                    All solutions
                  </Link>
                </li>
                {SOLUTIONS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={styles.subLink}
                      aria-current={pathname === item.href ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={styles.link}
                  data-active={pathname.startsWith(item.href)}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <span className={styles.phone}>
              {/* TODO: becomes a tel: link once the business number is approved. */}
              {PLACEHOLDER.telephone}
            </span>
            <Link href="/book-a-review" className={`btn btn-solid ${styles.cta}`}>
              Book a Review
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
