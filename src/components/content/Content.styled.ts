import styled from '@emotion/styled';

export const ContentWrapper = styled.div<{
  desktopImage: string | null;
  labtopImage: string | null;
  mobileImage: string | null;
}>`
  height: 692px;
  position: relative;
  background-color: rgb(251, 251, 253);
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({ desktopImage }) =>
    desktopImage ? `url(${desktopImage})` : 'none'};

  @media (max-width: 1078px) {
    background-image: ${({ labtopImage }) =>
      labtopImage ? `url(${labtopImage})` : 'none'};
  }

  @media (max-width: 734px) {
    height: 500px;
    background-image: ${({ mobileImage }) =>
      mobileImage ? `url(${mobileImage})` : 'none'};
  }
`;

export const Herf = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
`;

export const ChildrenWrapper = styled.div`
  padding-top: 55px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
