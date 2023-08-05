import React from 'react';
import { Skeleton } from '@mui/material';

const TableLoader = () => {
  return (
    <table style={{ width: "100%", padding: "10px" }}>
      <thead>
        <tr>
          <th>
            <Skeleton variant="text" height={80} />
          </th>
          <th>
            <Skeleton variant="text" height={80} />
          </th>
          <th>
            <Skeleton variant="text" height={80} />
          </th>
        </tr>
      </thead>
      <tbody>
        {[...Array(5)].map((_, index) => (
          <tr key={index}>
            <td>
              <Skeleton variant="text" height={50} />
            </td>
            <td>
              <Skeleton variant="text" height={50} />
            </td>
            <td>
              <Skeleton variant="text" height={50} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableLoader;
