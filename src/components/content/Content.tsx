import { PropsWithChildren } from 'react';
import * as S from './Content.styled';

interface IContentProps {
  backgroundImage?: [
    desktop: string | null,
    laptop: string | null,
    mobile: string | null,
  ];
  href: string;
}

const Content = ({
  backgroundImage = [null, null, null],
  href,
  children,
}: PropsWithChildren<IContentProps>) => {
  const [desktopImage, labtopImage, mobileImage] = backgroundImage;

  return (
    <S.ContentWrapper
      desktopImage={desktopImage}
      labtopImage={labtopImage}
      mobileImage={mobileImage}>
      <S.Herf href={href} />
      <S.ChildrenWrapper>{children}</S.ChildrenWrapper>
    </S.ContentWrapper>
  );
};

export default Content;
