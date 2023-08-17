import Head from 'next/head';
import Image from 'next/image';

// 组件使用了async默认就会开启ssr渲染
export default async function PokemonName({ params }: { params: { name: string } }) {
  const { name } = params;

  // 和isr的区别
  const res = (await fetch('http://localhost:3000/api/pokemon?name=' + name)) as any;
  const resdata = await res.json();
  const { data } = resdata;

  return (
    <div>
      {data && (
        <>
          <h1>{data.name.english}</h1>
          <div>
            <Image
              src={`/pokemon/${data.name.english.toLowerCase().replace(' ', '-')}.jpg`}
              alt=''
              width={300}
              height={300}
            />
          </div>

          {Object.entries(data.base).map(([key, value]: any) => (
            <div key={key}>
              <span>{key}</span>
              <span>{value}</span>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
