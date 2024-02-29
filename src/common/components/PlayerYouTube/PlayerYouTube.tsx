import React, { FC } from 'react';
import YouTube from "react-youtube";


type PlayerYouTubeType = {
    url: string, name: string, site: string
}
export const PlayerYouTube: FC<PlayerYouTubeType> = ({url, site, name}) => {
    // const videoId = urlVideo.substring(urlVideo.lastIndexOf('/') + 1);
    //
    // const opts = {
    //     height: '190',
    //     width: '440',
    //     playerVars: {
    //         autoplay: 0,
    //     },
    // };
    //
    // return (
    //     <YouTube videoId={videoId} opts={opts} />
    // );

    // return (
    //     <iframe
    //
    //             sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
    //             src={`https://youtube.com/embed/${videoId}?autoplay=0`}>
    //     </iframe>
    // )


    let videoElement;

    switch (site) {
        case 'YOUTUBE':
            const youtubeId = url.substring(url.lastIndexOf('/') + 1);
            const embedUrl = `https://www.youtube.com/embed/${youtubeId}`;
            videoElement = <iframe width="560" height="315" src={embedUrl} frameBorder="0" allowFullScreen title={name}></iframe>;
            break;
        case 'KINOPOISK_WIDGET':
            videoElement = <iframe width="560" height="315" src={url} frameBorder="0" allowFullScreen title={name}></iframe>;
            break;
        default:
            videoElement = <video src={url} controls>Your browser does not support the video tag.</video>;
    }

    return (
        <div>
            {videoElement}
            <h3>{name}</h3>
        </div>
    );
};
