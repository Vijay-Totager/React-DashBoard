import React from 'react';
import { Box } from '@mui/material';

export default function IconBox(props: { icon: JSX.Element | string; [x: string]: any }) {
  const { icon, ...rest } = props;

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="50%"
      {...rest}
    >
      {icon}
    </Box>
  );
}
