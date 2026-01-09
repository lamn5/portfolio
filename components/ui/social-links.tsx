import { SocialLink } from "@/lib/portfolio-data"
import { LinkedInIcon, GitHubIcon, ResumeIcon } from "./icons"
import { cn } from "@/lib/utils"

interface SocialLinksProps {
  links: SocialLink[]
  className?: string
  variant?: "light" | "dark"
}

export function SocialLinks({ links, className, variant = "light" }: SocialLinksProps) {
  const getIcon = (icon: SocialLink["icon"]) => {
    switch (icon) {
      case "linkedin":
        return <LinkedInIcon className="w-6 h-6" />
      case "github":
        return <GitHubIcon className="w-6 h-6" />
      case "resume":
        return <ResumeIcon className="w-6 h-6" />
    }
  }

  const linkStyles = variant === "dark"
    ? "text-gray-300 hover:text-white transition-all hover:scale-110"
    : "text-gray-600 hover:text-gray-900 transition-all hover:scale-110"

  return (
    <div className={cn("flex items-center gap-4", className)}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={linkStyles}
          aria-label={link.name}
        >
          {getIcon(link.icon)}
        </a>
      ))}
    </div>
  )
}
