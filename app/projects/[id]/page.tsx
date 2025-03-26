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
  const router = useRouter()
  const { id } = router.query  // URLのパラメータ 'id' を取得

  // プロジェクトデータから、idにマッチするプロジェクトを探す
  const project = projects.find((project) => project.id === id)

  if (!project) {
    return <div>プロジェクトが見つかりませんでした。</div>
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Card>
        <CardHeader>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        </CardHeader>
        <CardContent className="space-y-4">
          <CardTitle>{project.title}</CardTitle>
          <p>{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
          <Button asChild>
            <Link href="/projects">戻る</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
