import styled from '@emotion/styled';
import Link from 'next/link';

export const Navbar = styled.nav`
  background-color: rgba(251, 251, 253, 0.8);
  position: fixed;
  z-index: 9999;
  max-height: 44px;
  max-height: 48px;
  width: 100%;
  font-size: 17px;
  user-select: none; // Disable text selection
  backdrop-filter: saturate(180%) blur(20px);
`;

export const NavContents = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  width: 100%;
  max-width: 1024px;
  padding: 0 22px;
  display: flex;

  @media (max-width: 833px) {
    padding: 0;
  }
`;

export const NavList = styled.div`
  height: 44px;
  display: flex;
  justify-content: space-between;
  user-select: none;
  flex: 1;

  @media (max-width: 833px) {
    height: 48px;
  }
`;

export const NavItem = styled(Link)`
  padding: 0 calc(8px / 1);
  font-size: 12px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
  transition: color 0.32s cubic-bezier(0.4, 0, 0.6, 1);
  &:hover {
    color: #000000;
  }
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const NavIcon = styled(NavItem)`
  @media (max-width: 833px) {
    width: 48px;
    padding: 0;
    justify-content: center;
  }
`;

export const NavLogo = styled(NavItem)`
  @media (max-width: 833px) {
    flex: 1;
    justify-content: start;
    padding: 0;

    > span {
      width: 48px;
      justify-content: center;
    }
  }
`;

export const NavMenu = styled(NavItem)`
  @media (max-width: 833px) {
    display: none;
  }
`;

export const MenuTriggerButton = styled.button`
  display: none;

  @media (max-width: 833px) {
    width: 48px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
