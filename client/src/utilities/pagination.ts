export interface Pagination<TEntity>{
    pageNumber: number,
    pageSize: number,
    totalPages: number,
    totalRecords: number,
    items: TEntity[]
}