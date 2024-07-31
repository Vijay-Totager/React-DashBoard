import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Select, MenuItem, useTheme, Divider, Stack } from '@mui/material';
import PieChart from 'Components/charts/PieChart';
import { pieChartData, pieChartOptions } from './charts';



export default function Conversion(props: { [x: string]: any }) {
  const { ...rest } = props;
  const [chartData, setChartData] = useState([63, 25, 12]);

  // Function to handle changes in the Select component
  const handleSelectChange = (event:any) => {
    const value = event.target.value;
    let newChartData;

    switch (value) {
      case 'daily':
        newChartData = [45, 30, 25]; 
        break;
      case 'monthly':
        newChartData = [63, 25, 12]; 
        break;
      case 'yearly':
        newChartData = [40, 35, 25]; 
        break;
      default:
        newChartData = [63, 25, 12]; 
    }

    setChartData(newChartData);
  };
  // Material UI theme
  const theme = useTheme();
  const textColor = theme.palette.mode === 'light' ? theme.palette.text.primary : 'white';

  return (
<Card sx={{ padding: '10px', display: 'flex', flexDirection: 'column', width: '95%', height: '280px', overflow: 'hidden',borderRadius:'10px' }} {...rest} elevation={0}>
          <CardContent sx={{ paddingBottom: '10px', paddingTop: '0px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" marginBottom="8px">
                  <Typography sx={{ color: textColor, fontSize: '0.875rem', fontWeight: 600, marginTop: '4px' }}>
                      Your Pie Chart
                  </Typography>
                  <Select
                   onChange={handleSelectChange}
                      defaultValue="monthly"
                      variant="outlined"
                      size="small"
                      sx={{ fontSize: '0.75rem', fontWeight: 700 }}
                  >
                      <MenuItem value="daily">Daily</MenuItem>
                      <MenuItem value="monthly">Monthly</MenuItem>
                      <MenuItem value="yearly">Yearly</MenuItem>
                  </Select>
              </Box>

              <Stack display="flex" flexDirection="column" justifyContent="center" alignItems='center' flexGrow={1}>
                  <Box sx={{ height: '350px', width: '100%' }}>
                      <PieChart chartData={chartData} chartOptions={pieChartOptions} />
                      <Typography sx={{ fontSize: '0.75rem', color: 'textSecondary', fontWeight: 700, mb: '5px' }}>
                                  Your files
                              </Typography>
                              <Typography sx={{ fontSize: '1rem', color: textColor, fontWeight: 700 }}>
                              63%
                          </Typography>
                  </Box>

                  <Stack direction="row" justifyContent="center" alignItems='center' mt="8px" spacing={2}>
                      <Box display="flex" flexDirection="column" alignItems="center">
                          <Box display="flex" alignItems="center">
                              <Box height="8px" width="8px" bgcolor="primary.main" borderRadius="50%" mr="4px" />
                         
                              <Typography sx={{ fontSize: '0.75rem', color: 'textSecondary', fontWeight: 700, mb: '5px' }}>
                                  Your files
                              </Typography>
                          </Box>
                          <Typography sx={{ fontSize: '1rem', color: textColor, fontWeight: 700 }}>
                              63%
                          </Typography>
                          <Divider orientation="vertical" flexItem />
                          <Typography sx={{ fontSize: '0.75rem', color: 'textSecondary', fontWeight: 700, mb: '5px' }}>
                                  System
                              </Typography>
                              <Typography sx={{ fontSize: '1rem', color: textColor, fontWeight: 700 }}>
                              25%
                          </Typography>
                      </Box>

                      <Divider orientation="vertical" flexItem />

                     
                  </Stack>
              </Stack>
          </CardContent>
      </Card>
  );
}
