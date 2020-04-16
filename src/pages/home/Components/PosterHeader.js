import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { xs, sm } from '../../styled-components/device';
import { theme } from '../../styled-components/theme';

const PosterHeaderWrapper = styled.div`
  width: 100%;
  min-height: 56px;
  padding: 12px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 15;

  ${xs}{
    background: url("./images/nav_bar.png") no-repeat bottom / cover;
  }
  ${sm} {
    min-height: 72px;
    padding: 12px 32px;
    background: ${theme.black};
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  }

  img {
    display: inline-block;
    cursor: pointer;
  }

  .left-col {
    display: flex;
    align-items: center;
    color: ${theme.brandPrimary};
    font-size: ${theme.large};
    line-height: ${theme.lineHeight1_41};
    letter-spacing: -0.25px;

    img {
      height: 16px;
      margin-right: 12px;
    }
  }

  .right-col {
    img {
      height: 20px;
    }
  }
`;

const PosterHeader = ({
  title
}) => {
  return (
    <PosterHeaderWrapper>
      <div className="left-col">
        <img
          src="./images/back.png"
          alt="back-icon"
          onClick={() => { alert("Click Back Icon") }}
        />
        {title}
      </div>
      <div className="right-col">
        <img
          src="./images/search.png"
          alt="search-icon"
          onClick={() => { alert("Click Search Icon") }}
        />
      </div>
    </PosterHeaderWrapper>
  );
};


PosterHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default PosterHeader;

