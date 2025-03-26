// app/projects/[id]/page.tsx
import { useRouter } from "next/router"
import { projects } from "../../projects" // projects 配列をインポート

export default function ProjectDetailPage() {
  const router = useRouter()
  const { id } = router.query // URLからidを取得

  // idに該当するプロジェクトを取得
  const project = projects.find((project) => project.id === id)

  if (!project) {
    return <div>プロジェクトが見つかりませんでした。</div>
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tighter mb-8">{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-lg mb-8"
      />
      <p className="text-lg mb-8">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="badge badge-secondary">{tag}</span>
        ))}
      </div>
    </div>
  )
}
