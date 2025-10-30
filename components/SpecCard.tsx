"use client"

import { motion } from "framer-motion"
import React from "react"

type SpecCardProps = {
  title: string
  items: string[]
  delay?: number
}

export default function SpecCard({ title, items, delay = 0 }: SpecCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="w-full max-w-[607px] h-auto md:h-[299px] min-h-[299px] bg-[#EBE6D5] rounded-[30px] md:rounded-[55px] pt-4 md:pt-6 pr-4 md:pr-6 pb-4 md:pb-6 pl-4 md:pl-[5px] shadow-lg hover:shadow-xl transition-shadow duration-300 box-border flex flex-col justify-start overflow-hidden"
    >
      <div style={{marginLeft:'2rem', marginTop:'2rem'}}>
        
      <h3
        style={{
          color: "#2A4E36",
          fontFamily: "Inter, sans-serif",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "normal",
        }}
        className="mb-2 md:mb-4 break-words text-left text-[28px] md:text-[43px] ml-[20px] md:ml-[52px] mt-[16px] md:mt-[34px]"
        >
        {title}
      </h3>

      <ul className="space-y-2 overflow-auto md:max-h-[250px] pr-2 md:pr-4 ml-[20px] md:ml-[52px]">
        {items.map((item, i) => (
          <li key={i} className="flex items-start">
            <span
              className="mr-2 md:mr-3 flex-shrink-0"
              style={{
                color: "#000",
                fontFamily: "Inter, sans-serif",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
              >
              -
            </span>
            <span
              style={{
                color: "#000",
                fontFamily: "Inter, sans-serif",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
              className="break-words text-[16px] md:text-[22px] pr-2 flex-1"
              >
              {item}
            </span>
          </li>
        ))}
      </ul>
        </div>
    </motion.div>
  )
}