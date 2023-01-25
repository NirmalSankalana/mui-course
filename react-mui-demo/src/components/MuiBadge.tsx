import { Badge, Stack } from "@mui/material";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={5} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color="secondary" showZero>
        <MailIcon />
      </Badge>
      <Badge badgeContent={1000} color="secondary" max={999}>
        <MailIcon />
      </Badge>
      <Badge variant="dot" color="success" max={999} invisible={true}>
        <NotificationsIcon />
      </Badge>
    </Stack>
  );
};
