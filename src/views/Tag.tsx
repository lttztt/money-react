import React from 'react';
import useTags from '../hooks/useTags';
import {
  useParams, useHistory
} from 'react-router-dom';
import Icon from '../components/Icon';
import styled from 'styled-components';
import {Button} from '../components/Button';
import {Input} from '../components/Input';
import {Center} from '../components/Center';
import {Space} from '../components/Space';

const Topbar = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background:#fff;
`;

const InputWraper = styled.div`
  background:#fff;
  padding: 0 16px;
  margin-top: 8px;
`;

type Params = {
  id: string
}
const Tag: React.FC = () => {

  let {findTag, updateTag, deleteTag} = useTags();
  let {id: idString} = useParams<Params>();
  let tag = findTag(parseFloat(idString));

  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  const tagContent = (tag: { id: number, name: string }) => (<div>
    <InputWraper>
      <Input type="text" label="标签名" placeholder="标签"
             value={tag.name}
             onChange={(e) => {
               updateTag(tag.id, {name: e.target.value});
             }}
      />
    </InputWraper>
    <Center>
      <Space/>
      <Space/>
      <Space/>
      <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
    </Center>
  </div>);

  const nullTagContent = <Center>
    <Space/>
    <Space/>
    <Space/>
    <span> tag不存在 </span>
  </Center>;
  return (
    <div>
      <Topbar>
        <Icon name="left" onClick={goBack} className="tag"/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>
      {tag ? tagContent(tag) : nullTagContent}

    </div>
  );
};

export default Tag;
