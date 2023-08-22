import Head from 'next/head';
import { Container, Row, Col, Button } from 'react-bootstrap';
import pokemon from '../../../../pokemon.json';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Time from './time';

// 获取所有二级路由
export async function getStaticPaths() {
  return {
    paths: pokemon.map(({ name: { english } }) => ({
      params: {
        name: english,
      },
    })),
  };
}

export async function getStaticProps(context: any) {
  console.log(context);
  const time = new Date().toLocaleTimeString();
  return {
    props: {
      data: pokemon.filter(({ name: { english } }) => english === context.params.name)[0],
      time,
    },
  };
}


const PokemonName = ({ data, time }: any) => {

  if (!data || !time) return;

  return (
    <div>
      <Head>
        <title>{(data && data.name.english) || 'Pokemon'}</title>
      </Head>
      <Container>
        {/* <Time /> */}
        <div>页面生成时间:{time}</div>
        <Button
          onClick={() => {
            axios.get('http://127.0.0.1:3000/api/revalidate?secret=YASOLUPDATE&path=/pokemon/Ivysaur');
          }}
        >
          重新获取
        </Button>
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
