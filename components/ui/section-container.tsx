import { cn } from "@/lib/utils"

interface SectionContainerProps {
  id?: string
  children: React.ReactNode
  className?: string
}

export function SectionContainer({
  id,
  children,
  className,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn("py-20 sm:py-32 px-4 sm:px-6", className)}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  )
}
