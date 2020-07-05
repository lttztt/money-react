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
    const addTag = () => {
        const tagName = window.prompt('新增标签名?');
        if (tagName !== null && tagName.trim() !== '') {
            setTags([...tags, {id: createId(), name: tagName}]);
        }
    };
    const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
    const findTagIndex = (id: number) => {
        let result = -1;
        for (let i = 0; i < tags.length; i++) {
            if (tags[i].id === id) {
                result = i;
                break;
            }
            return result;
        }
    };
    const updateTag = (id: number, {name}: { name: string }) => {
        setTags(tags.map(tag => tag.id === id ? {id, name} : tag));
    };

    const deleteTag = (id: number) => {
        setTags(tags.filter(tag => tag.id !== id));   // react 推崇 不可变数据
    };
    return {tags: tags, addTag, setTags, findTag, updateTag, findTagIndex, deleteTag};
};

export default useTags;
