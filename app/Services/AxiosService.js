// @ts-ignore
export const triviaApi = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=1',
    timeout: 8000
})