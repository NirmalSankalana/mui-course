import { Avatar, Chip, Stack } from "@mui/material";
import React, { useState } from "react";
import AndroidIcon from "@mui/icons-material/Android";
import CancelIcon from "@mui/icons-material/Cancel";

export const MuiChips = () => {
  const [chips, setChips] = useState(["Chip1", "Chip2", "Chip3"]);
  const handleDelete = (chipDelete: string) => {
    setChips((chips) => chips.filter((chip) => chip !== chipDelete));
  };
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="chip" color="primary" size="small" icon={<AndroidIcon />} />
      <Chip
        label="outlined chip"
        color="success"
        size="small"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      />
      <Chip
        label="chip"
        color="success"
        size="small"
        avatar={<Avatar>V</Avatar>}
        onClick={() => alert("Clicked")}
      />
      <Chip
        label="chip"
        color="error"
        size="small"
        icon={<CancelIcon />}
        onClick={() => alert("Clicked")}
      />

      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
};
