import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IAnswer } from "../models/IAnswer";
import { IImage } from "../models/IImage";

export const dataAPI = createApi({
    reducerPath: "starhipDataAPI",
    tagTypes: ["Data"],
    baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api" }),
    endpoints: (build) => ({
        fetchAllData: build.query<IAnswer, number[]>({
            query: (limitPage: number[] = [9, 1]) => ({
                url: "/starships",
                params: {
                    limit: limitPage[0],
                    page: limitPage[1],
                },
            }),
            providesTags: (result) => ["Data"],
        }),
        fetchSingleData: build.query<IImage, string | undefined>({
            query: (id: string ) => ({
                url: `/starships/${id}`,
            }),
            providesTags: (result) => ["Data"],
        }),
    }),
});
