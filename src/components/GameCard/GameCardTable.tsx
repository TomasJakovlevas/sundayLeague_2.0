import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import { useCallback } from 'react';

type ColumnType = {
  key: string;
  label: string;
  uiFit?: boolean;
};

type RowType = {
  key: string;
  player: string;
  priority?: boolean;
  timeStamp?: string;
};

type GameCardTableProps = {
  title: string;
  columns: ColumnType[];
  rows: RowType[];
};

export const GameCardTable = ({ title, columns, rows }: GameCardTableProps) => {
  const renderCell = useCallback(
    (user: RowType, columnKey: string | number) => {
      const cellValue = user[columnKey as keyof RowType];

      switch (columnKey) {
        case 'priority':
          return cellValue ? (
            <div className='flex items-center justify-center'>
              <div className='w-[20px] h-[20px] border border-[red]'>
                {
                  // TODO: Type icon
                }
              </div>
            </div>
          ) : null;

        default:
          return <span className='whitespace-nowrap'>{cellValue}</span>;
      }
    },
    []
  );

  return (
    <>
      <h3 className='mb-1'>{title}</h3>
      <Table isStriped removeWrapper>
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.key}
              className={column.uiFit ? 'w-[0px]' : ''}
            >
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};
