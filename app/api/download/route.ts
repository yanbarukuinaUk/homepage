import { NextResponse } from 'next/server';
import JSZip from 'jszip';

export async function GET() {
  try {
    const zip = new JSZip();

    // サンプルファイルの内容を追加
    zip.file("readme.txt", "ポートフォリオのサンプルファイルです。");
    zip.file("sample.json", JSON.stringify({ name: "サンプルデータ" }, null, 2));

    // ZIPファイルを生成
    const content = await zip.generateAsync({ type: "uint8array" });

    // レスポンスヘッダーを設定
    const headers = {
      'Content-Type': 'application/zip',
      'Content-Disposition': 'attachment; filename=portfolio.zip'
    };

    return new NextResponse(content, { headers });
  } catch (error) {
    return NextResponse.json({ error: "Failed to generate ZIP file" }, { status: 500 });
  }
}