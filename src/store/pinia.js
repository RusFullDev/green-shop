import{defineStore} from "pinia"

export const usePiniaStore = defineStore('pinia',{
    state(){
        return{
            count:10,
            name:'Pinia',
            quizzes:[
                {
                    id:1,
                    theme:'Tengsizliklar',
                    questions:[
                        {
                            id:1,
                            question:'2+2=?',
                            options:[
                                {
                                    id:1,
                                    text:1
                                },
                                {
                                    id:2,
                                    text:3
                                },   {
                                    id:3,
                                    text:2
                                },   {
                                    id:4,
                                    text:4
                                }
                            ],
                            answer:4,
                            selectAnswer:0
                        },
                        {
                            id:2,
                            question:'3+2=?',
                            options:[
                                {
                                    id:1,
                                    text:1
                                },
                                {
                                    id:2,
                                    text:3
                                },   {
                                    id:3,
                                    text:5
                                },   {
                                    id:4,
                                    text:4
                                }
                            ],
                            answer:4,
                            selectAnswer:0
                        }
                    ]
                }
            ]
        }
    },

    actions:{
        decrement(){
            this.count--
        }
    }
})