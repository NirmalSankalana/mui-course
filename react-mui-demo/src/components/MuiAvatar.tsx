import React from "react";
import { Avatar, AvatarGroup, Stack } from "@mui/material";

export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={1}>
        <Avatar sx={{ bgcolor: "primary.light", width: 48, height: 48 }}>
          BW
        </Avatar>
        <Avatar sx={{ bgcolor: "success.light" }} variant="rounded">
          CK
        </Avatar>
      </Stack>

      <Stack direction="row" spacing={1}>
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Nirmal Sankalana"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/women/30.jpg"
            alt="Nirmal Sankalana"
          />
        </AvatarGroup>
      </Stack>
    </Stack>
  );
};
