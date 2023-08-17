import pokemon from '../../../pokemon.json';
import Image from 'next/image';

export async function generateStaticParams() {
  return pokemon.map(({ name: { english } }) => ({
    name: english,
  }));
}

//dynamicParams设置为（true默认）时，当请求尚未生成的路由段时，它将由服务器渲染并缓存
export const dynamicParams = true;

export default async function PokemonName({ params }: { params: { name: string } }) {
  const { name } = params;
  // revalidate表示在指定的秒数内缓存请求，和pages目录中revalidate配置相同
  // 可以通过配置revalidat重新增量更新
  // todo:增量更新
  const res = await fetch('http://localhost:3000/api/pokemon?name=' + name, {
    next: { revalidate: 60 ,tags: ['collection']},
    headers: { 'Content-Type': 'application/json' },
  });
  const resdata = await res.json();
  // const resdata = pokemon.filter(({ name: { english } }) => english === name)[0] as any;
  const { data, time } = resdata;

  return (
    <div>
      {data && (
        <>
          <h1>{data.name.english}</h1>
          <h2>页面生成时间:{time}</h2>
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
