import React, {useState, useEffect} from 'react';
import {Box, Container, Unstable_Grid2 as Grid} from '@mui/material';
import { Card, CardContent, Stack, Typography, Button,TextField } from '@mui/material';
import {getKeywordNews} from "../apis/news_apis";




const InsertNews = () => {
    const keywords = ['반도체', '영업이익', '상한가', '자동차']
    const [title, setTitle] = useState('')
    const [contents, setContents] = useState('')

    const clickKeyword = (keyword) => {
        getKeywordNews(keyword).then(res => {
            console.log(res)
            setTitle(res.title)
            setContents(res.content)
            }
        )
    }

    const KeywordCardComponent = ({keyword}) => {
        return(
            <Grid>
                <Card sx={{height: '100%', "&:hover":{cursor: 'pointer', backgroundColor:'#eee'}}}>
                    <CardContent>
                        <Stack alignItems="flex-start" direction="row" justifyContent="space-between" >
                            <Typography variant="h6"  value={keyword} onClick={()=>clickKeyword(keyword)}>{keyword}</Typography>
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>
        )
    }



    return (
        <div className='main_container'>
            <div className='input_container inner_container' >
                <Box component="main" sx={{flexGrow: 1, marginTop: '6rem'}}>
                    <Container maxWidth="xl">
                        <Grid container spacing={3}>
                            {keywords.map(( keyword, idx) => <KeywordCardComponent keyword={keyword}  idx={idx}/>)}
                        </Grid>
                    </Container>
                </Box>

                <div className="inputWrapper">
                    <TextField id="inputTitle" placeholder="뉴스 제목"
                               sx={{width: '100%', border: 'none', borderBottom: '1px solid #cecece', '& fieldset': {border: 'none'}, '& input': {padding: '0 0 24px 0'},}}
                               value={title}
                               disabled
                    />
                    <TextField id="inputContext" placeholder="뉴스 본문"
                               sx={{ width: '100%', border: 'none', '& fieldset': {border: 'none'}, '& div': {padding: '24px 0 0 0'}}}
                               multiline
                               rows={12}
                               value={contents}
                               disabled
                    />
                </div>
                <Button variant="contained" id='analysisBtn'>결과 분석하기</Button>
            </div>
        </div>
    );
};

export default InsertNews;