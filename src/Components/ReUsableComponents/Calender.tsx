import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'Assets/css/Calender.css'
import { Typography, IconButton, Card } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
type CalendarValue = Date | [Date, Date] | null;

export default function MiniCalendar(props: {
  selectRange: boolean;
  [x: string]: any;
}) {
  const { selectRange, ...rest } = props;
  const [value, setValue] = useState<CalendarValue>(new Date());
  const handleChange = (
    value: CalendarValue,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setValue(value);

  };
  return (
    <Card elevation={0}
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        
         padding: '6px',
        height: '288px',borderRadius:'10px',
        ...rest
      }}
    >
      <Calendar
        onChange={handleChange}
        value={value}
        selectRange={selectRange}
        view={'month'}
        
        tileContent={<Typography color="primary" />}
        prevLabel={
          <IconButton>
            < ChevronLeftIcon  />
          </IconButton>
        }
        nextLabel={
          <IconButton>
              < ChevronRight  />
          </IconButton>
        }
      />
    </Card>
  );
}
