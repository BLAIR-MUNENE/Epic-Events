// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import HistoryPage from '../pages/HistoryPage';
import PersonalInfoPage from '../pages/PersonalInfoPage';
import { Box } from '@mui/material';

const ProfileDashboard = () => {
    return (
        <Box display="flex">
            <Sidebar />
            <Box flexGrow={1}>
                <Routes>
                    <Route path="/profile/personal-info" element={<PersonalInfoPage />} />
                    <Route path="/profile/history" element={<HistoryPage />} />
                </Routes>
            </Box>
        </Box>
    );
};

export default ProfileDashboard;
