import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Twitter } from "lucide-react"
import Link from "next/link"


function Project1() {
  return (
    <Button asChild>
      <Link href="/files/app-ads.txt" download>
        ZIPファイルをダウンロード
      </Link>
    </Button>
  );
}

export default project_1;