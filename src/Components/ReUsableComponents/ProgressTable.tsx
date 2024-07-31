import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Icon,
  LinearProgress,
  useTheme,
  Paper
} from '@mui/material';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable
} from '@tanstack/react-table';
import Menu from '@mui/icons-material/Menu';
import { DoDisturbAltOutlined } from '@mui/icons-material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
// Custom components
import CancelIcon from '@mui/icons-material/Cancel';
import tableDataCheck from "Components/ReUsableComponents/tableDataCheck";

const columnHelper = createColumnHelper<any>();

export default function ComplexTable(props: { tableData: any }) {
  const { tableData } = props;
  console.log(tableData)
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const theme = useTheme();
  const textColor = theme.palette.text.primary;
  const borderColor = theme.palette.divider;
  let defaultData = tableData;
  const columns = [
    columnHelper.accessor('name', {
      id: 'name',
      header: () => (
        <Typography
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="textSecondary"
          sx={{marginLeft:'10px'}}
        >
          NAME
        </Typography>
      ),
      cell: (info: any) => (
        <Box display="flex" alignItems="center" padding="8px">
          <Typography color={textColor} fontSize="small" fontWeight="700">
            {info.getValue()}
          </Typography>
        </Box>
      )
    }),
    columnHelper.accessor('status', {
      id: 'status',
      header: () => (
        <Typography
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="textSecondary"
          sx={{marginLeft:'10px'}}
        >
          STATUS
        </Typography>
      ),
      cell: (info) => (
        <Box display="flex" alignItems="center" padding="8px">
          <Icon
            style={{ width: '24px', height: '24px', marginRight: '5px' }}
            color={
              info.getValue() === 'Approved' ? 'success' :
              info.getValue() === 'Disable' ? 'error' :
              info.getValue() === 'Error' ? 'warning' : 'inherit'
            }
          >
            {info.getValue() === 'Approved' ? (
              <CheckCircleIcon />
            ) : info.getValue() === 'Disable' ? (
                <CancelIcon />
            ) : info.getValue() === 'Error' ? (
                <ErrorIcon/>
            ) : null}
          </Icon>
          <Typography color={textColor} fontSize="small" fontWeight="700">
            {info.getValue()}
          </Typography>
        </Box>
      )
    }),
    columnHelper.accessor('date', {
      id: 'date',
      header: () => (
        <Typography
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="textSecondary"
          sx={{marginLeft:'10px'}}
        >
          DATE
        </Typography>
      ),
      cell: (info) => (
        <Typography color={textColor} fontSize="small" fontWeight="700">
          {info.getValue()}
        </Typography>
      )
    }),
    columnHelper.accessor('progress', {
      id: 'progress',
      header: () => (
        <Typography
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="textSecondary"
          sx={{marginLeft:'10px'}}

        >
          PROGRESS
        </Typography>
      ),
      cell: (info) => (
        <Box display="flex" alignItems="center" padding="8px">
          <LinearProgress
            variant="determinate"
            color="primary"
            style={{ height: '8px', width: '100px',borderRadius:'10px' }}
            value={info.getValue()}
          />
        </Box>
      )
    })
  ];

  const [data, setData] = React.useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true
  });

  return (
    <Card style={{ width: '100%', overflowX: 'auto',height:'300px',borderRadius:'10px' }} elevation={0}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="start"  marginBottom="8px">
          <Typography color={textColor} fontSize="22px" fontWeight="700">
            Complex Table
          </Typography>
          <Menu />
        </Box>
        <TableContainer component={Paper} elevation={0}>
          <Table>
            <TableHead >
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} >
                  {headerGroup.headers.map((header) => (
                    <TableCell
                      key={header.id}
                      colSpan={header.colSpan}
                      padding="none"
                      style={{ borderColor, cursor: 'pointer', textAlign: 'center' }}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      <Box display="flex" justifyContent="space-between" alignItems="center">
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {{
                          asc: '🔼',
                          desc: '🔽',
                        }[header.column.getIsSorted() as string] ?? null}
                      </Box>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>
            <TableBody >
              {table.getRowModel().rows.slice(0, 5).map((row) => (
                <TableRow key={row.id} sx={{padding:'0px'}}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      style={{
                        fontSize: '16px',
                        minWidth: '100px',
                        borderColor: 'transparent',
                        textAlign: 'start',
                        padding:'0px',
                      }}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
