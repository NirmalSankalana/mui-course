import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export const MuiList = () => {
  return (
    <Box sx={{ width: " 400px", bgcolor: "#efefef" }}>
      <List>
        <ListItem>
          <ListItemIcon>
            <AcUnitIcon />
          </ListItemIcon>
          <ListItemText primary="List item 1" secondary="Secondary text" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <AcUnitIcon />
          </ListItemIcon>
          <ListItemText primary="List item 2" secondary="Secondary text" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <AcUnitIcon />
          </ListItemIcon>
          <ListItemText primary="List item 3" secondary="Secondary text" />
        </ListItem>
      </List>
    </Box>
  );
};
