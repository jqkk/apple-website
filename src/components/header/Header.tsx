import { ResponsiveNavIcon } from '../nav';
import {
  DesktopAppleLogo,
  DesktopBagIcon,
  DesktopSearchIcon,
  MobileAppleLogo,
  MobileBagIcon,
  MobileSearchIcon,
  HamburgerIcon,
} from '../svgs';
import * as S from './Header.styled';

const Header = () => {
  return (
    <S.Navbar>
      <S.NavContents>
        <S.NavList>
          <S.NavLogo href='/'>
            <ResponsiveNavIcon
              desktopIcon={<DesktopAppleLogo />}
              mobileIcon={<MobileAppleLogo />}
            />
          </S.NavLogo>
          <S.NavMenu href='/'>Store</S.NavMenu>
          <S.NavMenu href='/'>Mac</S.NavMenu>
          <S.NavMenu href='/'>iPad</S.NavMenu>
          <S.NavMenu href='/'>iPhone</S.NavMenu>
          <S.NavMenu href='/'>Watch</S.NavMenu>
          <S.NavMenu href='/'>Vision</S.NavMenu>
          <S.NavMenu href='/'>AirPods</S.NavMenu>
          <S.NavMenu href='/'>TV & Home</S.NavMenu>
          <S.NavMenu href='/'>Entertainment</S.NavMenu>
          <S.NavMenu href='/'>Accessories</S.NavMenu>
          <S.NavMenu href='/'>Support</S.NavMenu>
          <S.NavIcon href='/'>
            <ResponsiveNavIcon
              desktopIcon={<DesktopSearchIcon />}
              mobileIcon={<MobileSearchIcon />}
            />
          </S.NavIcon>
          <S.NavIcon href='/'>
            <ResponsiveNavIcon
              desktopIcon={<DesktopBagIcon />}
              mobileIcon={<MobileBagIcon />}
            />
          </S.NavIcon>
        </S.NavList>
        <S.MenuTriggerButton>
          <HamburgerIcon />
        </S.MenuTriggerButton>
      </S.NavContents>
    </S.Navbar>
  );
};

export default Header;
