import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Twitter, Download } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center text-center space-y-8 mb-16">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          ポートフォリオ & ソフトウェアショーケース
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
          個人開発したソフトウェアやプロジェクトをご紹介します。
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/projects">
              プロジェクトを見る
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">
              お問い合わせ
            </Link>
          </Button>
          {/* <Button variant="secondary" asChild>
            <Link href="/portfolio.zip">
              <Download className="mr-2 h-4 w-4" />
              ダウンロード
            </Link>
          </Button> */}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">最新のテクノロジー</h3>
            <p className="text-sm text-muted-foreground">
              Next.js、React、TypeScriptなど、モダンな技術スタックを活用しています。
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">オープンソース</h3>
            <p className="text-sm text-muted-foreground">
              多くのプロジェクトをオープンソースとして公開し、コミュニティに貢献しています。
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">品質重視</h3>
            <p className="text-sm text-muted-foreground">
              テスト駆動開発とベストプラクティスに従い、高品質なソフトウェアを提供します。
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16 flex justify-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="https://github.com" target="_blank">
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Link>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <Link href="https://twitter.com" target="_blank">
            <Twitter className="h-4 w-4" />
            <span className="sr-only">Twitter</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}