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
  value: number[],
  onChange: (selected: number[]) => void
}
const TagsSection: React.FC<Props> = (props) => {
  const selectedTagIds = props.value;
  const {tags, addTag} = useTags();

  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      const tags = selectedTagIds.filter(d => d !== tagId); // 返回选中的所有tag中不含当前点击的tag的数组
      props.onChange(tags);
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };

  const getClass = (tag: number) => selectedTagIds.indexOf(tag) >= 0 ? 'selected' : '';
  return (
    <Wrapper>
      <ol>
        {
          tags.map(tag => <li className={getClass(tag.id)} onClick={() => onToggleTag(tag.id)}
                              key={tag.id}>{tag.name}</li>)
        }
      </ol>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  );
};

export {TagsSection};
