import { characterQuestions } from "./questions.js"

export class QuizApp {
    constructor(container, options = {}) {
        this.container = container;
        this.optionsLocked = false;
        
        // Option 1: Callback approach
        this.onCorrectAnswer = options.onCorrectAnswer || (() => {});
        
        // Option 2: Custom event name
        this.correctAnswerEventName = options.correctAnswerEventName || 'quizCorrectAnswer';
        
        this.init();
    }

    init() {
        this.render();
        this.displayQuestion();
        console.warn("quiz initialized !!!!");
    }

    shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    randomChoice(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    createQuestionContainer() {
        const container = document.createElement('div');
        container.className = 'quizcontainer';
        container.innerHTML = `
            <h2>Quiz. Answer correctly to get coins.</h2>
            <h3>Topic: <span id="topicName"></span></h3>
            <hr>
            <p id="questionText"></p>
            <div id="quizoptions"></div>
        `;
        return container;
    }

    render() {
        this.container.innerHTML = '';
        this.container.appendChild(this.createQuestionContainer());
    }

    handleCorrectAnswer() {
        // Option 1: Call the callback
        this.onCorrectAnswer();
        
        // Option 2: Dispatch custom event
        const event = new CustomEvent(this.correctAnswerEventName, {
            detail: {
                reward: 10, // You can pass any data you want
                timestamp: Date.now()
            }
        });
        document.dispatchEvent(event);
    }

    displayQuestion() {
        this.optionsLocked = false;
        const character = this.randomChoice(characterQuestions);
        const question = this.randomChoice(character.questions);
        
        document.getElementById('topicName').textContent = character.name;
        document.getElementById('questionText').textContent = question.question;
        
        const correctAnswer = question.answers[0];
        const shuffledAnswers = this.shuffleArray(question.answers);
        
        const optionsContainer = document.getElementById('quizoptions');
        optionsContainer.innerHTML = '';
        
        shuffledAnswers.forEach(answer => {
            const button = document.createElement('button');
            button.className = 'option';
            button.textContent = answer;
            
            button.addEventListener('click', () => {
                if (this.optionsLocked) return;
                this.optionsLocked = true;
                
                if (answer === correctAnswer) {
                    button.classList.add('correct');
                    this.handleCorrectAnswer(); // Call our new method
                } else {
                    button.classList.add('incorrect');
                    optionsContainer.querySelectorAll('.option').forEach(btn => {
                        if (btn.textContent === correctAnswer) {
                            btn.classList.add('correct');
                        }
                    });
                }
            });
            
            optionsContainer.appendChild(button);
        });
    }
}