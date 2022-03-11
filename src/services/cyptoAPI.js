import {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cyptoHeaders = {
   
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'd6b818b3famsh6ed371ec2403e8fp14eb24jsn21d4fe21a150'
            
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/'


const createRequest = (url) => ({ url, headers: cyptoHeaders });

export const cyptoAPI = createApi({
    reducerPath : "cyptoAPI",
    baseQuery : fetchBaseQuery({baseUrl }),
    endpoints : (builder) => ({ 
        getcypto : builder.query({ query : (count) => createRequest(`/coins?limit=${count}`)}),
    }),
});

export const { useGetcyptoQuery } = cyptoAPI

