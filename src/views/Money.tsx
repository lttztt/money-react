import React, {useState} from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import {TagsSection} from './money/TagsSection';
import {NoteSection} from './money/NoteSection';
import {CategorySection} from './money/CategorySection';
import {NumberPadSection} from './money/NumberPadSection';
import {useRecords} from '../hooks/useRecords';


const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`;
type Category = '-' | '+'

const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0
}

const Money = () => {
  const [selected, setSelected] = useState(defaultFormData);
  const {records, addRecord} = useRecords();
  type Selected = typeof selected;
  const onChange = (obj: Partial<Selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };
  const submit = () => {
    addRecord(selected);
    alert('保存成功');
    setSelected(defaultFormData)
  }
  return (
    <MyLayout>
      <TagsSection value={selected.tagIds}
                   onChange={tagIds => onChange({tagIds})}/>
      <NoteSection value={selected.note}
                   onChange={note => onChange({note})}/>
      <CategorySection value={selected.category}
                       onChange={category => onChange({category})}/>
      <NumberPadSection value={selected.amount}
                        onChange={amount => onChange({amount})}
                        onOk={submit}
      />
    </MyLayout>
  );
};
export default Money;
