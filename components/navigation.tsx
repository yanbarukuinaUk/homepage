"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Home, Code2, FileText, Mail } from "lucide-react"

const routes = [
  {
    href: "/",
    label: "ホーム",
    icon: Home
  },
  {
    href: "/projects",
    label: "プロジェクト",
    icon: Code2
  },
  {
    href: "/privacy",
    label: "プライバシーポリシー",
    icon: FileText
  },
  {
    href: "/contact",
    label: "お問い合わせ",
    icon: Mail
  }
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-4 flex-1">
          {routes.map((route) => {
            const Icon = route.icon
            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary flex items-center space-x-2",
                  pathname === route.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{route.label}</span>
              </Link>
            )
          })}
        </div>
        <ModeToggle />
      </div>
    </nav>
  )
}