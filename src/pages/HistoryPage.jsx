// import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const HistoryPage = () => {
    const events = [
        { name: 'Olimpics', payment: '$400' },
        { name: 'Matuu race', payment: '$876' },
        { name: 'Pool party', payment: '$980' },
        { name: 'Osica games', payment: '$230' },
        { name: 'Film Screenings', payment: '$120' },
        { name: 'Educational Events', payment: '$350' },
    ];

    return (
        <Box p={3}>
            <Typography variant="h4" gutterBottom>
                HISTORY
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography variant="h6">Previous Events</Typography>
                    {events.map((event, index) => (
                        <Paper key={index} style={{ padding: '10px', marginTop: '5px' }}>
                            {event.name}
                        </Paper>
                    ))}
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6">Previous Payments</Typography>
                    {events.map((event, index) => (
                        <Paper key={index} style={{ padding: '10px', marginTop: '5px' }}>
                            {event.payment}
                        </Paper>
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
};

export default HistoryPage;
