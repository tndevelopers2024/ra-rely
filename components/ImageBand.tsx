"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ImageBand.module.css";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
};

export default function ImageBand({ src, alt, priority }: Props) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 821px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.fromTo(
            `.${styles.mediaWrap}`,
            { scale: 0.9, borderRadius: 16 },
            {
              scale: 1,
              borderRadius: 0,
              ease: "none",
              scrollTrigger: {
                trigger: root.current,
                start: "top 90%",
                end: "top 15%",
                scrub: 0.5,
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
    <div ref={root} className={styles.band}>
      <div className={styles.mediaWrap}>
        <Image
          src={src}
          alt={alt}
          width={2000}
          height={1100}
          priority={priority}
          sizes="100vw"
          className={styles.media}
        />
      </div>
    </div>
  );
}
