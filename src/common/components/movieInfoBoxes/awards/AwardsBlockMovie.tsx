import React from 'react';

import {AwardItem} from "./AwardItem";

import {useGetAwardsQuery} from "../../../../api/movieApi";
import {useAppSelector} from "../../../../utils/hooks/hooks";


export const AwardsBlockMovie = () => {
    const idMovie = useAppSelector(state => state.movie.id)

    const {data} = useGetAwardsQuery(idMovie)
    return (
        <div>
            {data?.items.map((item, index) => (
                <AwardItem key={index} item={item} />
            ))}

        </div>
    );
};
