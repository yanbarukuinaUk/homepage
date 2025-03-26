import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tighter mb-8">プロジェクト</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.id}>
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
                <Button asChild>
                  <Link href={`/${project.id}`}>
                    プロジェクト詳細を見る
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
