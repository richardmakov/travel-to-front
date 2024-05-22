import { TextField } from '@mui/material'
import React from 'react'
import { UserType } from '../../types';

type TextFieldProps = {
    userForm?: UserType,
    idCard?: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    label:string
}

export default function TextFields({userForm, label, idCard, handleChange} : TextFieldProps) {

    const fieldName = label.trim().toLowerCase() as keyof typeof userForm;
    return (
        <>
            <TextField
                id={`outlined-adornment-${fieldName}`}
                label={label}
                variant="outlined"
                name={fieldName}
                value={(userForm && userForm[fieldName as keyof UserType]) || idCard}
                onChange={handleChange}
            />
        </>
    )
}
