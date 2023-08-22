import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';


// 手动更新页面 
// 例如http://localhost:3000/api/revalidate?path=/pokemon/Charmander&collection=collection
export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path') || '/pokemon/[name]';
  const collection = request.nextUrl.searchParams.get('collection') || 'collection';
  revalidatePath(path);
  revalidateTag(collection);
  console.log('revalidated', path, collection);
  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
    cache: 'no-store',
  });
}
