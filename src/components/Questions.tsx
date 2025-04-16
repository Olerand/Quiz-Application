import {FC, useState} from 'react'
import { Quiz } from '../store/reducers/quiz'
import arrow from './../../public/logo/arrow.png'
import { useAppDispatch } from '../store/store'


interface QuestionsProps{
    state:Quiz
    setModal:(value:boolean) => void,
}



const Questions:FC<QuestionsProps> = ({state,setModal}) => {
    console.log(state)
    const dispatch = useAppDispatch()
    const [numberOfQuestions,setNumberOfQuestions] = useState<number>(0)
    const [isFinished,setIsFinished] = useState<boolean>(false)

    function passQuestions(num: number): void {
        if (num === state.questions[numberOfQuestions].answer) {
            console.log('You take ' + 100)
        }
    
        if (numberOfQuestions === state.questions.length - 1) {
            setIsFinished(true)
            return
        }
    
        setNumberOfQuestions(prev => prev + 1)
    }
    
    if (isFinished) {
        return (
          <div>
            END
          </div>
        )
      }
      
  return (
    <div className='flex flex-col w-[100%] pt-[36px]'>
        <div className='flex flex-row w-[100%] mb-[22px] items-center'>
            <div   className="mr-[225px] hover:scale-110 transform transition-transform duration-300 rounded-[100px] bg-[#FBF9F9] w-[40px] h-[40px]  items-center flex justify-center">
                <img className=' w-[6px] h-[11px] ' src={arrow} alt="" />
            </div>  
            <h1 className='text-center text-[22px]   line-[24px]'>Question {numberOfQuestions+1}</h1>
        </div>
        
        <h4 className='text-[16px] line-[24px] mb-[5px]'>{state.questions[numberOfQuestions].title}</h4>
        <div className='flex flex-col gap-[21px] justify-center items-center w-[100%]'>
            <h4 onClick={()=>passQuestions(0)} className='w-[610px] h-[80px] border-[1px] border-black flex items-center transition-colors duration-300 justify-center rounded-[10px] text-center hover:bg-[var(--BLUE)] hover:text-white'>{state.questions[numberOfQuestions].options[0]}</h4>
            <h4 onClick={()=>passQuestions(1)} className='w-[610px] h-[80px] border-[1px] border-black flex items-center transition-colors duration-300 justify-center rounded-[10px] text-center hover:bg-[var(--BLUE)] hover:text-white'>{state.questions[numberOfQuestions].options[1]}</h4>
            <h4 onClick={()=>passQuestions(2)} className='w-[610px] h-[80px] border-[1px] border-black flex items-center transition-colors duration-300 justify-center rounded-[10px] text-center hover:bg-[var(--BLUE)] hover:text-white '>{state.questions[numberOfQuestions].options[2]}</h4>
            <h4 onClick={()=>passQuestions(3)} className='w-[610px] h-[80px] border-[1px] border-black flex items-center transition-colors duration-300 justify-center rounded-[10px] text-center hover:bg-[var(--BLUE)] hover:text-white'>{state.questions[numberOfQuestions].options[3]}</h4>
        </div>
    </div>
  )
}

export default Questions
