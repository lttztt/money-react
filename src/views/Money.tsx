import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import {TagsSection} from './money/TagsSection';
import {NoteSection} from './money/NoteSection';
import {CategorySection} from './money/CategorySection';
import {NumberPadSection} from './money/NumberPadSection';


const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`;
const Money = () => {
  return (
    <MyLayout>
      <TagsSection/>
      <NoteSection />
      <CategorySection />
      <NumberPadSection>
      </NumberPadSection>
    </MyLayout>
  );
};
export default Money;
