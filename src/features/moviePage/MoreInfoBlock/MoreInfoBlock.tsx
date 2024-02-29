import React, {useState} from 'react';

import {ListItem, UnorderedList} from "./MoreInfoBlock.styled";
import {SeasonsBlockMovie} from "../../../common/components/movieInfoBoxes/seasons/SeasonsBlockMovie";
import {FactsBlockMovie} from "../../../common/components/movieInfoBoxes/facts/FactsBlockMovie";
import {AwardsBlockMovie} from "../../../common/components/movieInfoBoxes/awards/AwardsBlockMovie";
import {VideoBlockMovie} from "../../../common/components/movieInfoBoxes/video/VideoBlockMovie";
import {BoxOfficeBlockMovie} from "../../../common/components/movieInfoBoxes/box_office/BoxOfficeBlockMovie";
import {SimilarBlockMovie} from "../../../common/components/movieInfoBoxes/similar/SimilarBlockMovie";
import {ImagesBlockMovie} from "../../../common/components/movieInfoBoxes/imagesMovie/ImagesBlockMovie";
import {NavLink, Route} from "react-router-dom";
import {PATH} from "../../../utils/routes/routes";
import {
    ExternalSourcesBlockMovie
} from "../../../common/components/movieInfoBoxes/external_sources/ExternalSourcesBlockMovie";


export type ActiveBlockType =
    'seasons'
    | 'facts'
    | 'box_office'
    | 'awards'
    | 'videos'
    | 'similars'
    | 'images'
    | 'reviews'
    | 'external_sources'


const linkBlockInfo: Array<{ title: string, value: ActiveBlockType }> = [
    {
        title: 'Трейлеры',
        value: 'videos'
    },
    {
        title: 'Сезоны',
        value: 'seasons'
    },
    {
        title: 'Награды',
        value: 'awards'
    },
    {
        title: 'Факты',
        value: 'facts'
    },
    {
        title: 'Бюджет и сборы',
        value: 'box_office'
    },
    {
        title: 'Кадры из фильма',
        value: 'images'
    },
    {
        title: 'Рецензии',
        value: 'reviews'
    },
    {
        title: 'Похожие фильмы',
        value: 'similars'
    },
    {
        title: 'Где посмотреть',
        value: 'external_sources'
    },

]


export const MoreInfoBlock = () => {
    const [activeBlock, setActiveBlock] = useState<ActiveBlockType>('videos')

    const changeActiveBlock = (value: ActiveBlockType) => {
        setActiveBlock(value)
    }

    return (
        <div>
            <UnorderedList>
                {linkBlockInfo.map(el => (
                    (el.value === 'images')
                        ? (<NavLink key={el.value} to={PATH.imagesMovie}>
                            <ListItem $active_link={el.value === activeBlock}
                                      onClick={() => changeActiveBlock(el.value)}>
                                {el.title}
                            </ListItem>
                        </NavLink>)
                        : (<ListItem
                            key={el.value}
                            $active_link={el.value === activeBlock}
                            onClick={() => changeActiveBlock(el.value)}
                        >
                            {el.title}
                        </ListItem>)

                ))}
            </UnorderedList>

            <div>
                {activeBlock === 'videos' && <VideoBlockMovie/>}
                {activeBlock === 'seasons' && <SeasonsBlockMovie/>}
                {activeBlock === 'awards' && <AwardsBlockMovie/>}
                {activeBlock === 'facts' && <FactsBlockMovie/>}
                {activeBlock === 'box_office' && <BoxOfficeBlockMovie/>}
                {activeBlock === 'similars' && <SimilarBlockMovie/>}
                <NavLink to={PATH.imagesMovie}>
                    {activeBlock === 'images' && <ImagesBlockMovie/>}
                </NavLink>
                {activeBlock === 'external_sources' && <ExternalSourcesBlockMovie/>}
            </div>
        </div>
    );
};
