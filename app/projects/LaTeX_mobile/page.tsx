
export default function LaTeX() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center text-center space-y-8 mb-16">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          PCソフト (Windows)
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
          解凍後にexeファイルを起動してください。
        </p>
        {/* <Button asChild>
          <Link href="/PC接続度ソフト_byBluetooth_v2.zip" download>
            ダウンロード
          </Link>
        </Button> */}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">このアプリで出来ること</h3>
            <p className="text-sm text-muted-foreground">
              - LaTeXに数式を転送できる
              <br />- 簡単に数式が打てる
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
        <p className="text-muted-foreground">数百円/月でサブスクにする予定です。</p>
      </div>
    </div>
  );
}