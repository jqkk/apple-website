import styled from '@emotion/styled';

export const Headline = styled.h2`
  font-size: 56px;
  font-weight: 600;
  line-height: 1.07143;
  letter-spacing: -0.005em;
  max-width: 490px;
  text-align: center;
  position: relative;
  z-index: 2;

  @media (max-width: 1068px) {
    font-size: 48px;
    line-height: 1.08349;
    letter-spacing: -0.002em;
  }

  @media (max-width: 734px) {
    font-size: 32px;
    line-height: 1.125;
    letter-spacing: 0.004em;
  }
`;

export const SubHead = styled.h3`
  margin-top: 3px;
  font-size: 28px;
  line-height: 1.10722;
  letter-spacing: 0.004em;
  font-weight: 400;
  text-align: center;
  position: relative;
  z-index: 2;

  @media (max-width: 1068px) {
    font-size: 24px;
    line-height: 1.16667;
    letter-spacing: 0.009em;
  }

  @media (max-width: 734px) {
    font-size: 19px;
    line-height: 1.21053;
    letter-spacing: 0em;
  }
`;

export const CTALinkContainer = styled.div`
  margin-top: 7px;
  display: flex;
  justify-content: center;
  gap: 35px;
`;

export const CTALink = styled.a`
  color: #06c;
  text-decoration: none;
  font-size: 21px;
  line-height: 1.381;
  letter-spacing: 0.011em;
  font-weight: 400;
  position: relative;
  z-index: 4;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 1068px) {
    font-size: 19px;
    line-height: 1.21053;
    letter-spacing: 0.012em;
  }

  @media (max-width: 734px) {
    font-size: 17px;
    line-height: 1.23536;
    letter-spacing: -0.022em;
  }
`;
