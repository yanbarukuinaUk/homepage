import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Twitter, ExternalLink } from "lucide-react"
import Link from "next/link"

function gakkaitimer() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center text-center space-y-8 mb-16">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          学会・プレゼンタイマー
        </h1>
        <h3>
          シンプルなデザインで使いやすい
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
              <br />-  (+α. ベルをタップすると手動でも鳴らせる)
            </p>
          </CardContent>
        </Card>
      </div>


      <div className="mt-16 flex justify-center gap-4">
        <Button variant="secondary" asChild>
          <Link href="https://apps.apple.com/jp/app/%E3%83%97%E3%83%AC%E3%82%BC%E3%83%B3-%E5%AD%A6%E4%BC%9A%E3%82%BF%E3%82%A4%E3%83%9E%E3%83%BC/id6743424506">
            <ExternalLink className="mr-2 h-4 w-4" />
            スマホアプリをダウンロード
          </Link>
        </Button>
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg font-semibold">基本無料</p>
        <p className="text-muted-foreground">広告を削除できます</p>
      </div>
    </div>
  );
}

export default gakkaitimer;