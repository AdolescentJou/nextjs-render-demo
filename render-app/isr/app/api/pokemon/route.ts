import { NextRequest, NextResponse } from 'next/server';
import pokemon from '../../../../../pokemon.json';

function queryURLParams(URL: string) {
  // const url = location.search; // 项目中可直接通过search方法获取url中"?"符后的字串
  let url = URL.split('?')[1];
  let obj: Record<string, string> = {}; // 声明参数对象
  let arr = url.split('&'); // 以&符号分割为数组
  for (let i = 0; i < arr.length; i++) {
    let arrNew = arr[i].split('='); // 以"="分割为数组
    obj[arrNew[0]] = arrNew[1];
  }
  return obj;
}

export function GET(request: NextRequest) {
  const params = queryURLParams(request.url);
  const { name } = params;
  const data = pokemon.filter(({ name: { english } }) => english === name)[0];
  console.log('--------------------------------');
  
  console.log(data);
  
  try {
    return NextResponse.json(
      {
        data: data,
        time: new Date().toLocaleTimeString(),
        result: 'success',
        resultCode: 0,
      },
      {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
      },
    );
  } catch (error) {
    return NextResponse.json(
      { data: null },
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
}
