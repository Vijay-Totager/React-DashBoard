import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

type ChartProps = {
  chartData: any[];
  chartOptions: any;
};

const ColumnChart: React.FC<ChartProps> = ({ chartData, chartOptions }) => {
  const [data, setData] = useState<any[]>([]);
  const [options, setOptions] = useState<any>({});

  useEffect(() => {
    setData(chartData);
    setOptions(chartOptions);
  }, [chartData, chartOptions]);

  return (
    <Chart
      options={options}
      series={data}
      type='bar'
      width='100%'
      height='100%'
    />
  );
};

export default ColumnChart;
