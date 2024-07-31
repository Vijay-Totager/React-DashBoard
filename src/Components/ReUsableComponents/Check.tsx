import React from 'react'; // Ensure there's at least one import or export
import {
  Box,
  Card,
  CardContent,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import Menu from '@mui/icons-material/Menu';

type RowObj = {
  name: [string, boolean];
  progress: string;
  quantity: number;
  date: string;
  info: boolean;
};

const columnHelper = createColumnHelper<RowObj>();

export default function CheckTable(props: { tableData: any }) {
  const { tableData } = props;
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const theme = useTheme();
  const textColor = theme.palette.mode === 'light' ? theme.palette.text.primary : 'white';
  const borderColor = theme.palette.divider;
  let defaultData = tableData;

  const columns = [
    columnHelper.accessor('name', {
      id: 'name',
      header: () => (
        <Typography justifyContent="space-between" align="center" fontSize="10px" color="gray.400">
          NAME
        </Typography>
      ),
      cell: (info: any) => (
        <Box display="flex" alignItems="center">
          <Checkbox defaultChecked={info.getValue()[1]} color="primary" size="small" style={{ marginRight: '5px' }} />
          <Typography color={textColor} fontSize="10px" fontWeight="700">
            {info.getValue()[0]}
          </Typography>
        </Box>
      ),
    }),
    columnHelper.accessor('progress', {
      id: 'progress',
      header: () => (
        <Typography justifyContent="space-between" align="center" fontSize="10px" color="gray.400">
          PROGRESS
        </Typography>
      ),
      cell: (info: any) => (
        <Typography color={textColor} fontSize="10px" fontWeight="700">
          {info.getValue()}
        </Typography>
      ),
    }),
    columnHelper.accessor('quantity', {
      id: 'quantity',
      header: () => (
        <Typography justifyContent="space-between" align="center" fontSize="10px" color="gray.400">
          QUANTITY
        </Typography>
      ),
      cell: (info: any) => (
        <Typography color={textColor} fontSize="10px" fontWeight="700">
          {info.getValue()}
        </Typography>
      ),
    }),
    columnHelper.accessor('date', {
      id: 'date',
      header: () => (
        <Typography justifyContent="space-between" align="center" fontSize="10px" color="gray.400">
          DATE
        </Typography>
      ),
      cell: (info: any) => (
        <Typography color={textColor} fontSize="10px" fontWeight="700">
          {info.getValue()}
        </Typography>
      ),
    }),
  ];

  const [data, setData] = React.useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  return (
    <Card sx={{ height: '300px', display: 'flex', flexDirection: 'column', width: '100%', padding: '0px',borderRadius:'10px' }} elevation={0}>
      <CardContent sx={{ padding: '8px', marginBottom: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography color={textColor} fontSize="16px" fontWeight="700" lineHeight="100%">
          Check Table
        </Typography>
        <Menu fontSize="small" />
      </CardContent>
      <TableContainer sx={{ flexGrow: 1 }} >
        <Table sx={{ color: 'gray.500',  }}>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup: any) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header: any) => (
                  <TableCell
                    key={header.id}
                    colSpan={header.colSpan}
                    sx={{ padding: '4px', borderColor: borderColor, cursor: 'pointer' }}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <Box display="flex" justifyContent="space-between" alignItems="center" fontSize="10px" color="gray.400">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {{
                        asc: '↑',
                        desc: '↓',
                      }[header.column.getIsSorted() as string] ?? null}
                    </Box>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.slice(0, 5).map((row: any) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell: any) => (
                  <TableCell key={cell.id} sx={{ fontSize: '10', padding: '4px', maxWidth: '60px', maxHeight: '30px', borderColor: 'transparent' }}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
