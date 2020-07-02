import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    display:flex;
    align-items: center;
    > span { margin-right: 16px; white-space: nowrap; }
    > input {
      display:block;
      width: 100%;
      height: 44px;
      background: none;
      border: none;
    }
`;
type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>  // 通过类型继承 得到input元素该有的属性
const Input: React.FC<Props> = (props) => {
  const {label, children, ...rest} = props;  // 解构和rest方法获取, 下边使用的时候展开操作绑定到input上
  return (
    <Label>
      <span>{label}</span>
      <input {...rest} />
    </Label>
  );
};

export {Input};
