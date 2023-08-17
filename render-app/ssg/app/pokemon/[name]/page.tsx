import Head from 'next/head';
import pokemon from '../../../../../pokemon.json';
import Image from 'next/image';

export async function generateStaticParams() {
  return pokemon.map(({ name: { english } }) => ({
    name: english,
  }));
}

// 和isr的区别
// export const dynamicParams = true;

export default async function PokemonName({ params }: { params: { name: string } }) {
  const { name } = params;
  // const res = (await fetch('http://localhost:3000/api/pokemon?name=' + name, { next: { revalidate: 60 } })) as any;

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
