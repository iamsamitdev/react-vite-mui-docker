import './App.css'
import { Button, Stack } from '@mui/material'
import { Delete, Send, Photo, Notifications } from '@mui/icons-material'

function AppOLD() {
  return (
    <>
      <Stack direction={'row'} spacing={2}>
        <Button>Button 1</Button>
        <Button variant="outlined">Button 2</Button>
        <Button variant="contained">Button 3</Button>
        <Button variant="contained" color="secondary">Button 4</Button>
      </Stack>

      <Stack direction={'row'} spacing={2} marginTop={2}>
        <Button startIcon={<Delete />}>Button 5</Button>
        <Button variant="outlined" startIcon={<Send />}>Button 6</Button>
        <Button variant="contained" startIcon={<Photo />}>Button 7</Button>
        <Button variant="contained" color="secondary" endIcon={<Notifications />}>Button 8</Button>
      </Stack>
    </>
  )
}

export default AppOLD
