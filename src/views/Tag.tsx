import React from 'react';
import useTags from '../useTags';
import {
  useParams
} from 'react-router-dom';

type Params = {
  id: string
}
const Tag: React.FC = () => {

  let {tags} = useTags();
  let {id} = useParams<Params>();
  let tag = tags.filter(tag => tag.id === parseFloat(id))[0];
  console.log('tag');
  console.log(tag);

  return (
    <div>{tag.name}</div>
  );
};

export default Tag;
