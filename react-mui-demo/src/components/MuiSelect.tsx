import { MenuItem, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

export const MuiSelect = () => {
    const [countries, setCountries] = useState([]);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setCountries(typeof value === "string" ? value.split(",") : value);
    };
    console.log(countries);
    return (
        <Box width="250px">
            <TextField
                label="Select Country"
                value={countries}
                onChange={handleChange}
                SelectProps={{ multiple: true }}
                size="small"
                color="secondary"
                helperText="please select your country"
                fullWidth
                select
            >
                <MenuItem value="Sl">Sri Lanka</MenuItem>
                <MenuItem value="In">India</MenuItem>
                <MenuItem value="Swiss">Switserland</MenuItem>
                <MenuItem value="Su">Australia</MenuItem>
                <MenuItem value="Nz">Newzealand</MenuItem>
            </TextField>
        </Box>
    );
};
