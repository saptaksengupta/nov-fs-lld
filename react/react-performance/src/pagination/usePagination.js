import { useMemo } from "react"

const usePagination = ({
    currentPage,
    totalCount,
    siblingCount = 1,
    pageSize
}) => {
    
    const paginationRange = useMemo(() => {
        // return the actual state dynamically
        
        return [1, "...", 4, 5, 6, "...", 100];
    }, [totalCount, pageSize, currentPage]);

    return paginationRange;
}

export default usePagination;