const QuizBank = [
    {
        question: "What pace of music are you looking for",
        id: 0,
        answerMT: "Fairly Quick",
        idNextQuestion: 1,
        pointsMT: 1,
        answerPop: "Quick",
    
        pointsPop: 2,
        answerClassical: "Chill",

        pointsClassical: 3,
        answerDnB: "No",

        pointsDnB: 4,
    },

    {
        question: "If this is the answer, what is the question",
        id: 1,
        answerMT: "mt",
        idNextQuestion: 2,
        pointsMT: 1,
        answerPop: "pop",
    
        pointsPop: 2,
        answerClassical: "Yes",

        pointsClassical: 3,
        answerD: "No",

        pointsD: 4,
    },

    {
        question: "Do you want the music to tell a story?",
        id: 2,
        answerMT: "Yes so much so",
        idNextQuestion: 3,
        pointsMT: 1,
        answerPop: "Yeah a bit",
    
        pointsPop: 2,
        answerClassical: "Yes",

        pointsClassical: 3,
        answerD: "No",

        pointsD: 4,
    },

    {
        question: "Music should have lyrics.",
        id: 3,
        idNextQuestion: 4,

        answerMT: "Strongly agree",
        pointsMT: 1,

        answerPop: "Agree",
        pointsPop: 2,

        answerClassical: "Disagree",
        pointsClassical: 3,

        answerD: "Strongly disagree",
        pointsD: 4,
    },

    {
        question: "I like it when people break into song mid-sentence",
        id: 4,
        idNextQuestion: 5,

        answerMT: "Strongly agree",
        pointsMT: 1,

        answerPop: "Agree",
        pointsPop: 2,

        answerClassical: "Disagree",
        pointsClassical: 3,

        answerD: "Strongly disagree",
        pointsD: 4,
    },

    {
        question: "I want to dance to this music.",
        id: 5,
        idNextQuestion: 6,

        answerMT: "Strongly agree",
        pointsMT: 1,

        answerPop: "Agree",
        pointsPop: 2,

        answerClassical: "Disagree",
        pointsClassical: 3,

        answerD: "Strongly disagree",
        pointsD: 4,
    },

    // {
    //     question: "Classical music, yes or no?",
    //     id: 1,
    //     answerA: "Yes",
    //     idNextQuestionA: 2,
    //     answerB: "No",
    //     idNextQuestionB: 13
    // },
    // {
    //     question: "Rock music, yes or no?",
    //     id: 2,
    //     answerA: "Yes",
    //     idNextQuestionA: 3,
    //     answerB: "No",
    //     idNextQuestionB: 11
    // },
    // {
    //     question: "Musical theatre music, yes or no?",
    //     id: 3,
    //     answerA: "Yes",
    //     idNextQuestionA: 5,
    //     answerB: "No",
    //     idNextQuestionB: 4,
    // },
    // {
    //     question: "Drum and bass music, yes or no?",
    //     id: 4,
    //     answerA: "Yes",
    //     drinkResultA: 8,
    //     answerB: "No",
    //     drinkResultB: 1,
    // },
    // {
    //     question: "Electric music, yes or no?",
    //     id: 5,
    //     answerA: "Yes",
    //     drinkResultA: 2,
    //     answerB: "No",
    //     drinkResultB: 1
    // },
    // {
    //     question: "Movie music, yes or no?",
    //     id: 6,
    //     answerA: "Yes",
    //     drinkResultA: 3,
    //     answerB: "No",
    //     drinkResultB: 6
    // },
    // {
    //     question: "Cheesy hits, yes or no?",
    //     id: 7,
    //     answerA: "Yes",
    //     drinkResultA: 5,
    //     answerB: "No",
    //     drinkResultB: 6
    // },
    // {
    //     question: "Upbeat or Mellow?",
    //     id: 8,
    //     answerA: "Upbeat",
    //     idNextQuestionA: 6,
    //     answerB: "Mellow",
    //     idNextQuestionB: 7
    // },
    // {
    //     question: "An orderly appearance is important to me.",
    //     id: 9,
    //     answerA: "Agree",
    //     drinkResultA: 3,
    //     answerB: "Disagree",
    //     drinkResultB: 2
    // },
    // {
    //     question: "I tend to be...",
    //     id: 10,
    //     answerA: "decisive",
    //     drinkResultA: 2,
    //     answerB: "indecisive",
    //     drinkResultB: 9
    // },
    // {
    //     question: "In relationships, I am more often like...",
    //     id: 11,
    //     answerA: "an older sibling",
    //     idNextQuestionA: 9,
    //     answerB: "a younger sibling",
    //     idNextQuestionB: 10
    // },
    // {
    //     question: "I can spend a lot of time on social media.",
    //     id: 12,
    //     answerA: "Agree",
    //     drinkResultA: 3,
    //     answerB: "Disagree",
    //     drinkResultB: 5
    // },
    // {
    //     question: "I prefer to...",
    //     id: 13,
    //     answerA: "help people",
    //     idNextQuestionA: 11,
    //     answerB: "leave people to their own devices",
    //     idNextQuestionB: 8
    // },
    // {
    //     question: "I prefer...",
    //     id: 14,
    //     answerA: "familiar patterns",
    //     idNextQuestionA: 13,
    //     answerB: "new adventures",
    //     idNextQuestionB: 15
    // },
    // {
    //     question: "I am inclined to be...",
    //     id: 15,
    //     answerA: "envious or competitive",
    //     idNextQuestionA: 16,
    //     answerB: "well-wishing",
    //     idNextQuestionB: 17
    // },
    // {
    //     question: "I prefer to use my energy to sort out my...",
    //     id: 16,
    //     answerA: "tasks or plans",
    //     idNextQuestionA: 18,
    //     answerB: "thoughts or feelings",
    //     idNextQuestionB: 19
    // },
    // {
    //     question: "I prefer...",
    //     id: 17,
    //     answerA: "solo work",
    //     idNextQuestionA: 12,
    //     answerB: "social settings",
    //     idNextQuestionB: 20
    // },
    // {
    //     question: "I can spend a lot of time on social media.",
    //     id: 18,
    //     answerA: "Agree",
    //     drinkResultA: 3,
    //     answerB: "Disagree",
    //     drinkResultB: 5
    // },
    // {
    //     question: "I am more interested in exploring...",
    //     id: 19,
    //     answerA: "truth/reality",
    //     drinkResultA: 5,
    //     answerB: "love",
    //     drinkResultB: 4
    // },
    // {
    //     question: "I am more interested in...",
    //     id:20,
    //     answerA: "long term community",
    //     drinkResultA: 2,
    //     answerB: "independence or short term community",
    //     drinkResultB: 7
    // }
]

export default QuizBank;