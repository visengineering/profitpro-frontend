import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Skeleton from "@mui/material/Skeleton";

function ChatSkeletonLoader() {
  const skeletonCount = 6;

  return (
    <List>
      {[...Array(skeletonCount)].map((_, index) => (
        <ListItem key={index} className={`${index % 2 && "justify-end"}`}>
          {!(index % 2) ? (
            <div className="d-flex">
              <Skeleton variant="circular" width={40} height={40} />

              <div className="pl-10">
                <Skeleton width={40} height={20} />

                <Skeleton variant="rectangular" width="300px" height="50px" />
              </div>
            </div>
          ) : (
            <Skeleton variant="rectangular" width="300px" height="50px" />
          )}
        </ListItem>
      ))}
    </List>
  );
}

export default ChatSkeletonLoader;
