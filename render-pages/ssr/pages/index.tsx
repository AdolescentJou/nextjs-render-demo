import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import * as React from 'react';
import pokemon from '../../../pokemon.json';
import { Container, FormControl, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

type Post = {
  id: string;
  title: string;
};

type Props = {
  posts: Post[];
};

const getPokemon = async () => {
  const { data } = await axios.get(`/api/search`);
  return data.map((pokemon: any) => ({
    ...pokemon,
    image: `/pokemon/${pokemon.name.english.toLowerCase().replace(' ', '-')}.jpg`,
  }));
};

// props 中有下面导出的数据 posts
const PostsIndex: NextPage<Props> = (props) => {
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getPokemon();
    setList(data);
  };

  if (list.length === 0) {
    return;
  }

  return (
    <div>
      <h1>文章列表</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {list.map(({ id, name, type, image }: any) => (
          <Link href={`/pokemon/${name.english}`} key={id} style={{ padding: 8 }}>
            <Card>
              <Card.Img variant='top' src={image} style={{ maxHeight: 300 }} />
              <Card.Body>
                <Card.Title>{name.english}</Card.Title>
                <Card.Subtitle>{type.join(', ')}</Card.Subtitle>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostsIndex;
