import React from 'react';
import styled from 'styled-components';
import MyBtn from '@src/components/Button';
import { FormattedMessage } from 'react-intl';

const ContentRoot = styled.div`
  margin-top: 114px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const TXT1 = styled.span`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  font-size: 96px;
  line-height: 150px;
  color: ${(props) => props.theme.palette.primary.primary};
`;
const TXT2 = styled.span`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 150px;
  color: ${(props) => props.theme.palette.primary.toggleGrey};
`;

const Content = () => {
  return (
    <ContentRoot>
      <TXT1>A Revolutionary</TXT1>
      <TXT1>DEX</TXT1>
      <TXT2>
        A trustful farming platform guaranteed by Ethereum validator staking.
      </TXT2>
      <MyBtn width="493px" height="128px" fontSize="48px">
        <FormattedMessage id="mainBtn" />
      </MyBtn>
    </ContentRoot>
  );
};

export default Content;
