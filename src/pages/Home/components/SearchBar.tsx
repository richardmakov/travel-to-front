import { Grid } from '@mui/material'
import SearchBarFLights from './SearchFormFlights'

export default function SearchBar() {
  

    return (
        <Grid container direction="column" alignItems="center" spacing={0} sx={{ backgroundColor: '#fff', my:10 }}>
            <Grid item sx={{width:'60%'}}>
                <SearchBarFLights />
            </Grid>
        </Grid>
    )
}
