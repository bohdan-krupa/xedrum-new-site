"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Accordion.module.scss";

type AccordionItem = { image: string; title: string; text: string; };
type Props = { items?: AccordionItem[]; };

const Accordion: React.FC<Props> = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <button className={styles.trigger} onClick={() => toggleItem(index)}>
            <div className={styles.header}>
              <img src={item.image} alt={item.title} className={styles.image} />
              <span className={styles.title}>{item.title}</span>
            </div>
            <span
              className={styles.icon}
              style={{ transform: openIndex === index ? "rotate(45deg)" : "rotate(0deg)" }}
            >+</span>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                className={styles.content}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <p>{item.text}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
