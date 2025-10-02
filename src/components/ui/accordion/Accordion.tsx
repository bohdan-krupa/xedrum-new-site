// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import styles from "./Accordion.module.scss";

// type AccordionItem = { image: string; title: string; text: string; };
// type Props = { items?: AccordionItem[]; };

// const Accordion: React.FC<Props> = ({ items = [] }) => {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggleItem = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className={styles.accordion}>
//       {items.map((item, index) => (
//         <div key={index} className={styles.item}>
//           <button className={styles.trigger} onClick={() => toggleItem(index)}>
//             <div className={styles.header}>
//               <img src={item.image} alt={item.title} className={styles.image} />
//               <span className={styles.title}>{item.title}</span>
//             </div>
//             <span
//               className={styles.icon}
//               style={{ transform: openIndex === index ? "rotate(45deg)" : "rotate(0deg)" }}
//             >+</span>
//           </button>

//           <AnimatePresence initial={false}>
//             {openIndex === index && (
//               <motion.div
//                 className={styles.content}
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{ height: "auto", opacity: 1 }}
//                 exit={{ height: 0, opacity: 0 }}
//                 transition={{ duration: 0.4, ease: "easeInOut" }}
//               >
//                 <p>{item.text}</p>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Accordion;

"use client"
import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"
import { cn } from "@/lib/utils"
function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}
function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b border-[#E9E9E9] last:border-b-0", className)}
      {...props}
    />
  )
}
function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-xl font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}
function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-p"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

