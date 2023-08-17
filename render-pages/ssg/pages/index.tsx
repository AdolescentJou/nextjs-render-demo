import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import * as React from 'react';
import pokemon from '../../../pokemon.json';
import { Container, FormControl, Row, Col, Card } from 'react-bootstrap';

type Post = {
  id: string;
  title: string;
};

type Props = {
  posts: Post[];
};

const filter = /.*/;
const pokeList = pokemon
  // .filter(({ name: { english } }) => english.match(filter))
  .slice(0, 10)
  .map((pokemon) => {
    return {
      ...pokemon,
      image: `/pokemon/${pokemon.name.english.toLowerCase().replace(' ', '-')}.jpg`,
    };
  });

// props 中有下面导出的数据 posts
const PostsIndex: NextPage<Props> = (props) => {
  const { posts } = props;
  // 前后端控制台都能打印 -> 同构
  console.log(posts);
  return (
    <div>
      <h1>文章列表</h1>
      <div style={{display:'flex',flexWrap:'wrap'}}>
        {pokeList.map(({ id, name, type, image }) => (
          <Link href={`/pokemon/${name.english}`} key={id}  style={{ padding: 8 }}>
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
