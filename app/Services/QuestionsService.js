import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js";
import { triviaApi } from "./AxiosService.js";

class QuestionsService {
    async getQuestion() {
        const res = await triviaApi.get();
        console.log(res.data.results)
        appState.question = res.data.results.map(q => new Question(q));
        console.log(appState.question)
    }

}

export const questionsService = new QuestionsService();