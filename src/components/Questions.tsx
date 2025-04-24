import {FC, useRef, useState} from 'react'
import { Quiz, setDoneQuiz,setUserAnswer,setUserPoints } from '../store/reducers/quiz'
import arrow from './../../public/logo/arrow.png'
import { useAppDispatch} from '../store/store'
import { useNavigate } from "react-router-dom";
import Button from './Button';

interface QuestionsProps{
    state:Quiz

}




const Questions:FC<QuestionsProps> = ({state}) => {

    const [review,setReview] = useState(false)
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const [numberOfQuestions,setNumberOfQuestions] = useState<number>(0)
    const [isFinished,setIsFinished] = useState<boolean>(false)
    let point = useRef(0);

    function passQuestions(num: number): void {
        dispatch(setUserAnswer({
            quizName: state.name,
            questionIndex: numberOfQuestions,
            userAnswer: num
        }));
        if (num === state.questions[numberOfQuestions].answer) {
            point.current += state.points/state.questions.length
        }
        if (numberOfQuestions === state.questions.length - 1) {
            dispatch(setUserPoints({
                quizName:state.name,
                points:point.current
            }))
            setIsFinished(true)
            dispatch(setDoneQuiz(state.name))   
        }
        setNumberOfQuestions(prev => prev + 1)
    }

    function setActualDataToHistory(){
        const actualData = {
            name  :state.name,
            imgURL:state.imgUrl,
            points:state.userPoints,
            date: new Date().toISOString().slice(0, 10),
            time:`${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`
        
        }
        if(localStorage.history){
            const newHistory = JSON.parse(localStorage.history)
            newHistory.push(actualData)
            localStorage.history = JSON.stringify(newHistory)
        }else{
            localStorage.history = JSON.stringify([actualData])
        }
        navigate('/')
    }

    function seeResultTest():void{
        setNumberOfQuestions(0)
        setIsFinished(false)
        setReview(true)
    }
    

    if (isFinished) {
        return (
          <div className='flex flex-col justify-center items-center w-[100%] pt-[36px]'>
            <div className='flex justify-center items-center '>
                <img className='w-[100px] h-[100px] mb-[43px] ' src={state.trophyUrl} alt="Trophy"/>
            </div>
            <h1 className='text-[19px] font-bold mb-[11px]'>Congratulations you have passed</h1>
            <h2 className='text-[16px] font-normal mb-[44px]'>You scored {point.current} points</h2>
            <div className='flex gap-[50px]'>
                <Button onClick={seeResultTest} w={'181px'} h={'66px'} blue={false}>
                    Review Quiz
                </Button>
                <Button onClick={setActualDataToHistory} w={'181px'} h={'66pz'} blue={false}>
                    Go Home
                </Button>
            </div>
          </div>
        )
      }
     
      
      if(review){
        return(
            <div className='flex flex-col w-[100%] pt-[36px]'>
                <div className='flex flex-row w-[100%] mb-[22px] items-center'>
                    <div   className="mr-[225px] hover:scale-110 transform transition-transform duration-300 rounded-[100px] bg-[#FBF9F9] w-[40px] h-[40px]  items-center flex justify-center">
                        <img onClick={()=>setNumberOfQuestions(numberOfQuestions-1)} className=' w-[6px] h-[11px] ' src={arrow} alt="" />
                    </div>  
                    <h1 className='text-center text-[22px]   line-[24px]'>Question {numberOfQuestions+1}</h1>
                </div>
                <h4 className='text-[16px] line-[24px] mb-[5px]'>{state.questions[numberOfQuestions].title}</h4>
                <div className='flex flex-col gap-[21px] justify-center items-center w-[100%] mb-[26px]'>
                {state.questions[numberOfQuestions].options.map((quiz, index) => {
                    const correctIndex = state.questions[numberOfQuestions].answer;
                    const userIndex = state.questions[numberOfQuestions].userAnswer;
                    const color = index === correctIndex ? 'border-[var(--GREEN)]' : userIndex !== -1 && index === userIndex && userIndex !== correctIndex ? 'border-[var(--RED)]' : 'border-[var(--BLUE)]';
                            return (
                                <h4
                                key={index}
                                className={`w-[610px] h-[80px] border-[1px] ${color} flex items-center transition-colors duration-300 justify-center rounded-[10px] text-center`}
                                >
                                {quiz}
                                </h4>
                            );
                            })}

                </div >
                {
                    numberOfQuestions === state.questions[numberOfQuestions].options.length-1 ? 
                    <button onClick={()=>navigate('/')} className='w-[181px] h-[66px] border-[1px] border-black flex items-center transition-colors duration-300 justify-center rounded-[10px] text-center hover:bg-[var(--BLUE)] hover:text-white'>
                        Go Home
                    </button> 
                        :
                    <button onClick={()=>setNumberOfQuestions(numberOfQuestions+1)} className="bg-[#1935CA] w-[181px] h-[64px] rounded-[10px] text-[white] hover:bg-white justify-end hover:text-[#1935CA] hover:border-[1px] hover:border-black transition-colors duration-300 active:shadow-2xl shadow-inner">
                        Next
                    </button>
                }
               
            </div>
        )
      }
  return (
    <div className='flex flex-col w-[100%] pt-[36px]'>
        <div className='flex flex-row w-[100%] mb-[22px] items-center'>
            <div   className="mr-[225px] hover:scale-110 transform transition-transform duration-300 rounded-[100px] bg-[#FBF9F9] w-[40px] h-[40px]  items-center flex justify-center">
                <img onClick={()=>setNumberOfQuestions(numberOfQuestions-1)} className=' w-[6px] h-[11px] ' src={arrow} alt="" />
            </div>  
            <h1 className='text-center text-[22px]   line-[24px]'>Question {numberOfQuestions+1}</h1>
        </div>
        
        <h4 className='text-[16px] line-[24px] mb-[5px]'>{state.questions[numberOfQuestions].title}</h4>
        <div className='flex flex-col gap-[21px] justify-center items-center w-[100%]'>
        {state.questions[numberOfQuestions].options.map((quiz,index)=>(
            <h4 onClick={()=>passQuestions(index)} className='w-[610px] h-[80px] border-[1px] border-black flex items-center transition-colors duration-300 justify-center rounded-[10px] text-center hover:bg-[var(--BLUE)] hover:text-white'>{quiz}</h4>
            ))}
        </div>
    </div>
  )
}

export default Questions
