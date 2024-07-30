import React from 'react';
import { Box, Button, Card, CardContent, Typography,  useTheme } from '@mui/material';
import LineChart from '../charts/LineChart';
import {  lineChartOptionsTotalSpent } from './charts';
import { useSelector } from 'react-redux';
import { RootState } from 'Components/store/store';

export default function TotalSpent(props: { [x: string]: any }) {
  const { ...rest } = props;
  const theme = useTheme();
  const { data} = useSelector((state: RootState) => state.table);
  const {  totalspent = [] }:any = data || {};
  const textColor = theme.palette.mode === 'light' ? theme.palette.text.primary : 'white';
  const textColorSecondary = theme.palette.mode === 'light' ? theme.palette.text.secondary : 'white';
  const boxBg = theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.grey[800];


  return (
    <Card style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '98%', padding: '5px',height:'292px',borderRadius:'10px' }} {...rest} elevation={0}>
      <CardContent style={{ width: '100%', padding: '5px 5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button style={{ backgroundColor: boxBg, fontSize: '10px', fontWeight: 500, color: textColorSecondary, borderRadius: '7px', padding: '2px 5px' }}>
          This month
        </Button>
      
      </CardContent>
      <CardContent style={{ width: '100%', display: 'flex', flexDirection: 'column', padding: '5px' }}>
        <Box style={{ display: 'flex', flexDirection: 'column', marginRight: '10px', marginTop: '10px' }}>
          <Typography style={{ color: textColor, fontSize: '24px', textAlign: 'start', fontWeight: 700, lineHeight: '100%' }}>
            $37.5K
          </Typography>
          <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <Typography style={{ color: theme.palette.grey[600], fontSize: '10px', fontWeight: 500, marginTop: '2px', marginRight: '8px' }}>
              Total Spent
            </Typography>
            <Box style={{ display: 'flex', alignItems: 'center' }}>
              {/* <RiArrowUpSFill style={{ color: theme.palette.success.main, marginRight: '2px', marginTop: '2px' }} /> */}
              <Typography style={{ color: theme.palette.success.main, fontSize: '10px', fontWeight: 700 }}>
                +2.45%
              </Typography>
            </Box>
          </Box>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            {/* <IoCheckmarkCircle style={{ color: theme.palette.success.main, marginRight: '4px' }} /> */}
            <Typography style={{ color: theme.palette.success.main, fontSize: '10px', fontWeight: 700 }}>
              On track
            </Typography>
          </Box>
        </Box>
        <Box style={{ minHeight: '150px', minWidth: '60%', marginTop: 'auto' }}>
          <LineChart chartData={totalspent} chartOptions={lineChartOptionsTotalSpent} />
        </Box>
      </CardContent>
    </Card>
  );
}
