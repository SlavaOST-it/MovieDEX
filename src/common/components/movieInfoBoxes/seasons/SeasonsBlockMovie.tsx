import React from "react";
import {useGetSeasonsSerialQuery} from "../../../../api/movieApi";

import {useAppSelector} from "../../../../utils/hooks/hooks";
import {Episode, Paragraph, Season} from "./SeasonsBlockMovie.styled";


export const SeasonsBlockMovie = () => {
    const idMovie = useAppSelector(state => state.movie.id)

    const {data} = useGetSeasonsSerialQuery(idMovie)

    return (
        <div>
            {data?.items.map(item => (
                <Season key={item.number}>
                    <h3>Сезон: {item.number}</h3>
                    {item.episodes.map((episode, index) => (
                        <Episode key={index}>
                            <h5>Эпизод: {episode?.episodeNumber} - {episode.nameRu ? episode.nameRu : ''}</h5>
                            <Paragraph>{episode?.synopsis}</Paragraph>
                        </Episode>
                    ))}
                </Season>
            ))}
        </div>
    )
}
