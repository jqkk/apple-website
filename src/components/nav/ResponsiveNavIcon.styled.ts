import styled from '@emotion/styled';

export const DesktopNavIcon = styled.span`
  display: flex;
  @media (max-width: 833px) {
    display: none;
  }
`;

export const MobileNavIcon = styled.span`
  display: none;
  @media (max-width: 833px) {
    display: flex;
  }
`;
