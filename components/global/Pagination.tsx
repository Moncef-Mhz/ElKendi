"use client";
import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const PaginationSection = ({
  maxPage,
  skipNum,
}: {
  maxPage: number;
  skipNum: number;
}) => {
  const [pageNum, setPageNum] = useState<number>(0);
  const searchParams = useSearchParams();
  const path = usePathname();
  const { replace } = useRouter();

  // nextPage
  const nextPage = () => {
    if (pageNum + skipNum > maxPage) return;
    setPageNum((prev) => prev + skipNum);
    const params = new URLSearchParams(searchParams);
    params.set("page", (pageNum + skipNum).toString());
    replace(`${path}?${params}`);
  };

  // prevPage
  const prevPage = () => {
    if (pageNum < 1) return;
    setPageNum((prev) => prev - skipNum);
    const params = new URLSearchParams(searchParams);
    params.set("page", (pageNum - skipNum).toString());
    replace(`${path}?${params}`);
  };

  return (
    <Pagination>
      <PaginationContent className="flex flex-row gap-5">
        <PaginationItem>
          <PaginationPrevious
            aria-disabled={pageNum === 0}
            onClick={() => prevPage()}
            
            className="cursor-pointer disabled:cursor-not-allowed"
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            onClick={() => nextPage()}
            className="cursor-pointer disabled:cursor-not-allowed"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationSection;
