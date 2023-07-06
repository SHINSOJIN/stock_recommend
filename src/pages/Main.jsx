import React from 'react';

import {Box, Container, Unstable_Grid2 as Grid} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Avatar, Card, CardContent, Stack, Typography } from '@mui/material';


const now = new Date();

const Main = () => {
    return (
        <div className='main_container'>
            <Box component="main" sx={{flexGrow: 1, py: 8}}>
                <Container maxWidth="xl">
                    <Grid container spacing={3}>
                        <Grid xs={12} sm={6} lg={3}>
                            <Card sx={{height: '100%'}}>
                                <CardContent>
                                    <Stack alignItems="flex-start" direction="row" justifyContent="space-between" spacing={3}>
                                        <Stack spacing={1}>
                                            <Typography color="text.secondary" variant="overline">Budget</Typography>
                                            <Typography variant="h4">$24k</Typography>
                                        </Stack>
                                        <Avatar sx={{backgroundColor: 'error.main', height: 56, width: 56}}>
                                            <AttachMoneyIcon />
                                        </Avatar>
                                    </Stack>
                                    {12 && (
                                        <Stack alignItems="center" direction="row" spacing={2} sx={{ mt: 2 }}>
                                            <Stack alignItems="center" direction="row" spacing={0.5}>
                                                <ArrowUpwardIcon />
                                              <Typography color='success.main' variant="body2">12%</Typography>
                                            </Stack>
                                            <Typography color="text.secondary" variant="caption">Since last month</Typography>
                                        </Stack>
                                    )}
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid xs={12} sm={6} lg={3}>
                            <Card sx={{height: '100%'}}>
                                <CardContent>
                                    <Stack alignItems="flex-start" direction="row" justifyContent="space-between" spacing={3}>
                                        <Stack spacing={1}>
                                            <Typography color="text.secondary" variant="overline">Budget</Typography>
                                            <Typography variant="h4">$24k</Typography>
                                        </Stack>
                                        <Avatar sx={{backgroundColor: 'error.main', height: 56, width: 56}}>
                                            <AttachMoneyIcon />
                                        </Avatar>
                                    </Stack>
                                    {12 && (
                                        <Stack alignItems="center" direction="row" spacing={2} sx={{ mt: 2 }}>
                                            <Stack alignItems="center" direction="row" spacing={0.5}>
                                                <ArrowUpwardIcon />
                                                <Typography color='success.main' variant="body2">12%</Typography>
                                            </Stack>
                                            <Typography color="text.secondary" variant="caption">Since last month</Typography>
                                        </Stack>
                                    )}
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid xs={12} sm={6} lg={3}>
                            <Card sx={{height: '100%'}}>
                                <CardContent>
                                    <Stack alignItems="flex-start" direction="row" justifyContent="space-between" spacing={3}>
                                        <Stack spacing={1}>
                                            <Typography color="text.secondary" variant="overline">Budget</Typography>
                                            <Typography variant="h4">$24k</Typography>
                                        </Stack>
                                        <Avatar sx={{backgroundColor: 'error.main', height: 56, width: 56}}>
                                            <AttachMoneyIcon />
                                        </Avatar>
                                    </Stack>
                                    {12 && (
                                        <Stack alignItems="center" direction="row" spacing={2} sx={{ mt: 2 }}>
                                            <Stack alignItems="center" direction="row" spacing={0.5}>
                                                <ArrowUpwardIcon />
                                                <Typography color='success.main' variant="body2">12%</Typography>
                                            </Stack>
                                            <Typography color="text.secondary" variant="caption">Since last month</Typography>
                                        </Stack>
                                    )}
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid xs={12} sm={6} lg={3}>
                            <Card sx={{height: '100%'}}>
                                <CardContent>
                                    <Stack alignItems="flex-start" direction="row" justifyContent="space-between" spacing={3}>
                                        <Stack spacing={1}>
                                            <Typography color="text.secondary" variant="overline">Budget</Typography>
                                            <Typography variant="h4">$24k</Typography>
                                        </Stack>
                                        <Avatar sx={{backgroundColor: 'error.main', height: 56, width: 56}}>
                                            <AttachMoneyIcon />
                                        </Avatar>
                                    </Stack>
                                    {12 && (
                                        <Stack alignItems="center" direction="row" spacing={2} sx={{ mt: 2 }}>
                                            <Stack alignItems="center" direction="row" spacing={0.5}>
                                                    <ArrowUpwardIcon />
                                                <Typography color='success.main' variant="body2">12%</Typography>
                                            </Stack>
                                            <Typography color="text.secondary" variant="caption">Since last month</Typography>
                                        </Stack>
                                    )}
                                </CardContent>
                            </Card>
                        </Grid>
                        {/*<Grid xs={12} lg={8}>*/}
                        {/*    <OverviewSales*/}
                        {/*        chartSeries={[*/}
                        {/*            {name: 'This year', data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20]},*/}
                        {/*            {name: 'Last year', data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13]}*/}
                        {/*        ]}*/}
                        {/*        sx={{height: '100%'}}*/}
                        {/*    />*/}
                        {/*</Grid>*/}
                        {/*<Grid xs={12} md={6} lg={4}>*/}
                        {/*    <OverviewTraffic chartSeries={[63, 15, 22]} labels={['Desktop', 'Tablet', 'Phone']} sx={{height: '100%'}}/>*/}
                        {/*</Grid>*/}

                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default Main;