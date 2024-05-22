import React from 'react';
import { Typography, Avatar, Box } from '@mui/material';

interface BadgeProps {
    badge: {
        name: string;
        symbol: string;
        image: string;
    };
    onClick: () => void;
    selected: boolean;
}

const Badge: React.FC<BadgeProps> = ({ badge, onClick }) => {
    const { name, symbol, image } = badge;

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginRight:4}} onClick={onClick}>
            <Avatar alt={name} src={image} sx={{ width: 40, height: 40, marginRight: 1 }} />
            <Typography variant="subtitle1">{name}</Typography>
            <Typography variant="subtitle2" sx={{ marginLeft: 1, color: 'grey' }}>{symbol}</Typography>
        </Box>
    );
}

export default Badge;
