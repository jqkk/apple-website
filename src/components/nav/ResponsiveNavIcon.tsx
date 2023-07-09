import * as S from './ResponsiveNavIcon.styled';

interface IResponsiveNavIconProps {
  desktopIcon: JSX.Element;
  mobileIcon: JSX.Element;
}

const ResponsiveNavIcon = ({
  desktopIcon,
  mobileIcon,
}: IResponsiveNavIconProps) => {
  return (
    <>
      <S.DesktopNavIcon>{desktopIcon}</S.DesktopNavIcon>
      <S.MobileNavIcon>{mobileIcon}</S.MobileNavIcon>
    </>
  );
};

export default ResponsiveNavIcon;
