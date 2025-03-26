import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Twitter } from "lucide-react"
import Link from "next/link"

function project_1() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center text-center space-y-8 mb-16">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          コピペ あぷり　スマホ ⇔ PC
        </h1>
        <h3>
          パソコンのキーボード入力が苦手な人に最適なアプリです！
          ストック機能も便利
        </h3>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
          PCソフト(Windows)はこちらからダウンロードしてください。
        </p>
        {<Button asChild>
          <Link href="/PC接続度ソフト_byBluetooth_v2.zip" download>
            ダウンロード
          </Link>
        </Button>}
        <p>
          解凍後にexeファイルを起動してください。
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">このアプリで出来ること</h3>
            <p className="text-sm text-muted-foreground">
              - スマホからパソコンにコピペできる
              <br />- 逆向きもできる
              <br />つまり,スマホのフリック入力を使ってPCに打ち込める
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16 flex justify-center gap-4">
        <Button variant="outline" asChild>
          <Link href="https://github.com/yanbarukuinaUk/WindowsFormsBLEserver" target="_blank">
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Link>
        </Button>
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg font-semibold">価格</p>
        <p className="text-muted-foreground">100円で買い切り</p>
      </div>
    </div>
  );
}

export default project_1;