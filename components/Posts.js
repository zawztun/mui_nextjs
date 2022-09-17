import React from 'react'
import { Button, Grid,Card } from '@mui/material'
import Stack from '@mui/material/Stack';
import MyCard from './MyCard';
import CardActions from '@mui/material/CardActions';


const Posts= () => {
  return (
    <div>
<Grid container spacing={2}>
<Grid item xs={6} md={4}>
  <Stack direction="row" spacing={8}>
  <Card
        component="img"
        height="240"
        image=""
      />
  </Stack>
  </Grid>
<Grid item xs={6} md={8}>
  <h2>Works well in fast-paced, deadline-driven environments.</h2>
<strong>Energetic and focused Production Worker </strong> committed to teamwork and company objectives. Excellent ability working with operating equipment, completing side projects and possesses a strong willingness to learn new processes. Works well in fast-paced, deadline-driven environments.
<strong>Energetic and focused Production Worker </strong> committed to teamwork and company objectives. Excellent ability working with operating equipment, completing side projects and possesses a strong willingness to learn new processes. Works well in fast-paced, deadline-driven environments.
<CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
</CardActions>
  </Grid>
</Grid>

    </div>
  )
}
export default Posts