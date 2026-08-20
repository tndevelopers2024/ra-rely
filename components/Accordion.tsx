"use client";

import { useId, useState } from "react";
import styles from "./Accordion.module.css";

export type AccordionItem = { question: string; answer: string };

type Props = {
  items: AccordionItem[];
  headingLevel?: "h2" | "h3";
};

export default function Accordion({ items, headingLevel: Tag = "h3" }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const base = useId();

  return (
    <div className={styles.list}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${base}-btn-${i}`;
        const panelId = `${base}-panel-${i}`;

        return (
          <div key={item.question} className={styles.item} data-reveal>
            <Tag className={styles.heading}>
              <button
                id={btnId}
                type="button"
                className={styles.trigger}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className={styles.question}>{item.question}</span>
                <span className={styles.icon} aria-hidden="true" data-open={isOpen} />
              </button>
            </Tag>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={styles.panel}
              hidden={!isOpen}
            >
              <p className={styles.answer}>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
