import Grid from '@mui/material/Grid';
import { IFormInputs } from './useCheckOutViewModel';
import DatePicker from '../../../components/OtherField/DatePicker';
import dayjs from 'dayjs';
import { Box, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';

interface CheckoutProps {
  numAdults: number;
  numChildren: number;
  handleAdultsChange: (e: SelectChangeEvent<number>) => void;
  handleChildrenChange: (e: SelectChangeEvent<number>) => void;
  handleDateChange: (e: dayjs.Dayjs | null, index: number) => void;
  handleInputChange: (index: number) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  formInputs: IFormInputs[];
  errors: Partial<IFormInputs>[];
}

export default function PassengersForm({ numAdults, numChildren, handleAdultsChange, handleChildrenChange, handleDateChange, handleInputChange, formInputs, errors }: CheckoutProps) {

  return (
    <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Typography variant="h5">Adults:</Typography>
          <Select
            value={numAdults}
            onChange={handleAdultsChange}
            sx={{ minWidth: '80px', maxHeight:'50px'}}
          >
            {[...Array(10)].map((_, index) => (
              <MenuItem key={index} value={index + 1}>{index + 1}</MenuItem>
            ))}
          </Select>

          <Typography variant="h5">Children:</Typography>
          <Select
            value={numChildren}
            onChange={handleChildrenChange}
            sx={{ minWidth: '80px', maxHeight:'50px'}}
          >
            {[...Array(10)].map((_, index) => (
              <MenuItem key={index} value={index}>{index}</MenuItem>
            ))}
          </Select>
        </Box>


      <Grid container spacing={3}>
        {numAdults > 0 && (
          <>
            <Grid item xs={12}>
              <Typography variant="h4">Adults</Typography>
            </Grid>
            {Array.from({ length: numAdults }, (_, i) => (
              <Grid item xs={12} key={`adult-${i}`}>
                <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 4, mb: 2 }}>
                  <Typography variant="h6">Adult {i + 1}</Typography>
                  <form noValidate>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          id={`firstname-adult-${i}`}
                          label="First name"
                          variant="outlined"
                          fullWidth
                          required
                          onChange={handleInputChange(i)}
                          name="firstName"
                          value={formInputs[i]?.firstName}
                          error={!!errors[i]?.firstName}
                          helperText={errors[i]?.firstName}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          id={`lastName-adult-${i}`}
                          label="Last name"
                          variant="outlined"
                          fullWidth
                          required
                          onChange={handleInputChange(i)}
                          name="lastName"
                          value={formInputs[i]?.lastName}
                          error={!!errors[i]?.lastName}
                          helperText={errors[i]?.lastName}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          id={`passport-adult-${i}`}
                          label="Passport"
                          variant="outlined"
                          fullWidth
                          required
                          onChange={handleInputChange(i)}
                          name="passport"
                          value={formInputs[i]?.passport}
                          error={!!errors[i]?.passport}
                          helperText={errors[i]?.passport}
                        />
                      </Grid>
                      <Grid item xs={12} md={6} sx={{ mt: -1 }}>
                        <DatePicker handleDateChange={(date) => handleDateChange(date, i)} />
                        {errors[i]?.dateOfBirth && <Typography color="error" variant="body2" sx={{ mt: 0.5, fontSize: '12px', ml: 1.5 }}>{errors[i].dateOfBirth}</Typography>}
                      </Grid>
                    </Grid>
                  </form>
                </Box>
              </Grid>
            ))}
          </>
        )}

        {numChildren > 0 && (
          <>
            <Grid item xs={12}>
              <Typography variant="h4">Children</Typography>
            </Grid>
            {Array.from({ length: numChildren }, (_, i) => (
              <Grid item xs={12} key={`child-${i}`}>
                <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 4, mb: 2 }}>
                  <Typography variant="h6">Child {i + 1}</Typography>
                  <form noValidate>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          id={`firstName-child-${i}`}
                          label="First name"
                          variant="outlined"
                          fullWidth
                          required
                          onChange={handleInputChange(numAdults + i)}
                          name="firstName"
                          value={formInputs[numAdults + i]?.firstName}
                          error={!!errors[numAdults + i]?.firstName}
                          helperText={errors[numAdults + i]?.firstName}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          id={`lastName-child-${i}`}
                          label="Last name"
                          variant="outlined"
                          fullWidth
                          required
                          onChange={handleInputChange(numAdults + i)}
                          name="lastName"
                          value={formInputs[numAdults + i]?.lastName}
                          error={!!errors[numAdults + i]?.lastName}
                          helperText={errors[numAdults + i]?.lastName}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          id={`passport-child-${i}`}
                          label="Passport"
                          variant="outlined"
                          fullWidth
                          required
                          onChange={handleInputChange(numAdults + i)}
                          name="passport"
                          value={formInputs[numAdults + i]?.passport}
                          error={!!errors[numAdults + i]?.passport}
                          helperText={errors[numAdults + i]?.passport}
                        />
                      </Grid>
                      <Grid item xs={12} md={6} sx={{ mt: -1 }}>
                        <DatePicker handleDateChange={(date) => handleDateChange(date, numAdults + i)} />
                        {errors[numAdults + i]?.dateOfBirth && <Typography color="error" variant="body2" sx={{ mt: 0.5, fontSize: '12px', ml: 1.5 }}>{errors[numAdults + i].dateOfBirth}</Typography>}
                      </Grid>
                    </Grid>
                  </form>
                </Box>
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </Box>
  );
}