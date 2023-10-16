import styled, {css} from "styled-components";

type LayerType = {
    $background?: string,
    $move_x?: number,
    $move_y?: number
}
export const Layer = styled.div<LayerType>`
  position: absolute;
  background-image: url(${props => props.$background});
  inset: -3.6vw;
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;

`

export const LayerBg = styled(Layer)`
  transform: translateZ(-60px);
  scale: 1.6;
`
export const LayerGirl = styled(Layer)`
  transform: translateZ(0) translateX(-20px) translateY(-40px);
`

export const LayerFlower1 = styled(Layer)`
  transform: translateZ(100px);
`

export const LayerFlower2 = styled(Layer)`
  transform: translateZ(60px);
`

export const StartButton = styled.button<{$from_center: boolean}>`
  position: relative;
  padding: 16px 46px;
  font-size: 18px;
  color: #fff;
  letter-spacing: 0.6rem;
  text-transform: uppercase;
  transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
  background-color: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;
  user-select: none;

  &:before,
  &:after {
    content: '';
    position: absolute;
    transition: inherit;
    z-index: -1;
  }

  &:hover {
    color: #1e191a;
    transition-delay: 0.5s;
  }

  &:hover:before {
    transition-delay: 0s;
  }

  &:hover:after {
    background: #fff;
    transition-delay: 0.35s;
  }

  ${(props) =>
    props.$from_center &&
    css`
            &:before {
              top: 0;
              left: 50%;
              height: 100%;
              width: 0;
              border: 1px solid #fff;
              border-left: 0;
              border-right: 0;
            }

            &:after {
              bottom: 0;
              left: 0;
              height: 0;
              width: 100%;
              background: #fff;
            }

            &:hover:before {
              left: 0;
              width: 100%;
            }

            &:hover:after {
              top: 0;
              height: 100%;
            }
          `}
`;

export const SubtitlePage = styled.h3`
  font-size: 24px;
  max-width: 800px;
  text-align: center;
  padding-bottom: 50px;
`

export const TitlePage = styled.h1`
  display: inline-block;
  color: rgba(255, 255, 255, 0.93);
  font-size: 62px;
  letter-spacing: 1vw;
  
  text-shadow: 8px 8px 6px rgba(0, 0, 0, 0.5);
`

export const LayerHead = styled(Layer)`
  display: flex;
  flex-direction: column;
  
  align-items: center;
  justify-content: end;
  margin-bottom: 300px;

  transform: translateZ(160px);
`

export const LayersContainer = styled.div<LayerType>`
  min-height: 100vh;
  transform-style: preserve-3d;

  transform: rotateX(${props => props.$move_y}deg) rotateY(${props => props.$move_x}deg);
  will-change: transform;
  transition: 1s cubic-bezier(.05, .5, 0, 1);
`
export const Layers = styled.section`
  perspective: 1000px;
  overflow: hidden;
`


export const WrapperStart = styled.div`
  position: relative;
`
