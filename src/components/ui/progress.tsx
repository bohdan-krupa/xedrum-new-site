"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import styles from "./progress.module.scss"

type ProgressItem = { title: string; percentages: string }
type Props = { items?: ProgressItem[] }

const Progress: React.FC<Props> = ({ items = [] }) => {
  return (
    <div className={styles.progressWrapper}>
      {items.map((item, index) => (
        <div key={index} className={styles.progressItem}>
          <div className={styles.header}>
            <span className={styles.title}>{item.title}</span>
            <span className={styles.percent}>{item.percentages}%</span>
          </div>

          <ProgressPrimitive.Root className={styles.progressRoot}>
            <ProgressPrimitive.Indicator
              className={styles.progressIndicator}
              style={{ width: `${item.percentages}%` }}
            />
          </ProgressPrimitive.Root>
        </div>
      ))}
    </div>
  )
}

export { Progress }
