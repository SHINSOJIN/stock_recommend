import axios from "axios"

const HOST = 'https://d9390710-b9c8-490b-8005-e11d0772b58c.mock.pstmn.io'



export async function getKeywordNews(keyword) {
    try {
        const res = await axios.get(`${HOST}/news?keyword=${keyword}`)
        console.log(res.data)
        return res.data
    } catch (err) {
        return null
    }

}

export async function getStockAnalysis() {
    try {
        const res = await axios.get(`${HOST}/stock/news?idx=1`)
        console.log(res.data)
        return res.data
    } catch (err) {
        return null
    }

}