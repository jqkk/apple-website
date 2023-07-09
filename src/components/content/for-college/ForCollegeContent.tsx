import Content from '../Content';
import * as S from './ForCollegeContent.styled';
import * as Common from '../@common.styled';
import { useRef, useState } from 'react';

const ForCollegeContent = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const vidioRef = useRef<HTMLVideoElement>(null);

  const handleVideoPlay = () => {
    const videoElement = vidioRef.current;
    if (!videoElement) return;
    if (isPlaying) {
      setIsPlaying(false);
      videoElement.pause();
      return;
    }
    setIsPlaying(true);
    videoElement.play();
  };

  return (
    <Content
      backgroundImage={[
        null,
        'https://www.apple.com/v/home/bc/images/heroes/back-to-school-2023/hero_bts2023_startframe__f787lg06y3ue_mediumtall.jpg',
        'https://www.apple.com/v/home/bc/images/heroes/back-to-school-2023/hero_bts2023_startframe__f787lg06y3ue_small.jpg',
      ]}
      href='https://www.apple.com/us-edu/shop/back-to-school'>
      <div>
        <Common.Headline>Save on Mac or iPad for&nbsp;college.</Common.Headline>
        <Common.SubHead>Plus get a gift card up to $150.</Common.SubHead>
        <Common.CTALinkContainer>
          <Common.CTALink href='https://www.apple.com/us-edu/shop/back-to-school'>
            {'Shop now >'}
          </Common.CTALink>
        </Common.CTALinkContainer>
      </div>
      <div>
        <S.VideoWrapper>
          <S.Video
            ref={vidioRef}
            src='https://www.apple.com/105/media/us/home/2023/7f9f4504-ae23-4873-b01a-8f803990d57f/anim/bts-hero/largetall.mp4'
            autoPlay
            loop
            muted
            playsInline
          />
        </S.VideoWrapper>
        <S.VideioPlayButtonWrapper>
          <S.VidioPlayButton onClick={handleVideoPlay} isPlaying={isPlaying} />
        </S.VideioPlayButtonWrapper>
      </div>
    </Content>
  );
};

export default ForCollegeContent;
