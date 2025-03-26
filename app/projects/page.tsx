import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/router"

const projects = [
  {
    id: "project-1",
    title: "プロジェクト 1",
    description: "プロジェクトの詳細な説明をここに記載します。",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    id: "project-2",
    title: "プロジェクト 2",
    description: "プロジェクトの詳細な説明をここに記載します。",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
    tags: ["React", "Node.js", "Express"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    id: "project-3",
    title: "プロジェクト 3",
    description: "プロジェクトの詳細な説明をここに記載します。",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
    tags: ["Vue", "Firebase", "CSS"],
    github: "https://github.com",
    demo: "https://example.com"
  }
]

export default function ProjectsPage() {
  const router = useRouter()

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tighter mb-8">プロジェクト</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.id} onClick={() => router.push(`/projects/${project.id}`)} className="cursor-pointer">
            <CardHeader>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="space-y-4">
              <CardTitle>{project.title}</CardTitle>
              <p className="text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.github} target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href={project.demo} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    デモ
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
