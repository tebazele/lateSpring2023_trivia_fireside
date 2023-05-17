import { appState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawQuestion() {
    setHTML('trivia-container', appState.question[0].QuestionTemplate)
}

export class QuestionsController {
    constructor() {
        console.log('hello from question controller');
        this.getQuestion()
        appState.on('question', _drawQuestion)
    }

    async getQuestion() {
        try {
            await questionsService.getQuestion();
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }

    checkAnswer(answer) {
        if (answer == appState.question[0].correct_answer) {
            Pop.toast('CONGRATS!!!!!!')
        } else {
            Pop.error('Try again :( Youll do better next time')
        }
    }
}