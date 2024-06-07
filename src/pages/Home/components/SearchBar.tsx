import { Grid } from '@mui/material'
import SearchBarFLights from './SearchFormFlights'
import { BadgeInfo } from './interface/badgeInterface';

interface SearchBarProps {
    selectedBadge: BadgeInfo;
}

export default function SearchBar({selectedBadge}:SearchBarProps) {

    return (
        <Grid container direction="column" alignItems="center" spacing={0} sx={{ backgroundColor: '#fff', my:10 }}>
            <Grid item sx={{width:{xs:'90%', lg:'80%', xl:'70%'}}}>
                <SearchBarFLights selectedBadge={selectedBadge}/>
            </Grid>
        </Grid>
    )
}
