import { Alert, AlertTitle, Button } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error">error</Alert>
      <Alert severity="warning">warning</Alert>
      <Alert severity="info">info</Alert>
      <Alert severity="success">success</Alert>

      <Alert variant="outlined" severity="error">
        error
      </Alert>
      <Alert variant="outlined" severity="warning">
        warning
      </Alert>
      <Alert variant="outlined" severity="info">
        info
      </Alert>
      <Alert variant="outlined" severity="success">
        success
      </Alert>

      <Alert
        variant="filled"
        severity="error"
        onClose={() => alert("Close Alert")}
      >
        <AlertTitle>Error</AlertTitle>
        error
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        warning
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>Info</AlertTitle>
        info
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        <AlertTitle>Success</AlertTitle>
        success
      </Alert>
    </Stack>
  );
};
