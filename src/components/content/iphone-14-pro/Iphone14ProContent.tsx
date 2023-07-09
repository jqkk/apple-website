import Content from '../Content';
import * as Common from '../@common.styled';
import * as S from './Iphone14ProContent.styled';

const Iphone14ProContent = () => {
  return (
    <Content
      backgroundImage={[
        'https://www.apple.com/v/home/bc/images/heroes/iphone-14-pro/hero_iphone14pro_spring__9xo85pm6sbmm_largetall.jpg',
        'https://www.apple.com/v/home/bc/images/heroes/iphone-14-pro/hero_iphone14pro_spring__9xo85pm6sbmm_mediumtall.jpg',
        'https://www.apple.com/v/home/bc/images/heroes/iphone-14-pro/hero_iphone14pro_spring__9xo85pm6sbmm_small.jpg',
      ]}
      href='https://www.apple.com/iphone-14-pro/'>
      <div>
        <S.StyledHeadline>iPhone 14 Pro</S.StyledHeadline>
        <S.StyledSubHead>Pro. Beyond.</S.StyledSubHead>
        <Common.CTALinkContainer>
          <Common.CTALink href='https://www.apple.com/iphone-14-pro/'>
            {'Learn more >'}
          </Common.CTALink>
          <Common.CTALink href='https://www.apple.com/us-edu/shop/buy-iphone/iphone-14-pro'>
            {'Buy >'}
          </Common.CTALink>
        </Common.CTALinkContainer>
      </div>
    </Content>
  );
};

export default Iphone14ProContent;
