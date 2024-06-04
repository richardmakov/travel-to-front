import React, { useState } from 'react';
import { Button, Modal, Paper, Typography, Select, MenuItem, Box, FormControlLabel } from '@mui/material';
import { SelectChangeEvent } from '@mui/material';
import { FormValuesSearchFlights } from '../../pages/Home/components/interface/flightsInterface';

interface TripModalProps {
  buttonText: string;
  formValues: FormValuesSearchFlights;
  setFormValues: React.Dispatch<React.SetStateAction<FormValuesSearchFlights>>;
  handleChangeSelectNumbersAdults:(e: SelectChangeEvent<number>) => void;
    handleChangeSelectNumbersSeniors:(e: SelectChangeEvent<number>) => void;
}

const TripModal: React.FC<TripModalProps> = ({ buttonText, formValues, handleChangeSelectNumbersAdults,handleChangeSelectNumbersSeniors  }) => {
  const [open, setOpen] = useState(false);

  const [buttonDisplayText, setButtonDisplayText] = useState(buttonText);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 

  const handleSave = () => {
    setButtonDisplayText(`${formValues.numberAdults} adults, ${formValues.numberSenior} children`);
    setOpen(false);
  };

  return (

    <Box sx={{ display: 'flex', justifyContent:'center' }}>
      <Button
        onClick={handleOpen}
        sx={{
          py: 1.5,
          px: 4,
          backgroundColor: 'transparent',
          color: 'black',
          border:'2px solid #1ABC9C'
        }}
      >
        {buttonDisplayText}
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Paper sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'fit-content',
          maxWidth: '80%',
          padding: '20px',
          backgroundColor: 'white',
          borderRadius: '5px',
        }}>
          <Typography variant='h5' sx={{ marginBottom: '20px' }}>Select Passengers</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <FormControlLabel
              control={<Select
                id="adults"
                value={formValues.numberAdults}
                onChange={handleChangeSelectNumbersAdults}
                sx={{ minWidth: '50px', maxHeight: '40px', mx: 3 }}
              >
                {[...Array(10).keys()].map((num) => (
                  <MenuItem key={num} value={num}>{num}</MenuItem>
                ))}
              </Select>}
              label="Adults"
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <FormControlLabel
              control={<Select
                id="seniors"
                value={formValues.numberSenior}
                onChange={handleChangeSelectNumbersSeniors}
                sx={{ minWidth: '50px', maxHeight: '40px', mx: 3 }}
              >
                {[...Array(10).keys()].map((num) => (
                  <MenuItem key={num} value={num}>{num}</MenuItem>
                ))}
              </Select>}
              label="Children"
            />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              onClick={handleSave}
              sx={{
                py: '5px',
                px: '15px',
                backgroundColor: '#4caf50',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#388e3c',
                },
              }}
            >
              Save
            </Button>
          </Box>
        </Paper>
      </Modal>
    </Box>

  );
}

export default TripModal;
