import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from "../../utils/hooks/hooks";
import {appSelectors} from "../../app";
import {setAppStatusAC} from '../../bll/reducers/appReducer/appReducer';
import {AppStatus} from "../../common/types/commonTypes";
import {useNavigate} from "react-router-dom";
import {PATH} from "../../utils/routes/routes";
import styled from "styled-components";

import layer_bg from "../../assets/image/bg/layer_bg.png"
import layer_girl from "../../assets/image/bg/layer_girl.png"
import layer_flower_1 from "../../assets/image/bg/layer_flower_1.png"
import layer_flower_2 from "../../assets/image/bg/layer_flower_2.png"

type StartPageType = {
    moveX: number
    moveY: number
}
export const StartPage: FC<StartPageType> = ({moveX, moveY}) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const startOnClick = () => {
        dispatch(setAppStatusAC({status: AppStatus.IDLE}))
        navigate(PATH.premieres)
    }

    return (
        <WrapperStart>
            <Layers>
                <LayersContainer $move_x={moveX} $move_y={moveY}>
                    <LayerBg $background={layer_bg}> </LayerBg>
                    <LayerGirl $background={layer_girl}> </LayerGirl>
                    <LayerFlower1 $background={layer_flower_1}> </LayerFlower1>
                    <LayerFlower2 $background={layer_flower_2}> </LayerFlower2>

                    <LayerHead>
                        <TitlePage>MovieDEX</TitlePage>
                        {/*<SubtitlePage>*/}
                        {/*    "Кино - это искусство оживлять мечты, вдохновлять*/}
                        {/*    сердца и путешествовать во времени на крыльях воображения."*/}
                        {/*</SubtitlePage>*/}
                        <StartButton onClick={startOnClick}>
                            Start
                        </StartButton>
                    </LayerHead>

                </LayersContainer>
            </Layers>
        </WrapperStart>
    );
};

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

export const StartButton = styled.button`
  font-family: Arial, sans-serif;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.2vw;
  color: #ffffff;
  border: 1px solid rgb(255, 255, 255);
  //border-radius: 10em;
  background-color: transparent;
  padding: 10px 30px;

  cursor: pointer;
`

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
