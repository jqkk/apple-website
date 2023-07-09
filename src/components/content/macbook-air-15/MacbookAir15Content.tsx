import Content from '../Content';
import * as Common from '../@common.styled';

const MacbookAir15Content = () => {
  return (
    <Content
      backgroundImage={[
        'https://www.apple.com/v/home/bc/images/heroes/macbook-air-15/hero_macbook_air_15__x63n8tqcpo2u_largetall.jpg',
        'https://www.apple.com/v/home/bc/images/heroes/macbook-air-15/hero_macbook_air_15__x63n8tqcpo2u_mediumtall.jpg',
        'https://www.apple.com/v/home/bc/images/heroes/macbook-air-15/hero_macbook_air_15__x63n8tqcpo2u_small.jpg',
      ]}
      href='https://www.apple.com/macbook-air-13-and-15-m2/'>
      <div>
        <Common.Headline>MacBook Air 15”</Common.Headline>
        <Common.SubHead>Impressively big. Impossibly thin.</Common.SubHead>
        <Common.CTALinkContainer>
          <Common.CTALink href='https://www.apple.com/macbook-air-13-and-15-m2/'>
            {'Learn more >'}
          </Common.CTALink>
          <Common.CTALink href='https://www.apple.com/shop/buy-mac/macbook-air/15-inch-m2'>
            {'Buy >'}
          </Common.CTALink>
        </Common.CTALinkContainer>
      </div>
    </Content>
  );
};

export default MacbookAir15Content;
