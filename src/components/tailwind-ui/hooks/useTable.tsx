import { useState } from 'react';

import { IPaginationProps } from '../elements/pagination/Pagination';

export interface IUSeTableOptions {
  initialPage?: number;
  itemsPerPage?: number;
  maxVisiblePages?: number;
  pagesPerSide?: number;
  withText?: boolean;
}

export interface IUseTableResult<T> {
  pagination: IPaginationProps;
  data: Array<T>;
}

export function useTable<T>(
  data: Array<T>,
  options: IUSeTableOptions = { itemsPerPage: 10, initialPage: 1 },
): IUseTableResult<T> {
  const { itemsPerPage = 10, initialPage = 1 } = options;

  const [page, setPage] = useState(initialPage);

  const first = (page - 1) * itemsPerPage;
  const last = first + itemsPerPage;

  return {
    data: data.slice(first, last),
    pagination: {
      ...options,
      page,
      itemsPerPage,
      totalCount: data.length,
      onPageChange: (next) => {
        setPage(next);
      },
    },
  };
}
