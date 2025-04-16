import { useAppSelector } from "../store/store"
import Search from "./Search"
import { useNavigate } from "react-router-dom"
import { Quiz } from "../store/reducers/quiz"

const Dashboard = () => {
  const data = useAppSelector(state => state.quiz)
  const navigate = useNavigate();

  function navigateToQuizPage(quiz:Quiz){
    navigate(`/quiz/${quiz.name}`, { state: quiz });
  }


  return (
    <div className="flex flex-col w-[83.7%] gap-[24px] justify-between">
        <Search/>
        <div className="flex flex-row flex-wrap w-[100%] h-[100%] bg-white rounded-[10px] justify-around p-[20px]">
          {data.map((quiz,index)=>{
            return(
              <div
                  onClick={()=>navigateToQuizPage(quiz)} 
                  key={index} 
                  className="w-[400px] h-[350px] bg-center flex flex-col bg-cover transition-all duration-100  rounded-[10px] hover:border-[var(--BLUE)] hover:border-[5px] "
                  style={{backgroundImage:`url(${quiz.imgUrl})`}}>
                <div 
                  className="bg-[#EDEDED]  w-[60px] h-[30px] m-[20px] rounded-[10px] mb-[185px] flex justify-center ">
                  <p 
                    className="text-[var(--BLUE)] flex text-center   font-[12px]">
                      {quiz.questions.length} min</p>
                </div>
                <div 
                  className="bg-[#3C1186]/40 backdrop-blur-sm flex justify-center w-[80%] m-auto h-auto rounded-[10px]">
                  <p 
                    className="text-[16px] text-white">
                    {quiz.name}
                  </p>
                </div>
              </div>
            )
          })}
          
        </div>
    </div>
  )
}

export default Dashboard
