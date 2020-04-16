import React, { Fragment } from 'react';
import styled from 'styled-components';
import { PosterListingPage1 } from '../Constants/PosterListingPage1';
import { PosterListingPage2 } from '../Constants/PosterListingPage2';
import { PosterListingPage3 } from '../Constants/PosterListingPage3';
import PosterHeader from './PosterHeader';

import { sm, md } from '../../styled-components/device';
import { theme } from '../../styled-components/theme';

const PosterCardWrapper = styled.div`
  margin-top: 36px;
  margin-bottom: 48px;

  .poster-card {
    margin-bottom: 32px;
    cursor: pointer;

    ${sm} {
      &:hover {
        figure::before {
          transform: scale(1.1);
        }
      }
    }

    figure {
      position: relative;
      width: 100%;
      height: 136px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      margin-bottom: 12px;
      overflow: hidden;
      transition: transform 0.5s ease 0s;

      ${sm}{
        height: 216px;
      }
      ${md}{
        height: 320px;
      }

      &:before {
        content: "";
        position: absolute;
        left: 0px;
        top: 0px;
        right: 0px;
        bottom: 0px;
        background: inherit;
        transition: inherit;
      }
    }

    p {
      color: ${theme.brandPrimary};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 0;
    }
  }
`;

const PosterCard = () => {
  const CardRenderComponent = ({ cardData, pageNumRequested }) =>
    cardData
      ? cardData.map((item, index) => {
        return (
          <div className="col-4 col-sm-3" key={index}>
            <div
              className="poster-card"
              onClick={() => {
                alert(`Click API ${pageNumRequested} CARD ${index} INDEX `)
              }}
            >
              <figure
                style={{
                  backgroundImage: `url(${item["poster-image"]})`
                }}
              />
              {item.name ? <p>{item.name}</p> : null}
            </div>
          </div>
        );
      })
      : [];

  return (
    <Fragment>
      <PosterHeader title={PosterListingPage1.title} />

      <div className="container lg-container xs-full-width">
        <PosterCardWrapper className="row">
          <CardRenderComponent
            cardData={PosterListingPage1["content-items"].content}
            pageNumRequested={PosterListingPage1["page-num-requested"]}
          />
          <CardRenderComponent
            cardData={PosterListingPage2["content-items"].content}
            pageNumRequested={PosterListingPage2["page-num-requested"]}
          />
          <CardRenderComponent
            cardData={PosterListingPage3["content-items"].content}
            pageNumRequested={PosterListingPage3["page-num-requested"]}
          />
        </PosterCardWrapper>
      </div>
    </Fragment>
  );
};

export default PosterCard;
