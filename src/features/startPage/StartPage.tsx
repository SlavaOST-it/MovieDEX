import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from "../../utils/hooks/hooks";
import {appSelectors} from "../../app";
import {setAppStatusAC} from '../../bll/reducers/appReducer/appReducer';
import {AppStatus} from "../../common/types/commonTypes";
import {Navigate, useNavigate} from "react-router-dom";
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

    const appStatus = useAppSelector(appSelectors.appStatus)


    const startOnClick = () => {
        dispatch(setAppStatusAC({status: AppStatus.IDLE}))
        navigate(PATH.premieres)
    }

    return (
        <WrapperStart>
            <Layers>
                <LayersContainer moveX={moveX} moveY={moveY}>


                    <LayerBg background={layer_bg}> </LayerBg>
                    <LayerGirl background={layer_girl}> </LayerGirl>
                    <LayerFlower1 background={layer_flower_1}> </LayerFlower1>
                    <LayerFlower2 background={layer_flower_2}> </LayerFlower2>

                    <LayerHead>
                        <TitlePage>MovieDEX</TitlePage>
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
    background?: string,
    moveX?: number,
    moveY?: number
}
export const Layer = styled.div<LayerType>`
  position: absolute;
  background-image: url(${props => props.background});
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
  color: white;
  border: none;
  background-color: rgba(255, 0, 0, 0);
  
  cursor: pointer;
`

export const SubtitlePage = styled.h3`

`

export const TitlePage = styled.h1`
  display: inline-block;
  color: white;
  
  font-size: 58px;
  
`

export const LayerHead = styled(Layer)`
  display: flex;
  flex-direction: column;
  
  transform: translateZ(160px);
  //z-index: 100;
`

export const LayersContainer = styled.div<{moveX: number, moveY: number}>`
  min-height: 90vh;
  transform-style: preserve-3d;

  transform: rotateX(${props => props.moveY}deg) rotateY(${props => props.moveX}deg);
  will-change: transform;
`
export const Layers = styled.section`
  perspective: 1000px;
  overflow: hidden;
`



export const WrapperStart = styled.div`
  position: relative;
`
