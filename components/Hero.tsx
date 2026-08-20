"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Hero.module.css";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  eyebrow: string;
  /** One entry per rendered line — each is masked and revealed in turn. */
  titleLines: string[];
  sub: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  /** Small reassurance row under the CTAs. */
  meta?: string[];
  image?: { src: string; alt: string };
  /** Compact drops the media band — used by inner pages. */
  variant?: "full" | "compact";
  children?: React.ReactNode;
};

export default function Hero({
  eyebrow,
  titleLines,
  sub,
  primary,
  secondary,
  meta,
  image,
  variant = "compact",
  children,
}: Props) {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // The load sequence sets its own start state, so it must never run under
      // reduced motion — otherwise the masked lines stay parked off-screen and
      // the copy never appears. matchMedia keeps that guard honest.
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          defaults: { ease: "power4.out" },
          delay: 0.15,
        });

        if (image) {
          tl.fromTo(
            `.${styles.media}`,
            { scale: 1.06, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.8, ease: "power3.out" }
          );
        }

        tl.fromTo(
          `.${styles.line} > span`,
          { yPercent: 110 },
          { yPercent: 0, duration: 1, stagger: 0.1 },
          image ? "-=1.4" : 0
        ).fromTo(
          `.${styles.sub}, .${styles.ctaRow}, .${styles.meta}`,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
          "-=0.6"
        );
      });

      // Scroll drift is desktop-only, and also motion-gated — half of Zero
      // Gravity's amplitude.
      mm.add("(min-width: 821px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.to(`.${styles.content}`, {
          yPercent: -15,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom 40%",
            scrub: true,
          },
        });
      });

      return () => mm.revert();
    }, root);

    return () => ctx.revert();
  }, [image]);

  return (
    <section ref={root} className={`${styles.hero} ${styles[variant]}`}>
      <div className={`wrap ${styles.content}`}>
        <p className={`eyebrow ${styles.eyebrow}`}>{eyebrow}</p>

        <h1 className={`display ${styles.title}`}>
          {titleLines.map((line) => (
            <span key={line} className={styles.line}>
              <span>{line}</span>
            </span>
          ))}
        </h1>

        <p className={styles.sub}>{sub}</p>

        {(primary || secondary) && (
          <div className={styles.ctaRow}>
            {primary && (
              <Link href={primary.href} className="btn btn-solid">
                {primary.label}
              </Link>
            )}
            {secondary && (
              <Link href={secondary.href} className="u-link">
                {secondary.label}
                <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        )}

        {meta && meta.length > 0 && (
          <p className={styles.meta}>
            {meta.map((item, i) => (
              <span key={item}>
                {i > 0 && (
                  <span className={styles.metaDot} aria-hidden="true">
                    |
                  </span>
                )}
                {item}
              </span>
            ))}
          </p>
        )}

        {children}
      </div>

      {image && (
        <div className={styles.mediaWrap}>
          <Image
            className={styles.media}
            src={image.src}
            alt={image.alt}
            width={2000}
            height={1100}
            priority
            sizes="100vw"
          />
        </div>
      )}
    </section>
  );
}
