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

  let {findTag} = useTags();
  let {id} = useParams<Params>();
  let tag = findTag(parseFloat(id));

  return (
    <div>
      <Topbar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>
      <div>
        <InputWraper>
          <Input type="text" value={tag.name} label="标签名" placeholder="标签"/>
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
