import { IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import { Visibility, VisibilityOff } from "@mui/icons-material";

import React, { useState } from 'react'

type PasswordFieldProps = {
    value: string,
    handlePassChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export default function PasswordField({ value, handlePassChange}: PasswordFieldProps) {
    value = value.trim().toLowerCase();
    const [showPassword, setShowPassword] = useState(false);
    
    const handleClickShowPassword = () => setShowPassword((show: boolean) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <>
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                name={value}
                type={showPassword ? 'text' : 'password'}
                value={value}
                onChange={handlePassChange}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                label="Password"
            />
        </>
    )
}
