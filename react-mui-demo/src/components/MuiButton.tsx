import React from "react";
import { Stack, Button, IconButton } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SendIcon from '@mui/icons-material/Send';

export const MuiButton = () => {
    return (
        <Stack>
            <Stack spacing={2} direction="row">
                <Button variant="text" href="https://nirmalsankalana.github.io">
                    Text
                </Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
            <Stack spacing={2} direction="row">
                <Button variant="contained" color="primary">
                    Primary
                </Button>
                <Button variant="contained" color="secondary">
                    Secondary
                </Button>
                <Button variant="contained" color="info">
                    Info
                </Button>
                <Button variant="contained" color="warning">
                    Warning
                </Button>
                <Button variant="contained" color="error">
                    Error
                </Button>
                <Button variant="contained" color="success">
                    Success
                </Button>
            </Stack>
            <Stack display="block" spacing={2} direction="row">
                <Button variant="contained" size="small">small</Button>
                <Button variant="contained" size="medium">medium</Button>
                <Button variant="contained" size="large">large</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant="contained"><AddCircleOutlineIcon /></Button>
                <Button variant="contained" startIcon={<SendIcon />} disableElevation>send</Button>
                <Button variant="contained" endIcon={<SendIcon />} disableRipple onClick={() => alert("Clicked")}>send</Button>
                <IconButton color="success" size="small">
                    <AddCircleOutlineIcon />
                </IconButton>
            </Stack>
        </Stack>
    );
};
