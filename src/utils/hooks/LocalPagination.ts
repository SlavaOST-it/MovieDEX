import {useState} from "react";
import {PremieresFilmsType} from "../../api/types/PremieresFilmsType";
import {FilmsTypes} from "../../api/types/FilmsTypes";


export const useLocalPagination = (data: PremieresFilmsType | FilmsTypes | undefined) => {
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 8;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = data?.items.slice(startIndex, endIndex);

    const totalItemsCount = data?.total ? (data.total / itemsPerPage) : 0


    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return{
        currentPage,
        handlePageChange,
        totalItemsCount,
        currentItems,
    }
}