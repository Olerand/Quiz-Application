import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Modal from "./Modal";
import Questions from "./Questions";


const QuizPage = () => {
    const { state } = useLocation();
    const [modal,setModal] = useState<boolean>(false)

    useEffect(()=>{
        console.log(state)
    },[state])
    return (
    <div className="font-poppins  p-[22px] pt-0 w-[100%] h-[100%] flex flex-col bg-[#FBF9F9]">
        <h1 className="text-[#C4C4C4] font-[20px] mb-[34px]  ">Dashboard / {state.name}</h1>
        <div className="bg-white w-[100%] h-[98%] rounded-[10px] pl-[34px] pt-[26px]">
            <h1 className="text-[var(--BLUE)] font-poppins text-[25px] mb-[25px] ">{state.name}</h1>
            <div className="flex flex-row w-[100%] h-[94%]">
                <div className="flex flex-col w-[63%]" >
                    <img className="w-[100%] h-[420px] mb-[24px] rounded-[10px]" src={state.imgUrl} alt="Image of Test" />
                    <h2 className="text-[#181B1A] text-[24px] mb-[23px] ">{state.description}</h2>
                    <hr className="w-[100%] h-[1px] bg-[#F1F1EF] mb-[22px]" />
                    <p className="text-[#181B1A] text-[16px]">{state.text}</p>
                </div>
                <div className="w-[37%] flex flex-col pl-[41px] pt-[16px]">
                    <h1 className="relative mb-[37px]">
                        <span className="text-[#696F79] text-[20px]">Date:</span>
                        <span className="absolute left-[166px] text-[#696F79] text-[20px]">{state.date}</span>
                    </h1>
                    <h1 className="relative mb-[37px]">
                        <span className="text-[#696F79] text-[20px]">Pass Points:</span>
                        <span className="absolute left-[166px] text-[#696F79] text-[20px]">{state.points}</span>
                    </h1>
                    <h1 className="relative mb-[40px]">
                        <span className="text-[#696F79] text-[20px]">Done:</span>
                        <span className="absolute left-[166px] text-[#696F79] text-[20px]">{state.done ? 'Выполнено' : ' Не выполнено'}</span>
                    </h1>
                    <button onClick={()=>setModal(true)} className="w-[212px] h-[64px] bg-[var(--BLUE)] rounded-[10px] text-white  hover:bg-white hover:text-[#1935CA] 
          hover:border-[1px] hover:border-black transition-colors duration-300 active:shadow-2xl shadow-inner">Начать тест</button>
                </div>
                {
                    modal ? 
                    <Modal modal={modal} setModal = {setModal}>
                        <Questions state={state} setModal = {setModal} />
                    </Modal> 
                    : null
                }
            </div>
        </div>
    </div>
  )
}

export default QuizPage