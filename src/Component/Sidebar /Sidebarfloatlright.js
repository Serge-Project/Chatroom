import * as React from 'react';
import Box from '@mui/material/Box';
// import { ForkLeft } from '@mui/icons-material';

export default function SidebarRight() {
  return (
    <Box
      sx={{
        width: 300,
        height: 1000,
        backgroundColor: 'gray',
        float: 'right',

        '&:hover': {
          backgroundColor: 'white',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
  );
}