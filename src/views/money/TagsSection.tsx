import styled from 'styled-components';
import React from 'react';
import useTags from '../../useTags';

const Wrapper = styled.section`
  background: #FFFFFF; padding: 12px 16px;
  flex-grow: 1; display:flex; flex-direction: column;
  justify-content: flex-end; align-items: flex-start;
  > ol { margin: 0 -12px;
    > li{
       background: #D9D9D9; border-radius: 18px;
       display:inline-block; padding: 3px 18px; 
       font-size: 14px; margin: 8px 12px;
       &.selected {
        background:#f00;
        color:#fff;
       }
    }
  }
  > button{
    background:none; border: none; padding: 2px 4px;
    border-bottom: 1px solid #333; color: #666;
    margin-top: 8px;
  }
`;
type Props = {
  value: string[],
  onChange: (selected: string[]) => void
}
const TagsSection: React.FC<Props> = (props) => {
  const selectedTags = props.value;
  const {tags, setTags} = useTags();
  const onAddTag = () => {
    const tagName = window.prompt('新增标签名?');
    if (tagName !== null) {
      setTags([...tags, tagName]);
    }
  };

  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag);
    if (index >= 0) {
      const tags = selectedTags.filter(d => d !== tag); // 返回选中的所有tag中不含当前点击的tag的数组
      props.onChange(tags);
    } else {
      props.onChange([...selectedTags, tag]);
    }
  };

  const getClass = (tag: string) => selectedTags.indexOf(tag) >= 0 ? 'selected' : '';
  return (
    <Wrapper>
      <ol>
        {
          tags.map(tag => <li className={getClass(tag)} onClick={() => onToggleTag(tag)} key={tag}>{tag}</li>)
        }
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};

export {TagsSection};
