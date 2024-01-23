import React, {useState} from 'react';
import {useGetTopFilmsQuery} from '../../api/filmsApi';
import {Loader} from "../../common/components/loader/Loader";
import {Pagination} from "../../common/components/pagination/Pagination";
import {TitlePage} from "../../common/styles/TitlePage.styled";
import {CardMovie} from "../../common/components/cardMovie/CardMovie";


export const TopFilmsPage = () => {
    const [currentPage, setCurrentPage] = useState(1)

    const {data, isLoading} = useGetTopFilmsQuery(currentPage)

    const totalPageCount = data?.totalPages ? data.totalPages : 0

    console.log(data?.total)
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    if(isLoading){
        return <Loader/>
    }

    return (
        <div>
            <TitlePage>Топ <span> фильмов </span></TitlePage>
            <div>
                {data?.items.map((el, index) => (
                    <CardMovie key={index}
                               item={el}
                    />
                ))}
            </div>

            <Pagination
                totalItemsCount={totalPageCount}
                onPageChanges={handlePageChange}
                currentPage={currentPage}
            />
        </div>
    );
};
