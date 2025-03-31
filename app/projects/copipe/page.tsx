"use client"; // クライアントコンポーネントとして動作させる

import { Button } from "@/components/ui/button";
import { saveAs } from "file-saver"; // ファイルダウンロード用
import path from "path";

export default function Project_1() {
  // ダウンロード関数
  const handleDownload = () => {
    const filePath = "/files/PC接続度ソフト_byBluetooth_v2.zip";
    const fileName = path.basename(filePath); // ファイル名を取得
    saveAs(filePath, fileName); // ファイルを保存
  };

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
        <Button onClick={handleDownload}>ダウンロード</Button>
        <p>解凍後にexeファイルを起動してください。</p>
      </div>
    </div>
  );
}
