
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useFlightSearchForm from './hooks/useSearchFlightsForm';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import TripModal from '../../../components/Modal/TripModal';
import ErrorMessage from '../../../components/ErrorMessage';

const SearchBarFlights = () => {
    const { setFormValues, formValues, handleChange, handleSubmit, formError } = useFlightSearchForm();

    return (
        <Box sx={{ mt: 3 }}>
            <Paper elevation={3} sx={{ py: 3, px: 2, backgroundColor: '#f5f5f5' }}>
                <form onSubmit={handleSubmit}>
                    {formError && <ErrorMessage>{formError}</ErrorMessage>}
                    <Grid container spacing={2} sx={{ mt: 1 }}>
                        <Grid item xs={12} sm={6} md={2.5}>
                            <TextField
                                id="origin"
                                label="From"
                                variant="outlined"
                                fullWidth
                                onChange={(event) => handleChange('origin', event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={2.5}>
                            <TextField
                                id="destination"
                                label="To"
                                variant="outlined"
                                fullWidth
                                onChange={(event) => handleChange('destination', event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={2}>
                            <TextField
                                id="departure-date"
                                label="Departure Date"
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                fullWidth
                                onChange={(event) => handleChange('departureDate', event.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={2}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Class</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={formValues.classOfService}
                                    label="Class"
                                    onChange={(event) => handleChange('classOfService', event.target.value)}
                                    variant="outlined"
                                >
                                    <MenuItem value={"ECONOMY"}>ECONOMY</MenuItem>
                                    <MenuItem value={"BUSINESS"}>BUSINESS</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <TripModal
                                buttonText='Choose Passengers'
                                formValues={formValues}
                                setFormValues={setFormValues}
                            />
                        </Grid>
                    </Grid>

                    <Box mt={2}>
                        <Grid container justifyContent="flex-end">
                            <Grid item xs={12} sm={6} md={2.5}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        backgroundColor: '#00A9FF',
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: '#66CCFF',
                                        },
                                    }}
                                >
                                    Search
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </form>
            </Paper>
        </Box>

    );
};

export default SearchBarFlights;
{/* <Grid item xs={12} sm={6} md={2}>
                            <TextField
                                id="arrival-date"
                                label="Arrival Date"
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                fullWidth
                                onChange={(event) => handleChange('arrivalDate', event.target.value)}
                            />
                        </Grid> */}