import React, { useEffect, useState } from "react";

import { ReactComponent as PrevIcon } from "../../assets/iconPrev.svg";
import { ReactComponent as NextIcon } from "../../assets/iconNext.svg";

import "./Pagination.style.css";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    const [paginationRange, setPaginationRange] = useState<number[]>([]);

    useEffect(() => {
        const range: number[] = [];
        for (let i = 1; i <= totalPages; i++) {
            if (i >= currentPage - 2 && i <= currentPage + 2) range.push(i);
        }
        setPaginationRange(range);
    }, [currentPage, totalPages]);

    const handlePrev = () => {
        const pre = ((currentPage - 2 + totalPages) % totalPages) + 1;
        onPageChange(pre);
    };

    const handleNext = () => {
        const next = (currentPage % totalPages) + 1;
        onPageChange(next);
    };

    return (
        <div className="pagination">
            <button className="prev" onClick={handlePrev}>
                <PrevIcon />
            </button>
            <ul>
                {paginationRange.map((page) => (
                    <li key={page} onClick={() => onPageChange(page)} className={currentPage === page ? "active" : ""}>
                        {page}
                    </li>
                ))}
            </ul>
            <button className="next" onClick={handleNext}>
                <NextIcon />
            </button>
        </div>
    );
};

export default Pagination;
