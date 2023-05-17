export class Question {
    constructor(data) {
        this.category = data.category
        this.type = data.type
        this.question = data.question
        this.correct_answer = data.correct_answer
        // NOTE we may want to use a method to get rid of ampersands and semicolons from our correct answer by passing the data.correct_answer into this method
        // this.correct_answer = this.cleanString(data.correct_answer)
        this.incorrect_answers = data.incorrect_answers
        this.choices = ([...data.incorrect_answers, data.correct_answer])
    }

    get QuestionTemplate() {
        if (this.type == 'boolean') {
            return `
        <section class="row">
        <div class="col-12 text-center">
          <p>${this.question}</p>
        </div>
      </section>
      <section class="row">
        <div class="col-12 text-center">
          <button onclick="app.questionsController.checkAnswer('${this.correct_answer}')" class="btn btn-primary">${this.correct_answer}</button>
          <button onclick="app.questionsController.checkAnswer('${this.incorrect_answers[0]}')" class="btn btn-primary">${this.incorrect_answers[0]}</button>
        </div>
      </section>`
        } else {
            return `
            <section class="row">
            <div class="col-12 text-center">
              <p>${this.question}</p>
            </div>
          </section>
          <section class="row">
            <div class="col-12 text-center">
              ${this.MultipleTemplate}
            </div>
          </section>`

        }
    }

    get MultipleTemplate() {
        let template = ''
        this.choices.sort(() => Math.random() - 0.5)
        this.choices.forEach(a => {
            template += `<button onclick="app.questionsController.checkAnswer('${a}')" class="btn btn-primary">${a}</button>`
        })

        return template
    }

    // cleanString(string) {
    // check the string for ampersand & and replace it with an empty space if necessary
    // }
}