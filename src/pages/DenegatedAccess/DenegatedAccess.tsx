import { Box } from '@mui/material'
import Message from './components/Message'

export default function DenegatedAccess() {
  return (
    <Box sx={{display:'flex', justifyContent:'center', p:20}}>
        <Message />
    </Box>
  )
}
