import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';
import { IFormInputs } from './useCheckOutViewModel';
import { ChangeEventHandler } from 'react';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

interface CheckoutProps {
  handleInputChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  formInputs: IFormInputs;
  errors: Partial<IFormInputs>;
}

export default function AddressForm({ handleInputChange, formInputs, errors }: CheckoutProps) {
  return (

    <Grid container spacing={3}>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="first-name" required>
          First name
        </FormLabel>
        <OutlinedInput
          id="firstName"
          name="firstName"
          type="name"
          placeholder="John"
          autoComplete="first name"
          required
          onChange={handleInputChange}
          value={formInputs.firstName}
          error={!!errors.firstName}
          
        />
      </FormGrid>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="last-name" required>
          Last name
        </FormLabel>
        <OutlinedInput
          id="last-name"
          name="lastName"
          type="lastName"
          placeholder="Snow"
          autoComplete="last name"
          required
          onChange={handleInputChange}
          value={formInputs.lastName}
          error={!!errors.lastName}
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="address1" required>
          Address line 1
        </FormLabel>
        <OutlinedInput
          id="address1"
          name="address1"
          type="address1"
          placeholder="Street name and number"
          autoComplete="shipping address-line1"
          required
          onChange={handleInputChange}
          value={formInputs.address1}
          error={!!errors.address1}
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="address2">Address line 2</FormLabel>
        <OutlinedInput
          id="address2"
          name="address2"
          type="address2"
          placeholder="Apartment, suite, unit, etc. (optional)"
          autoComplete="shipping address-line2"
          required
          onChange={handleInputChange}
          value={formInputs.address2}
        />
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="city" required>
          City
        </FormLabel>
        <OutlinedInput
          id="city"
          name="city"
          type="city"
          placeholder="New York"
          autoComplete="City"
          required
          onChange={handleInputChange}
          value={formInputs.city}
          error={!!errors.city}
        />
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="state" required>
          State
        </FormLabel>
        <OutlinedInput
          id="state"
          name="state"
          type="state"
          placeholder="NY"
          autoComplete="State"
          required
          onChange={handleInputChange}
          value={formInputs.state}
          error={!!errors.state}
        />
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="zip" required>
          Zip / Postal code
        </FormLabel>
        <OutlinedInput
          id="zip"
          name="zip"
          type="zip"
          placeholder="12345"
          autoComplete="shipping postal-code"
          required
          onChange={handleInputChange}
          value={formInputs.zip}
          error={!!errors.zip}
        />
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="country" required>
          Country
        </FormLabel>
        <OutlinedInput
          id="country"
          name="country"
          type="country"
          placeholder="United States"
          autoComplete="shipping country"
          required
          onChange={handleInputChange}
          value={formInputs.country}
          error={!!errors.country}
        />
      </FormGrid>
    </Grid>
  );
}