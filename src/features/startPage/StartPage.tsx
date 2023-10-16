import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {useAppDispatch} from "../../utils/hooks/hooks";
import {setAppStatusAC} from '../../bll/reducers/appReducer/appReducer';

import {PATH} from "../../utils/routes/routes";

import {AppStatus} from "../../common/types/commonTypes";

import {style} from "./index"
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
        <style.WrapperStart>
            <style.Layers>
                <style.LayersContainer $move_x={moveX} $move_y={moveY}>
                    <style.LayerBg $background={layer_bg}></style.LayerBg>
                    <style.LayerGirl $background={layer_girl}></style.LayerGirl>
                    <style.LayerFlower1 $background={layer_flower_1}></style.LayerFlower1>
                    <style.LayerFlower2 $background={layer_flower_2}></style.LayerFlower2>

                    <style.LayerHead>
                        <style.TitlePage>MovieDEX</style.TitlePage>
                        <style.StartButton $from_center onClick={startOnClick}>
                            START
                        </style.StartButton>
                    </style.LayerHead>

                </style.LayersContainer>
            </style.Layers>
        </style.WrapperStart>
    );
};
