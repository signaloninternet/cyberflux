import type { ReactNode } from "react"

interface PageIntroProps {
  eyebrow: string
  title: string
  children: ReactNode
}

export default function PageIntro({ eyebrow, title, children }: PageIntroProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-16 sm:pt-24 lg:pt-32 text-center">
      <h1 className="flex flex-col gap-4">
        <span className="text-sm font-semibold tracking-wider uppercase text-[#00E0FF]">{eyebrow}</span>
        <span className="text-4xl sm:text-5xl font-bold tracking-tight">{title}</span>
      </h1>
      <div className="mt-6 text-lg text-gray-600">{children}</div>
    </div>
  )
}
