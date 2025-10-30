import React from "react"

export default function IconCard({ icon, title }: { icon: React.ReactNode, title: string }) {
  return (
    <div className="w-full h-full box-border bg-[#F7F4E4] border-3 border-[#2A4E36] rounded-[35px] shadow-md p-6 flex flex-col items-center justify-center overflow-hidden">
      <div
        className="flex items-center justify-center mb-4 text-[#2A4E36] flex-shrink-0"
        style={{ width: 64, height: 64 }}
      >
        {icon}
      </div>

      <span
        className="text-center text-[#2A4E36] break-words"
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: '28px',
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
        }}
      >
        {title}
      </span>
    </div>
  )
}
