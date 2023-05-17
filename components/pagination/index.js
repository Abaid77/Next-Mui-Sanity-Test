import service from '@/utils/services';
import { Box, Pagination } from '@mui/material';
import React, { useEffect } from 'react';

const AppPagination = () => {
  const pageSize = 3;

  useEffect(() => {
    service.getData().then((response) => {
      console.log(response);
    });
  }, []);
  return (
    <>
      <Box
        justifyContent={'center'}
        alignItems="center"
        display={'flex'}
        sx={{ margin: '20px 0px' }}
      >
        <Pagination count={10} />
      </Box>
    </>
  );
};

export default AppPagination;
