import React from 'react';
import { Card, CardContent, Typography, Skeleton } from '@mui/material';

const DetailLoader = () => {
  return (
    <Card>
      <CardContent>
        <Typography color="text.secondary">
          <Skeleton variant="text" />
        </Typography>
        <Typography color="text.secondary">
          <Skeleton variant="text" />
        </Typography>
        <Typography color="text.secondary">
          <Skeleton variant="text" />
        </Typography>
        <Typography color="text.secondary">
          <Skeleton variant="text" />
        </Typography>
        <Typography variant="h5" sx={{ margin: '1rem 0', fontWeight: '500' }}>
          <Skeleton variant="text" />
        </Typography>

        <Typography variant="body2" sx={{ margin: '1rem 0' }}>
          <Skeleton variant="text" />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DetailLoader;
