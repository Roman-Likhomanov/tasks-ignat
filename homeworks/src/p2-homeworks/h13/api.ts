import axios, { AxiosResponse } from 'axios'

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test',
})


export const RequestsAPI = {
    createRequest(data: {success: boolean}) {
        return instance.post<{success: boolean}, AxiosResponse<ResponseType>>('',data);
    }

}


export type ResponseType = {
    errorText: string
    info: string
    yourBody: {success: boolean},
    yourQuery: {}
}









