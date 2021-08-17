import Header from '@src/components/Header';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import Content from '@src/components/Content';

const Title = styled.h1`
  color: ${(props) => props.theme.palette.primary.main};
`;

function MainPage() {
  return (
    <>
      <Header />
      <Content />
      <Title>
        <FormattedMessage id="hi" />
      </Title>
    </>
  );
}

export default MainPage;
