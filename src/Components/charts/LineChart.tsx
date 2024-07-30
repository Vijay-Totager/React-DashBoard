import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

type ChartProps = {
  chartData: any[];
  chartOptions: any;
};

const LineChart: React.FC<ChartProps> = ({ chartData, chartOptions }) => {
  const [data, setData] = useState<any[]>([]);
  const [options, setOptions] = useState<any>({});

  // Update state when props change
  useEffect(() => {
    setData(chartData);
    setOptions(chartOptions);
  }, [chartData, chartOptions]);

  return (
    <ReactApexChart
      options={options}
      series={data}
      type='area'
      width='100%'
      height='100%'
    />
  );
};

export default LineChart;
