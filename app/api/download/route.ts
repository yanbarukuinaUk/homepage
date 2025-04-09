import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'public', 'downloads', 'sample.zip');
    const fileContent = readFileSync(filePath);

    const headers = {
      'Content-Type': 'application/zip',
      'Content-Disposition': 'attachment; filename=portfolio.zip'
    };

    return new NextResponse(fileContent, { headers });
  } catch (error) {
    return NextResponse.json({ error: "Failed to read ZIP file" }, { status: 500 });
  }
}