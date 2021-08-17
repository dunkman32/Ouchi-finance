import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${(props) => props.theme.palette.primary.main};
`;

function MainPage() {
  return (
    <Title>
      <FormattedMessage id="hi" />
    </Title>
  );
}

export default MainPage;
