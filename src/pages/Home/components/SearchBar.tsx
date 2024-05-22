import { Grid } from '@mui/material'
import SearchBarFLights from './SearchFormFlights'

export default function SearchBar() {
  
    return (
        <Grid container direction="column" alignItems="center" spacing={0} sx={{ backgroundColor: '#fff', padding: '3rem' }}>
            <Grid item sx={{width:'80%'}}>
                <SearchBarFLights />
            </Grid>
        </Grid>
    )
}
