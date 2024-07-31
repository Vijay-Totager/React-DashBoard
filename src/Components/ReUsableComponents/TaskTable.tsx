import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, IconButton, Checkbox, useTheme, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import IconBox from './IconBox';
import { AddTask, Menu } from '@mui/icons-material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

export default function Conversion(props: { [x: string]: any }) {
  const { ...rest } = props;

  // Material UI Theme
  const theme = useTheme();
  const textColor = theme.palette.text.primary;
  const boxBg = theme.palette.background.paper;


  // State to manage tasks
  const [tasks, setTasks] = useState([
    { label: 'Landing Page Design', checked: false },
    { label: 'Dashboard Builder', checked: true },
    { label: 'Mobile App Design', checked: true },
    { label: 'Illustrations', checked: false },
    { label: 'Promotional LP', checked: true }
  ]);

  const handleCheckboxChange = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].checked = !newTasks[index].checked;
    setTasks(newTasks);
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
            {tasks.map((task, index) => (
              <ListItem key={index} style={{ padding: 0 }}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={task.checked}
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
                      {task.label}
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
