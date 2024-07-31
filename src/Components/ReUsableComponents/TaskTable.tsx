import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, Typography, IconButton, Checkbox, useTheme, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import IconBox from './IconBox';
import { AddTask, Menu } from '@mui/icons-material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { useTable } from 'hooks/useTable';

export default function Conversion(props: { [x: string]: any }) {
  const { ...rest } = props;

  // Material UI Theme
  const theme = useTheme();
  const textColor = theme.palette.text.primary;
  const boxBg = theme.palette.background.paper;
  const { getTask } = useTable();
  const [tableData,setTableData]=useState([])
  useEffect(() => {
    const fetchData = async () => {
      const table = await getTask();
      if (table) setTableData(table);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(tableData)

  // State to manage tasks
 

  const handleCheckboxChange = (index: number) => {
    const newTasks = [...tableData];  
    newTasks[index].completed = !newTasks[index].completed;
    setTableData(newTasks);
  };

  return (
    <Card {...rest} sx={{ height: '300px', borderRadius: '10px' }} elevation={0}>
      <CardContent>
        <Box display="flex" alignItems="center" width="100%">
          <IconBox
            width="28px"
            height="38px"
            bgcolor={boxBg}
            icon={<AddTask />}
          />
          <Typography color={textColor} variant="h6" fontWeight="700">
            Tasks
          </Typography>
          <Box ml="auto">
            <Menu />
          </Box>
        </Box>
        <Box px={1} width="100%">
          <List>
            {tableData.map((task, index) => (
              <ListItem key={index} style={{ padding: 0 }}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={task.completed}
                    onChange={() => handleCheckboxChange(index)}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': task.label }}
                    color="primary"
                    size='small'
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography fontWeight="bold" color={textColor} variant="body1" sx={{fontSize:'14px'}}>
                      {task.title.length > 20 ? `${task.title.substring(0, 20)}...` : task.title}
                    </Typography>
                  }
                />
                <IconButton edge="end" sx={{ ml: 1 }}>
                  <DragIndicatorIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </CardContent>
    </Card>
  );
}
