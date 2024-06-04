import Grid from '@mui/material/Grid';
import { IFormInputs } from './useCheckOutViewModel';
import useFlightSearchForm from '../../Home/components/hooks/useSearchFlightsForm';
import DatePicker from '../../../components/OtherField/DatePicker';
import dayjs from 'dayjs';
import { Box, TextField, Typography } from '@mui/material';
import { BadgeInfo } from '../../Home/components/interface/badgeInterface';

interface CheckoutProps {
  handleDateChange: (e: dayjs.Dayjs | null, index: number) => void;
  handleInputChange: (index: number) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  formInputs: IFormInputs[];
  errors:  Partial<IFormInputs>[];
  selectedBadge: BadgeInfo;
}

export default function PassengersForm({ handleDateChange, handleInputChange, formInputs, errors, selectedBadge }: CheckoutProps) {
  const { formValues } = useFlightSearchForm(selectedBadge)
  const numberAdults = formValues.numberAdults;
  const numberChildren = formValues.numberSenior;
  return (

    <Grid container spacing={3}>
      {numberAdults > 0 && (
        <>
          <Grid item xs={12}>
            <Typography variant="h4">Adults</Typography>
          </Grid>
          {Array.from({ length: numberAdults }, (_, i) => (
            <Grid item xs={12} key={`adult-${i}`}>
              <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 4, mb: 2 }}>
                <Typography variant="h6">Adult {i + 1}</Typography>
                <form noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        id={`firstName-adult-${i}`}
                        label="First name"
                        variant="outlined"
                        fullWidth
                        required
                        onChange={handleInputChange(i)}
                        name="firstName"
                        value={formInputs[i].firstName}
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
                        value={formInputs[i].lastName}
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
                        value={formInputs[i].passport}
                        error={!!errors[i]?.passport}
                        helperText={errors[i]?.passport}
                      />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{mt:-1}}>
                      <DatePicker handleDateChange={(date) => handleDateChange(date, i)} />
                      {errors[i]?.dateOfBirth && <Typography color="error" variant="body2" sx={{mt:0.5, fontSize:'12px', ml:1.5}}>{errors[i].dateOfBirth}</Typography>}
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Grid>
          ))}
        </>
      )}

      {numberChildren > 0 && (
        <>
          <Grid item xs={12}>
            <Typography variant="h4">Children</Typography>
          </Grid>
          {Array.from({ length: numberChildren }, (_, i) => (
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
                        onChange={handleInputChange(numberAdults + i)}
                        name="firstName"
                        value={formInputs[numberAdults + i].firstName}
                        error={!!errors[numberAdults + i]?.firstName}
                        helperText={errors[numberAdults + i]?.firstName}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        id={`lastName-child-${i}`}
                        label="Last name"
                        variant="outlined"
                        fullWidth
                        required
                        onChange={handleInputChange(numberAdults + i)}
                        name="lastName"
                        value={formInputs[numberAdults + i].lastName}
                        error={!!errors[numberAdults + i]?.lastName}
                        helperText={errors[numberAdults + i]?.lastName}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        id={`passport-child-${i}`}
                        label="Passport"
                        variant="outlined"
                        fullWidth
                        required
                        onChange={handleInputChange(numberAdults + i)}
                        name="passport"
                        value={formInputs[numberAdults + i].passport}
                        error={!!errors[numberAdults + i]?.passport}
                        helperText={errors[numberAdults + i]?.passport}
                      />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{mt:-1}}>
                      <DatePicker handleDateChange={(date) => handleDateChange(date, numberAdults + i) } />
                      {errors[numberAdults + i]?.dateOfBirth && <Typography color="error" variant="body2" sx={{mt:0.5, fontSize:'12px', ml:1.5}}>{errors[numberAdults + i].dateOfBirth}</Typography>}
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Grid>
          ))}
        </>
      )}
    </Grid>

  );
}