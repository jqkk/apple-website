import styled from '@emotion/styled';

export const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;

  @media (max-width: 1078px) {
    display: none;
  }
`;

export const Video = styled.video`
  width: 3008px;
  height: 736px;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
`;

export const VideioPlayButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  @media (max-width: 1078px) {
    display: none;
  }
`;

export const VidioPlayButton = styled.button<{ isPlaying: boolean }>`
  position: relative;
  margin-right: 16px;
  margin-bottom: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  z-index: 10;
  cursor: pointer;

  &::before {
    content: '';
    border-radius: 50%;
    width: 36px;
    height: 36px;
    background-color: rgba(66, 66, 69, 0.72);
  }
  &::after {
    content: '';
    mask: ${({ isPlaying }) =>
      isPlaying ? 'url(/assets/pause-icon.svg)' : 'url(/assets/stop-icon.svg)'};
    width: 20px;
    height: 20px;
    position: absolute;
    background-size: 20px 20px;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;
