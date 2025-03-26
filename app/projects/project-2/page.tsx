import { notFound } from "next/navigation"

const projects = [
  {
    id: "project-1",
    title: "プロジェクト 1",
    description: "プロジェクト 1 の詳細な説明。",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    id: "project-2",
    title: "プロジェクト 2",
    description: "プロジェクト 2 の詳細な説明。",
    image: "https://images.unsplash.com/photo-1604014237744-bad3e8c802b9?auto=format&fit=crop&q=80&w=600",
    github: "https://github.com",
    demo: "https://example.com"
  },
]

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) return notFound()

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tighter mb-4">{project.title}</h1>
      <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-4" />
      <p>{project.description}</p>
      <div className="flex gap-4 mt-4">
        <a href={project.github} target="_blank" className="text-blue-500 underline">GitHub</a>
        <a href={project.demo} target="_blank" className="text-blue-500 underline">デモサイト</a>
      </div>
    </div>
  )
}
