import React from 'react';
import {useAppSelector} from "../../../../utils/hooks/hooks";
import {useGetVideosQuery} from "../../../../api/movieApi";
import {PlayerYouTube} from "../../PlayerYouTube/PlayerYouTube";


export const VideoBlockMovie = () => {
    const idMovie = useAppSelector(state => state.movie.id)

    const {data} = useGetVideosQuery(idMovie)
    return (
        <div>
            {data?.items.map((trailer, index) => (
                <div key={index}>
                    <h2>{trailer.name}</h2>
                    {/*<PlayerYouTube key={index} url={trailer.url} site={trailer.site} name={trailer.name}/>*/}
                </div>

            ))}
        </div>
    );
};
