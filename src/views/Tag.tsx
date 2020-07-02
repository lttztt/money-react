import React from 'react';
import useTags from '../useTags';
import {
  useParams
} from 'react-router-dom';
import Icon from '../components/Icon';
import Button from '../components/Button';
import styled from 'styled-components';

const Topbar = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background:#fff;
`

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
        <Icon name="left" />
        <span>编辑标签</span>
        <Icon />
      </Topbar>
      <div>
        <label>
          <span>标签名</span>
          <input type="text" placeholder="标签名"/> </label>
        <div>
          <Button>删除标签</Button>
        </div>
      </div>
    </div>
  );
};

export default Tag;
