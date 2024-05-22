import { useEffect, useState } from 'react';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Box, Button, Modal } from '@mui/material';
import Badge from './Badge';
import { BadgeInfo } from '../pages/Home/components/interface/badgeInterface';
import useFlightSearchForm from '../pages/Home/components/hooks/useSearchFlightsForm';

interface ChooseBadgeProps {
    badges: BadgeInfo[];
    handleBadgeClick: (badge: BadgeInfo) => void;
    selectedBadge: BadgeInfo;
    setSelectedBadge: (badge: BadgeInfo) => void;
}

export default function ChooseBadge({ badges, handleBadgeClick, selectedBadge }: ChooseBadgeProps) {
    const [open, setOpen] = useState(false);
    const { setFormValues } = useFlightSearchForm();

    useEffect(() => {
        if (selectedBadge) {
            setFormValues(prevFormValues => ({
                ...prevFormValues,
                currencyCode: selectedBadge.symbol
            }));
        }
    }, [selectedBadge, setFormValues]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleBadgeSelect = (badge: BadgeInfo) => {
        handleBadgeClick(badge);
        setOpen(false);
        window.location.reload();

    };

    return (
        <>
            <Button
                onClick={handleOpen}
                sx={{
                    color: '#000',
                    mr: "1rem",
                    '&:hover': {
                        backgroundColor: 'transparent',
                    }
                }}
                startIcon={selectedBadge ? <img src={selectedBadge.image} alt={selectedBadge.name} style={{ width: 20, height: 20, marginRight: 5 }} /> : <MonetizationOnIcon />}
                disableRipple
            >
                {selectedBadge ? selectedBadge.name : "Select a Badge"}
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 3,
                    }}
                >
                    <div>
                        <h2 id="modal-modal-title">Currency</h2>
                        <div id="modal-modal-description" style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {badges.map((badge, index) => (
                                <Badge
                                    key={index}
                                    badge={badge}
                                    onClick={() => handleBadgeSelect(badge)}
                                    selected={selectedBadge === badge}
                                />
                            ))}
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    );
}

