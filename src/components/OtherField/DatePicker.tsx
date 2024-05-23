import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as ExternalDatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';

type DatePickerProps = {
    handleDateChange: (e: dayjs.Dayjs | null) => void,
}

export default function DatePicker({ handleDateChange }: DatePickerProps) {


    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']}>
                    <ExternalDatePicker
                        name="date"
                        label={'Date of Birth *'}
                        views={['year', 'month', 'day']}
                        onChange={handleDateChange}
                        
                    />
                </DemoContainer>
            </LocalizationProvider>
        </>
    );
}
