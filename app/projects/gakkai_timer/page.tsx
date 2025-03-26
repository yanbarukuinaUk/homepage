import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Twitter } from "lucide-react"
import Link from "next/link"

function gakkaitimer() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center text-center space-y-8 mb-16">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          学会・プレゼンタイマー
        </h1>
        <h3>
          スマホで入力してPCに転送
        </h3>

      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">このアプリで出来ること</h3>
            <p className="text-sm text-muted-foreground">
              - ベルを自動で鳴らす
              <br />- 同時に3つまでのタイマー(時間/回数)を設定できる
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">使い方</h3>
            <p className="text-sm text-muted-foreground">
              - 「何分」経過で「何回」鳴らすのか　設定
              <br />- Startボタンを押すとタイマー開始！
              <br />- 以上 (+α. ベルをタップすると手動でも鳴らせる)
            </p>
          </CardContent>
        </Card>
      </div>


      <div className="mt-16 flex justify-center gap-4">
        {/* <Button variant="outline" asChild>
          <Link href="https://github.com/yanbarukuinaUk/WindowsFormsBLEserver" target="_blank">
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Link>
        </Button> */}
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg font-semibold">基本無料</p>
        <p className="text-muted-foreground">広告を削除できます</p>
      </div>
    </div>
  );
}

export default gakkaitimer;