import React from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import {
  Styles, TableRowWrapper, HeaderWrapper, ButtonPagination, Pagination,
} from './styles';

import {
  MdNavigateNext,
  MdNavigateBefore,
  MdArrowUpward,
  MdArrowDownward,
} from 'react-icons/md';

export function TableComponent({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    setPageSize,
    rows,
    state: { pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination,
  );

  const getIcon = (isSorted, isSortedDesc) => {
    if (isSorted) {
      if (isSortedDesc) {
        return <MdArrowUpward />;
      }
      return <MdArrowDownward />;
    }
    return <MdArrowDownward />;
  };

  const generatePaginationArray = (total) => {
    const genesisIndex = Math.ceil(total / 10);
    const auxNum = 10;
    const pageSizeArr = [];
    for (let i = 1; i <= genesisIndex; i += 1) {
      pageSizeArr.push(i * auxNum);
    }
    return pageSizeArr;
  };
  return (
    <Styles>
      <table {...getTableProps()} style={{ width: '100%', overflowX: 'auto' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column, index) => (
                <th
                  className={column.itemType && `header${index}`}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{ width: column.width }}
                >
                  <HeaderWrapper align={column.align}>
                    {column.render('Header')}
                    {column.Header ? (
                      column.isSort === true && (
                        <div style={{ marginLeft: '10px' }}>
                          {getIcon(column.isSorted, column.isSortedDesc)}
                        </div>
                      )
                    ) : null}
                  </HeaderWrapper>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <TableRowWrapper {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td
                    {...cell.getCellProps()}
                    style={{ paddingRight: '20.68px' }}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </TableRowWrapper>
            );
          })}
        </tbody>
      </table>

      <Pagination>
        {rows.length > 10
          && (
            <>
              <span>por página:</span>
              <select
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {generatePaginationArray(rows.length).map(pageSize => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>
              <p>
                {`${pageSize > rows.length ? rows.length : pageSize} de ${rows.length}`}
              </p>

              <ButtonPagination type="button" onClick={() => previousPage()} disabled={!canPreviousPage}>
                <MdNavigateBefore size={20} />
              </ButtonPagination>

              <ButtonPagination type="button" onClick={() => nextPage()} disabled={!canNextPage}>
                <MdNavigateNext size={20} />
              </ButtonPagination>
            </>
          )}
      </Pagination>
    </Styles>
  );
}
