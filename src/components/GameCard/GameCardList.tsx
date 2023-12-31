'use client';

import { useCallback } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';

type ColumnType = {
  key: string;
  label: string;
};

type RowType = {
  key: string;
  player: string;
  priority?: boolean;
};

export const GameCardList = () => {
  const columns: ColumnType[] = [
    {
      key: 'player',
      label: 'PLAYER',
    },

    {
      key: 'priority',
      label: 'PRIORITY',
    },
  ];
  const rows: RowType[] = [
    {
      key: '1',
      player: 'Tony Reichert',
      priority: true,
    },
    {
      key: '2',
      player: 'Zoey Lang',
      priority: true,
    },
    {
      key: '3',
      player: 'Jane Fisher',
      priority: true,
    },
    {
      key: '4',
      player: 'William Howard',
    },
  ];

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
          return cellValue;
      }
    },
    []
  );

  return (
    <div>
      <Table isStriped aria-label='players_table'>
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.key}
              className={column.key === 'priority' ? 'w-[0px]' : ''}
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
    </div>
  );
};
