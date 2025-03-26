import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Twitter } from "lucide-react"
import Link from "next/link"


function app-ads() {
  return (
    <Button asChild>
      <Link href="/files/app-ads.txt" download>
        ZIPファイルをダウンロード
      </Link>
    </Button>
  );
}

export default app - ads;