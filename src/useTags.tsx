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
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for(let i = 0; i < tags.length; i++) {
      if(tags[i].id === id) {
        result = i;
        break;
      }
      return result
    }
  }
  const updateTag = (id: number, obj: {name: string}) => {
    const index = findTagIndex(id);
    const tagClone = JSON.parse(JSON.stringify(tags));
    tagClone.splice(index, 1, {id, name: obj.name})
    setTags(tagClone);   // react 推崇 不可变数据  
  }
  return {tags: tags, setTags, findTag, updateTag, findTagIndex};
};

export default useTags;
