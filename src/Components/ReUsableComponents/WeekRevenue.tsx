import React from 'react';
import {  Card, CardContent, Typography, useTheme } from '@mui/material';
import BarChart from '../charts/BarChart';
import { barChartOptionsConsumption } from './charts';
import { useSelector } from 'react-redux';
import { RootState } from 'Components/store/store';





export default function WeeklyRevenue(props: { [x: string]: any }) {
  const { ...rest } = props;
  const theme = useTheme();
  const { data } = useSelector((state: RootState) => state.table);
  const { Weekly = [] }:any = data || {};
  const textColor = theme.palette.mode === 'light' ? theme.palette.text.primary : 'white';


  return (
    <Card style={{ alignItems: 'center', flexDirection: 'column', width: '100%',height:'300px',borderRadius:'10px' }} {...rest} elevation={0}>
      <CardContent style={{ width: '100%', padding: '15px 15px 10px 15px', display: 'flex', alignItems: 'center', }}>
        <Typography style={{ marginRight: 'auto', color: textColor, fontSize: '24px', fontWeight: 700, lineHeight: '100%' }}>
          Weekly Revenue
        </Typography>
      
      </CardContent>
      <CardContent style={{ height: '185px', marginTop: 'auto', width: '100%' }}>
        <BarChart chartData={Weekly} chartOptions={barChartOptionsConsumption} />
      </CardContent>
    </Card>
  );
}
