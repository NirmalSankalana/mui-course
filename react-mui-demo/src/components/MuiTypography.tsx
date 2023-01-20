import React from 'react'
import { Typography } from '@mui/material'

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1' gutterBottom>Header 1</Typography>
        <Typography variant='h2'>Header 2</Typography>
        <Typography variant='h3'>Header 3</Typography>
        <Typography variant='h4' component="h1" gutterBottom>Header 4</Typography>
        <Typography variant='h5'>Header 5</Typography>
        <Typography variant='h6'>Header 6</Typography>


        <Typography variant='subtitle1'>Subtitle 1</Typography>
        <Typography variant='subtitle2'>Subtitle 2</Typography>

        <Typography variant='body1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente exercitationem ea pariatur quibusdam sint? Autem debitis excepturi accusamus, praesentium harum dolorum? Repellat hic eligendi itaque, distinctio error nobis quisquam eius.</Typography>
        <Typography variant='body2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, ipsa sunt vitae repudiandae rerum commodi odio, debitis ipsam ullam iure ducimus! Quis est laborum, ratione sequi omnis laudantium quasi quam.</Typography>
    </div>
  )
}
