import { Stack, TextField, InputAdornment, IconButton } from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import React, { useState } from "react";

export const MuiTextfield = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const [value, setValue] = useState("");
    return (
        <Stack spacing={4}>
            <Stack direction="row" spacing={2}>
                <TextField label="Name" />
                <TextField label="Name" variant="filled" />
                <TextField label="Name" variant="standard" />
            </Stack>
            <Stack direction="row" spacing={2}>
                <TextField label="Small Secondary" size="small" color="secondary" />
            </Stack>
            <Stack direction="row" spacing={2}>
                <TextField
                    label="Name - required"
                    required
                    value={value}
                    onChange={(e) => e.target.value}
                    error={!value}
                    helperText={
                        !value ? "Required" : "Do not share your password with others"
                    }
                />
                <TextField
                    label="password"
                    type="password"
                    helperText="Do not share your password with anyone"
                />
                <TextField label="Name - required" disabled />
                <TextField label="Name - required" InputProps={{ readOnly: true }} />
            </Stack>
            <Stack direction="row" spacing={2}>
                <TextField
                    label="Price"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                />
                <TextField
                    label="Weight"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                    }}
                />
                <TextField
                    label="password"
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconButton
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Stack>
        </Stack>
    );
};
