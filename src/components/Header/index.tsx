import React, { useCallback } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors, ThemesEnum } from '@src/slices/themeSlice';
import MyBtn from '@src/components/Button';
import { FormattedMessage } from 'react-intl';

const HeaderRoot = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 218px;
  border-bottom: 2px solid ${(props) => props.theme.palette.primary.lightGrey};
`;
const First = styled.div`
  padding-left: 58px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 218px;
  gap: 21px;
`;
const Last = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 27px;
  align-items: center;
  height: 218px;
  gap: 45px;
`;

const HeaderLinks = styled.span`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 30px;
  color: ${(props) => props.theme.palette.primary.primary};
`;
const Title = styled.span`
  font-family: FiraGO;
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 30px;
  color: ${(props) => props.theme.palette.primary.blue};
`;
const ThemeImg = styled(Image)`
  cursor: pointer;
`;

const Header = () => {
  const dispatch = useDispatch();
  const { currentTheme } = useSelector(selectors.selectTheme);

  const toggleTheme = useCallback(() => {
    dispatch(
      actions.changeTheme(
        currentTheme === 'dark' ? ThemesEnum.Main : ThemesEnum.Dark,
      ),
    );
  }, [currentTheme, dispatch]);

  return (
    <HeaderRoot>
      <First>
        <Image src="/img.png" alt="logo" width={112} height={112} />
        <Title>
          <FormattedMessage id="title" />
        </Title>
      </First>
      <Last>
        {['app', 'mission', 'git', 'docs'].map((title: string) => (
          <HeaderLinks>
            <FormattedMessage id={title} />
          </HeaderLinks>
        ))}
        <ThemeImg
          onClick={toggleTheme}
          src={currentTheme === 'dark' ? '/sun.svg' : '/moon.svg'}
          alt="logo"
          width={25}
          height={25}
        />
        <MyBtn>
          <FormattedMessage id="mainBtn" />
        </MyBtn>
      </Last>
    </HeaderRoot>
  );
};

export default Header;
