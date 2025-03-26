import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
  {
    id: "LaTeX_mobile",
    title: "LaTeX mobile アプリ",
    description: "スマホで簡単に数式が書けて，PCに送れる",
    image: "https://yanbarukuinauk.github.io/homepage/images/latex_mobile.png",
  },
  {
    id: "copipe",
    title: "コピペアプリ",
    description: "パソコンのキーボード入力が苦手な人に最適なアプリです！",
    image: "https://yanbarukuinauk.github.io/homepage/images/copipe.png",
  },
  {
    id: "gakkai_timer",
    title: "学会・プレゼンタイマー",
    description: "同時に3つまでのタイマー(時間/回数)を設定できる",
    image: "https://yanbarukuinauk.github.io/homepage/images/gakkai_timer.png",
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

              </div>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href={`/projects/${project.id}`}>
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
