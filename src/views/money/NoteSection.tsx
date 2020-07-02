import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from '../../components/Input';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
`;

type Props = {
  value: string,
  onChange: (note: string) => void
}
const NoteSection: React.FC<Props> = (props) => {
  const note = props.value;
  // 这里因为函数组件不支持ref传递
  // 非受控组件（使用defaultValue和onBlur-自己写逻辑控制的）改受控组件 （使用value和onChange react要求的)
  const onChange:ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value)
  };
  return (
    <Wrapper>
      <Input label="备注" type="text" placeholder="请填写备注"
             value={note} onChange={onChange}
      />
    </Wrapper>
  );
};

export {NoteSection};
