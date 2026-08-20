"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Manifesto.module.css";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  eyebrow: string;
  title: string;
  text: string;
  id?: string;
};

/**
 * The one pinned word-by-word reveal on the site. Words are fully visible in
 * CSS; GSAP only dims them to 0.12 when it actually runs, so the copy reads
 * normally without JS, under reduced motion, and on narrow screens.
 */
export default function Manifesto({ eyebrow, title, text, id }: Props) {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 821px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.fromTo(
            `.${styles.word}`,
            { opacity: 0.12 },
            {
              opacity: 1,
              stagger: 0.06,
              ease: "none",
              scrollTrigger: {
                trigger: root.current,
                start: "top top",
                end: "+=110%",
                pin: true,
                scrub: 0.4,
              },
            }
          );
        }
      );

      return () => mm.revert();
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className={styles.manifesto} aria-labelledby={id}>
      <div className="wrap">
        <p className={`eyebrow ${styles.eyebrow}`}>{eyebrow}</p>
        <h2 id={id} className={`display ${styles.title}`}>
          {title}
        </h2>
        {/* aria-label is prohibited on <p>, so the sentence is carried by a
            visually hidden span and the animated words are hidden from AT. */}
        <p className={styles.copy}>
          <span className="sr-only">{text}</span>
          <span aria-hidden="true">
            {text.split(" ").map((word, i) => (
              <span key={`${word}-${i}`} className={styles.word}>
                {word}&nbsp;
              </span>
            ))}
          </span>
        </p>
      </div>
    </section>
  );
}
