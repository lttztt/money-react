import React from 'react';
import useTags from '../useTags';
import {
  useParams
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

  let {findTag, updateTag} = useTags();
  let {id: idString} = useParams<Params>();
  let tag = findTag(parseFloat(idString));

  return (
    <div>
      <Topbar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>
      <div>
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
          <Button>删除标签</Button>
        </Center>
      </div>
    </div>
  );
};

export default Tag;
