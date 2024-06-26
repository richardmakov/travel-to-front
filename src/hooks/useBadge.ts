import {  useEffect, useState } from "react";
import { BadgeInfo } from "../pages/Home/components/interface/badgeInterface";

const useBadge = () => {
    const [selectedBadge, setSelectedBadge] =  useState<BadgeInfo>(() => {
        const savedBadgeString = localStorage.getItem('selectedBadge');
        return savedBadgeString ? JSON.parse(savedBadgeString) : { name: 'Euro', symbol: 'EUR', image: '/euro.png' }
    });

    useEffect(() => {
        if (selectedBadge) {
            localStorage.setItem('selectedBadge', JSON.stringify(selectedBadge));
        } else {
            localStorage.removeItem('selectedBadge'); 
        }
    }, [selectedBadge]);

    const handleBadgeClick = (data: BadgeInfo) => {
        setSelectedBadge({...selectedBadge, ...data});
    };

    const badges: BadgeInfo[] = [
        { name: 'Euro', symbol: 'EUR', image: '/euro.png' },
        { name: 'Dollar', symbol: 'USD', image: 'https://cdn-icons-png.freepik.com/512/5206/5206272.png' },
    ];

    return {
        badges,
        handleBadgeClick,
        selectedBadge,
        setSelectedBadge
    };
};

export default useBadge;
