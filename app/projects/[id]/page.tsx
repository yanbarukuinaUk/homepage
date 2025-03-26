import { useRouter } from 'next/router'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

// 仮のプロジェクトデータ
const projects = [
  {
    id: "project-1",
    title: "プロジェクト 1",
    description: "プロジェクト 1 の詳細な説明。",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "project-2",
    title: "プロジェクト 2",
    description: "プロジェクト 2 の詳細な説明。",
    image: "https://images.unsplash.com/photo-1604014237744-bad3e8c802b9?auto=format&fit=crop&q=80&w=600",
    tags: ["React", "JavaScript", "CSS"],
  },
]

export default function ProjectDetailPage() {


  return (
    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
      ポートフォリオ & ソフトウェアショーケース
    </h1>
  )
}
