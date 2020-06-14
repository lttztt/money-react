import React from 'react';
import useTags from '../useTags';
import {
  useParams
} from 'react-router-dom';

type Params = {
  id: string
}
const Tag: React.FC = () => {

  let {findTag} = useTags();
  let {id} = useParams<Params>();
  let tag = findTag(parseFloat(id));

  return (
    <div>{tag.name}</div>
  );
};

export default Tag;
