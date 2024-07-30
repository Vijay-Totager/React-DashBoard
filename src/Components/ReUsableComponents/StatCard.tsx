import { Card, CardContent, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material';
import React from 'react';

export default function StatCard(props: {
  startContent?: JSX.Element;
  endContent?: JSX.Element;
  name: string;
  growth?: string | number;
  value: string | number;
}) {
  const { startContent, endContent, name, growth, value } = props;
  const theme = useTheme();
  const textColor ="#1b254b";
  const textColorSecondary = "#a3aed0";

  return (
    <Card sx={{ borderRadius:'10px',padding:'0px' }}  elevation={0}>
      <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
        {startContent}

        <Box marginLeft={startContent ? '18px' : '0px'} style={{ textAlign: 'center' }}>
          <Typography
            variant="subtitle2"
            color={textColorSecondary}
            sx={{ lineHeight: '100%',fontWeight:'700',  fontFamily: "DM Sans", }}
          >
            {name}
          </Typography>
          <Typography
            variant="h6"
            color={textColor}
            sx={{fontWeight:'700',  fontFamily: "DM Sans",}}
          >
            {value}
          </Typography>
          {growth && (
            <Box display="flex" alignItems="center">
              <Typography
                variant="body2"
                style={{ color: theme.palette.success.main, fontWeight: 700, marginRight: '5px',  fontFamily: "DM Sans", }}
              >
                {growth}
              </Typography>
              <Typography
                variant="body2"
                color={textColorSecondary}
                style={{ fontWeight: 400,  fontFamily: "DM Sans", }}
              >
                since last month
              </Typography>
            </Box>
          )}
        </Box>
        <Box marginLeft="auto">
          {endContent}
        </Box>
      </CardContent>
    </Card>
  );
}
