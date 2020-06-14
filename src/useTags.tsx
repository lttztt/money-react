import {useState} from 'react';
import {createId} from './lib/createId';

const initTags = [
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'},
];

const useTags = () => { // 封装自定义hooks
  const [tags, setTags] = useState<{ id: number, name: string }[]>(initTags);
  return {tags: tags, setTags};
};

export default useTags;
