import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Person2Icon from "@mui/icons-material/Person2";

export const MuiBottomNavigation = () => {
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      sx={{ width: "100%", position: "absolute", bottom: 0 }}
      value={value}
      onChange={(e, newValue) => setValue(newValue)}
      showLabels
    >
      <BottomNavigationAction lable="home" icon={<HomeIcon />} />
      <BottomNavigationAction lable="favourite" icon={<FavoriteIcon />} />
      <BottomNavigationAction lable="profile" icon={<Person2Icon />} />
    </BottomNavigation>
  );
};
