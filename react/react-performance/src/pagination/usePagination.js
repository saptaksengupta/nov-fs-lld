import { useMemo } from "react"
const DOTS = "...";

const usePagination = ({
    currentPage,
    totalCount,
    siblingCount = 1,
    pageSize
}) => {

    const range = (start, end) => {
        let length = end - start + 1;
        return Array.from({length}, (_, id) => id + start);
    }
    
    const paginationRange = useMemo(() => {
        // return the actual state dynamically
        const totalPageCount = Math.ceil(totalCount/ pageSize);

        const totalPageNumbers = siblingCount + 5;

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount); 

        if (totalPageNumbers >= totalPageCount) {
            range(1, totalPageCount);
        }

        const showLeftDots = leftSiblingIndex > 2;
        const showRightDots = rightSiblingIndex < totalPageCount - 2; // 98

        const firstPageIndex = 1; 
        const lastPageIndex = totalPageCount;

        // first page ranges scenario...
        if (!showLeftDots && showRightDots) {
            const leftItemCount = 3 + 2 * siblingCount; 
            const leftRange = range(1, leftItemCount); // 1, 5
            return [...leftRange, DOTS, lastPageIndex];
        }

        // last page ranges scenario...
        if (showLeftDots && !showRightDots) {
            const rightItemCount = 3 + 2 * siblingCount; // 5
            const rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
            return [firstPageIndex, DOTS, ...rightRange]
        }

        // middle page scenario...
        if (showLeftDots && showRightDots) {
            const middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
        }

    }, [totalCount, pageSize, currentPage]);

    return paginationRange;
}

export default usePagination;