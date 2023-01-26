import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { IconButton, Tooltip } from "@mui/material";

export const MuiTooltip = () => {
  return (
    <Tooltip
      title="delete"
      placement="right"
      arrow
      enterDelay={500}
      leaveDelay={200}
    >
      <IconButton>
        <DeleteForeverIcon />
      </IconButton>
    </Tooltip>
  );
};
