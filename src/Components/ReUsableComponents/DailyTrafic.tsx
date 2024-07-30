import React from 'react';
import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';
import BarChart from 'Components/charts/BarChart';
import {barChartOptionsDailyTraffic } from './charts';
import { useSelector } from 'react-redux';
import { RootState } from 'Components/store/store';

export default function DailyTraffic(props: { [x: string]: any }) {
  const { ...rest } = props;
  const { data } = useSelector((state: RootState) => state.table);
  const {  daily = [] }:any = data || {};
 
  // Material UI theme
  const theme = useTheme();
  const textColor = theme.palette.mode === 'light' ? theme.palette.text.primary : 'white';

  return (
    <Card {...rest} sx={{ display: 'flex', flexDirection: 'column', width: '100%',height:'300px',borderRadius:'10px' }} elevation={0}>
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '10px 5px', width: '100%' }}>
        <Box display="flex" flexDirection="column" alignItems="flex-start" marginRight="20px">
          <Box display="flex" width="100%">
            <Typography marginRight="auto" color="textSecondary" fontSize="small" fontWeight="500">
              Daily Traffic
            </Typography>
          </Box>
          <Box display="flex" alignItems="flex-end">
            <Typography color={textColor} fontSize="34px" fontWeight="700" lineHeight="100%">
              2.579
            </Typography>
            <Typography marginLeft="6px" color="textSecondary" fontSize="small" fontWeight="500">
              Visitors
            </Typography>
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography color={theme.palette.success.main} fontSize="small" fontWeight="700">
            +2.45%
          </Typography>
        </Box>
      </CardContent>
      <Box sx={{ height: '240px', marginTop: 'auto' }}>
        <BarChart chartData={daily} chartOptions={barChartOptionsDailyTraffic} />
      </Box>
    </Card>
  );
}
