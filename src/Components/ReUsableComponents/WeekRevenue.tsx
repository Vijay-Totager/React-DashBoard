import React from 'react';
import { Card, CardContent, Typography, useTheme } from '@mui/material';
import BarChart from '../charts/BarChart';
import { barChartDataConsumption, barChartOptionsConsumption } from './charts';
import { useSelector } from 'react-redux';
import { RootState } from 'Components/store/store';

export default function WeeklyRevenue(props: { [x: string]: any }) {
  const { ...rest } = props;
  const theme = useTheme();
  const { data } = useSelector((state: RootState) => state.table);
  const { Weekly = [] }: any = data || {};
  const textColor = theme.palette.mode === 'light' ? theme.palette.text.primary : 'white';

  return (
    <Card
      style={{
        width: '100%',
        height: '300px', // Increase the height of the Card
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
      {...rest}
      elevation={0}
    >
      <CardContent
        style={{
          flex: '0 1 auto',
          padding: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          style={{
            color: textColor,
            fontSize: '24px',
            fontWeight: 700,
            lineHeight: '100%',
          }}
        >
          Weekly Revenue
        </Typography>
      </CardContent>
      <CardContent
        style={{
          flex: '1 1 auto',
          padding: '0 20px 20px', // Adjust padding to fit the larger BarChart
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <div style={{ width: '90%', height: '80%' }}> 
          <BarChart chartData={barChartDataConsumption} chartOptions={barChartOptionsConsumption} />
        </div>
      </CardContent>
    </Card>
  );
}
