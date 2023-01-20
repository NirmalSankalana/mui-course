import React, { useState } from 'react'
import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText } from '@mui/material'
export const MuiRadioButton = () => {
    const [value, setValue] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }
    console.log(value);
    return (
        <Box>
            <FormControl>
                <FormLabel>
                    Years of experience
                </FormLabel>
                <RadioGroup name='job-experience-group' aria-label='job-experience-group-label' onChange={handleChange} row>
                    <FormControlLabel control={<Radio color='secondary' />} label='0-2' value='0-2' />
                    <FormControlLabel control={<Radio />} label='2-6' value='2-6' />
                    <FormControlLabel control={<Radio />} label='6-14' value='6-14' />
                </RadioGroup>
                <FormHelperText />
            </FormControl>
        </Box>
    )
}
