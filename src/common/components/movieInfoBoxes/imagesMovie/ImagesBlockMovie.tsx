import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

import {Wrapper} from "../../../styles/СommonStyles.styled";
import {BackButton} from "../../backButton/BackButton.styled";
import {ImageMovie, ImagesBlockWrapper} from './ImagesBlockMovie.styled';
import {ListItem, UnorderedList} from "../../../../features/moviePage/MoreInfoBlock/MoreInfoBlock.styled";

import {Pagination} from "../../pagination/Pagination";
import {linksImagesBlock} from "./dataLinksImagesMovie";
import {LinksImagesMovieType} from "../../../../api/types/MovieType";

import {useGetImagesQuery} from "../../../../api/movieApi";
import {useAppSelector} from "../../../../utils/hooks/hooks";


export const ImagesBlockMovie = () => {
    const idMovie = useAppSelector(state => state.movie.id)

    const [activeLink, setActiveLink] = useState<LinksImagesMovieType>('STILL')

    const [currentPage, setCurrentPage] = useState(1)

    const {data} = useGetImagesQuery({id: idMovie, type: activeLink, page: currentPage})

    const totalPageCount = data?.totalPages ? data.totalPages : 0

    const navigate = useNavigate()

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const changeActiveLink = (value: LinksImagesMovieType) => {
        setActiveLink(value)
        setCurrentPage(1);
    }

    return (
        <ImagesBlockWrapper>
            <BackButton
                onClick={() => {
                    navigate(-1)
                }}>
                {`< На страницу фильма`}
            </BackButton>

            <Wrapper>
                <UnorderedList>
                    {linksImagesBlock.map(el => (
                        <ListItem
                            key={el.value}
                            $active_link={el.value === activeLink}
                            onClick={() => changeActiveLink(el.value)}
                        >
                            <div>
                                {el.title}
                            </div>

                        </ListItem>
                    ))}
                </UnorderedList>

                <div>
                    {data?.total === 0 &&
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            Нет изображений
                        </div>}
                    {data?.items.map((image, index) => (
                        <ImageMovie key={index} src={image.previewUrl} alt={activeLink}/>
                    ))}
                </div>

                {(data?.totalPages !== undefined && data.totalPages > 1) && (
                    <Pagination
                        currentPage={currentPage}
                        onPageChanges={handlePageChange}
                        totalItemsCount={totalPageCount}
                    />
                )}
            </Wrapper>
        </ImagesBlockWrapper>
    );
};
