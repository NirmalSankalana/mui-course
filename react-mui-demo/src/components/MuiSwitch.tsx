import { Box, FormControlLabel, Switch } from '@mui/material'
import React, { useState } from 'react'

export const MuiSwitch = () => {
    const [dark, setDark] = useState(false)
    console.log(dark)
    return (
        <Box>
            <FormControlLabel label="Dark mode" control={<Switch checked={dark} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDark(e.target.checked)} />} />
        </Box>
    )
}
