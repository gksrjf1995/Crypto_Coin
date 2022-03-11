import {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cyptoHeaders =  {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'd6b818b3famsh6ed371ec2403e8fp14eb24jsn21d4fe21a150'
  }

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'


export const cryptoNewsAPI = createApi({
    reducerPath : "cryptoNewsAPI",
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints : (builder) => ({
        getcyptoNews : builder.query(
            { query : ({ newsCategory , count }) => ({
            url : `/news/search?q=${newsCategory}&freshness=Day&textFormat=Raw&safeSearch=Off&count=${count}`,
            headers : cyptoHeaders
            }),
    })
    })
});
// 


export const {useGetcyptoNewsQuery} = cryptoNewsAPI