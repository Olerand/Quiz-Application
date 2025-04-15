import { useAppSelector } from "../store/store"
import Search from "./Search"

const Dashboard = () => {
  const data = useAppSelector(state => state.quiz)
  console.log(data)
  return (
    <div className="flex flex-col w-[83.7%] gap-[24px] justify-between">
        <Search/>
        <div className="flex flex-row flex-wrap w-[100%] h-[100%] bg-white rounded-[10px] justify-around p-[20px]">
          {data.map((test,index)=>{
            return(
              <div key={index} 
                  className="w-[400px] h-[350px] bg-center flex flex-col bg-cover transition-all duration-100  rounded-[10px] hover:border-[var(--BLUE)] hover:border-[5px] "
                  style={{backgroundImage:`url(${test.imgUrl})`}}>
                <div 
                  className="bg-[#EDEDED]  w-[60px] h-[30px] m-[20px] rounded-[10px] mb-[185px] flex justify-center ">
                  <p 
                    className="text-[var(--BLUE)] flex text-center   font-[12px]">
                      {test.questions.length} min</p>
                </div>
                <div 
                  className="bg-[#3C1186]/40 backdrop-blur-sm flex justify-center w-[80%] m-auto h-auto rounded-[10px]">
                  <p 
                    className="text-[16px] text-white">
                    {test.name}
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
