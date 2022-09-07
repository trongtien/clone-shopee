import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { PathRootCallApi } from '../constants/pathApi';


const RTKCreateApiBase = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: PathRootCallApi }),
    endpoints: builder => ({})
}) 

export default RTKCreateApiBase;





