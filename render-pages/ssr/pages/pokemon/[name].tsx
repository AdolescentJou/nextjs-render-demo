import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import pokemon from '../../../../pokemon.json';
import Image from 'next/image';
import axios from 'axios';

const getPokemon = async (key: any, name: any) => {
  const { data } = await axios.get(`http://localhost:3001/api/pokemon?name=${escape(name)}`);
  return data;
};

export async function getServerSideProps(context: any) {
  const data = await getPokemon(null, context.params.name);
  return {
    props: {
      data: data,
    },
  };
}

const PokemonName = ({ data }: any) => {
  console.log('服务端输出');
  
  return (
    <div>
      <Head>
        <title>{(data && data.name.english) || 'Pokemon'}</title>
      </Head>
      <Container>
        {data && (
          <>
            <h1>{data.name.english}</h1>
            <Row>
              <Col xs={4}>
                <Image
                  src={`/pokemon/${data.name.english.toLowerCase().replace(' ', '-')}.jpg`}
                  alt=''
                  width={300}
                  height={300}
                />
              </Col>
              <Col xs={8}>
                {Object.entries(data.base).map(([key, value]: any) => (
                  <Row key={key}>
                    <Col xs={2}>{key}</Col>
                    <Col xs={10}>{value}</Col>
                  </Row>
                ))}
              </Col>
            </Row>
          </>
        )}
      </Container>
    </div>
  );
};

export default PokemonName;
