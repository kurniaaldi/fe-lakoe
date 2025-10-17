type SortingType = "asc" | "desc" | "";

interface PaginationInfo<D> {
  totalPages?: number;
  totalElements?: number;
  last?: boolean;
  size?: number;
  number?: number;
  sort?: {
    empty?: boolean;
    sorted?: boolean;
    unsorted?: boolean;
  };
  pageable?: {
    pageNumber: number;
    pageSize: number;
    sort?: {
      empty?: boolean;
      sorted?: boolean;
      unsorted?: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  content?: D[];
  numberOfElements?: number;
  totalElements?: number;
  first?: boolean;
  empty?: boolean;
}

interface APIResponse<D> {
  data: D;
  message?: string;
  error?: boolean;
  status?: number | string;
  links?: Links;
  meta?: MetaInteface;
}

interface APIResponsePagination<D> {
  data: PaginationInfo<D>;
  message?: string;
  error?: boolean;
  status?: number | string;
  links?: Links;
  meta?: MetaInteface;
}

type APIError = AxiosError<APIResponse<never>>;

interface MetaResponseInterface {
  current_page?: number;
  from?: number;
  path?: string;
  per_page?: number;
  to?: number;
  total?: number;
  last_page?: number;
}

interface BaseSortInterface<SortByType> {
  sort: SortByType;
  sortBy?: string;
  page: number;
}

interface BaseDefaultFilterInterface {
  defaultPage: number;
  defaultPerPage: number;
  defaultSort: SortingType;
  defaultSortBy: string;
}

interface ResponseOptionInterface extends BaseResponseInterface {
  data: Array<OptionInterface>;
}
