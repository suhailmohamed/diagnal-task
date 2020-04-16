import React from 'react';
import styled from 'styled-components';
import { sm } from '../../styled-components/device';
import { theme } from '../../styled-components/theme';

const HeaderWrapper = styled.header`
  width: 100%;
  min-height: 56px;
  padding: 12px 16px;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 15;
  background: #FFFFFF;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  font-weight: ${theme.semiBold};

  ${sm} {
    min-height: 72px;
    padding: 12px 32px;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      HEADER
    </HeaderWrapper>
  );
};

export default Header;
