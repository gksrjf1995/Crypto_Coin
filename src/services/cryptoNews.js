import { createApi  , fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const headers = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'd6b818b3famsh6ed371ec2403e8fp14eb24jsn21d4fe21a150'
  }

const fetchdata = (url) => ({
    headers , url
});

fetchdata()
export const coinNews = createApi({
    reducerPath : "coinNews",
    baseQuery : fetchBaseQuery({baseUrl : 'https://bing-news-search1.p.rapidapi.com/news/search'}),
    endpoints: (builder) => ({
        getCoinNews : builder.query({
            Headers : Headers ,
            query : ({count , sibal}) => fetchdata(`?q=${sibal}&freshness=Day&textFormat=Raw&safeSearch=Off&count=${count}`)
            // ({
            //     headers ,
            //     url  : `?q=appropriate&freshness=Day&textFormat=Raw&safeSearch=Off&count=${count}`
            // })
        })
    })
});

export const { useGetCoinNewsQuery } = coinNews




