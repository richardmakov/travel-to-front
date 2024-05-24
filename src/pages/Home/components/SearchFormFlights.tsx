
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useFlightSearchForm from './hooks/useSearchFlightsForm';
import { Card, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import TripModal from '../../../components/Modal/TripModal';
import ErrorMessage from '../../../components/ErrorMessage';

const SearchBarFlights = () => {
    const { setFormValues, formValues, handleChange, handleSubmit, formError } = useFlightSearchForm();

    return (
        <Box sx={{ mt: 3 }}>
            <Card sx={{  borderRadius: 10,boxShadow: 3 }}>
                <Box sx={{ backgroundColor: '#ADD8E6', width: '100%', padding: 3 }}>
                    <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#FFF', mr:2}}>
                         Flight search Engine
                    </Typography>
                </Box>
                <Box sx={{ backgroundColor: '#f5f5f5f5', maxWidth: '100%', display: 'flex', flexDirection: 'column', px:3, pb:3, pt:1 }}>
                    <form onSubmit={handleSubmit}>
                        {formError && <ErrorMessage>{formError}</ErrorMessage>}
                        <Grid container spacing={2} sx={{ mt: 1 }}>
                            <Grid item xs={12} sm={6} md={6} lg={2.5} xl={3}>
                                <TextField
                                    id="origin"
                                    label="From"
                                    variant="outlined"
                                    fullWidth
                                    onChange={(event) => handleChange('origin', event.target.value)}
                                    value={formValues.origin}
                                    focused
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={2.5} xl={3}>
                                <TextField
                                    id="destination"
                                    label="To"
                                    variant="outlined"
                                    fullWidth
                                    onChange={(event) => handleChange('destination', event.target.value)}
                                    value={formValues.destination}
                                    focused
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={2.5} xl={3}>
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
                                    value={formValues.departureDate}
                                    focused
                                />
                            </Grid>

                            <Grid item xs={12} sm={6} md={6} lg={2.5} xl={3}>
                                <FormControl fullWidth focused >
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
                            <Grid item xs={12} sm={12} md={12} lg={2} xl={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <TripModal
                                    buttonText='Choose Passengers'
                                    formValues={formValues}
                                    setFormValues={setFormValues}
                                />
                            </Grid>
                        </Grid>

                        <Box mt={2}>
                            <Grid container justifyContent={'flex-end'}>
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        fullWidth
                                        sx={{
                                            px: 1,
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
                </Box>
                <Box sx={{ backgroundColor: '#ADD8E6', width: '100%', padding: 1 }}>
                    <Typography variant="body2" sx={{ textAlign: 'center', fontWeight: 500, color: '#FFF' }}>
                        TravelTO
                    </Typography>
                </Box>
            </Card>
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