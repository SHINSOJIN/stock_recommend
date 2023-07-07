import React from 'react';
import {Box, Container, Unstable_Grid2 as Grid} from '@mui/material';
import { Card, CardContent, Stack, Typography } from '@mui/material';




const InsertNews = () => {
    return (
        <div className='main_container'>
            <Box component="main" sx={{flexGrow: 1, py: 8}}>
                <Container maxWidth="xl">
                    <Grid container spacing={3}>
                        <Grid>
                            <Card sx={{height: '100%'}}>
                                <CardContent>
                                    <Stack alignItems="flex-start" direction="row" justifyContent="space-between" spacing={3}>
                                        <Stack spacing={1}>
                                            <Typography color="text.secondary" variant="overline">KEYWORD 1</Typography>
                                            <Typography variant="h4">반도체</Typography>
                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid>
                            <Card sx={{height: '100%'}}>
                                <CardContent>
                                    <Stack alignItems="flex-start" direction="row" justifyContent="space-between" spacing={3}>
                                        <Stack spacing={1}>
                                            <Typography color="text.secondary" variant="overline">KEYWORD 2</Typography>
                                            <Typography variant="h4">영업이익</Typography>
                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid>
                            <Card sx={{height: '100%'}}>
                                <CardContent>
                                    <Stack alignItems="flex-start" direction="row" justifyContent="space-between" spacing={3}>
                                        <Stack spacing={1}>
                                            <Typography color="text.secondary" variant="overline">KEYWORD 3</Typography>
                                            <Typography variant="h4">상한가</Typography>
                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid>
                            <Card sx={{height: '100%'}}>
                                <CardContent>
                                    <Stack alignItems="flex-start" direction="row" justifyContent="space-between" >
                                        <Stack >
                                            <Typography color="text.secondary" variant="overline">KEYWORD 4</Typography>
                                            <Typography variant="h4">자동차</Typography>
                                        </Stack>

                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default InsertNews;