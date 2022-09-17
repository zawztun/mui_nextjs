import React from 'react'
import { Button, Grid } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


const Hero= () => {
  return (
    <div>
<Grid container spacing={2}>
<Grid item xs={6} md={8}>
  <h2>Works well in fast-paced, deadline-driven environments.</h2>
<strong>Energetic and focused Production Worker </strong> committed to teamwork and company objectives. Excellent ability working with operating equipment, completing side projects and possesses a strong willingness to learn new processes. Works well in fast-paced, deadline-driven environments.
<strong>Energetic and focused Production Worker </strong> committed to teamwork and company objectives. Excellent ability working with operating equipment, completing side projects and possesses a strong willingness to learn new processes. Works well in fast-paced, deadline-driven environments.
  </Grid>
  <Grid item xs={6} md={4}>
  <Stack direction="row" spacing={4}>
    <Avatar
      alt="Remy Sharp"
      src="https://images.unsplash.com/photo-1660735839772-fe0dc14012a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
      sx={{ width: 256, height: 256 }}
    />
  </Stack>
  </Grid>
</Grid>
<Button variant="contained" color="success" style = {{margin:"2rem"}}>
 Download Resume
</Button>
    </div>
  )
}
export default Hero