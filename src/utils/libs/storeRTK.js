import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PathRootCallApi } from '../constants/pathApi';


const RTKCreateApiBase = {
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: PathRootCallApi }),
}

export default RTKCreateApiBase;





