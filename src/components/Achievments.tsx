
import { useAppSelector } from "../store/store";

const Achievments = () => {
  const data = useAppSelector((state) => state.quiz);
  return (
    <div className="flex flex-row flex-wrap w-[100% ] overflow-y-auto max-h-[95vh] bg-white p-[34px] justify-between ">
      {data.map((quiz, index) => 
      quiz.done ? 
      (
        <div
          key={index}
          className="w-[450px] mb-[20px] h-[350px] bg-center bg-cover flex flex-col transition-all duration-100 rounded-[10px] hover:border-[var(--BLUE)] hover:border-[5px] bg-[#EDEDED]"
          style={{ backgroundImage: `url(${quiz.trophyUrl})` }}
        >
          <div className="mt-auto space-y-2 px-4 pb-4">
            <div className="bg-[#3C1186]/40 backdrop-blur-sm flex justify-center items-center rounded-[10px] p-2">
              <p className="text-[16px] text-white text-center">{quiz.name}</p>
            </div>
            <div className="bg-[#3C1186]/40 backdrop-blur-sm flex justify-center items-center rounded-[10px] p-2">
              <p className="text-[16px] text-white text-center">
                {quiz.userPoints}/{quiz.points}
              </p>
            </div>
          </div>
        </div>
      )
      :
      (
        <div
          key={index}
          className="w-[450px] mb-[20px] overflow-y-auto scroll-container h-[350px] bg-center bg-cover flex flex-col  transition-all duration-100 rounded-[10px] hover:border-[var(--BLUE)] hover:border-[5px] bg-[#EDEDED]  "
          style={{backgroundImage:'url(https://files.svgcdn.io/tabler/error-404.svg)'}}
        >
          <div className="mt-auto space-y-2 px-4 pb-4">
            <div className="bg-[#3C1186]/40 backdrop-blur-sm flex justify-center items-center rounded-[10px] p-2">
              <p className="text-[16px] text-white text-center">{quiz.name}</p>
            </div>
            <div className="bg-[#3C1186]/40 backdrop-blur-sm flex justify-center items-center rounded-[10px] p-2">
              <p className="text-[16px] text-white text-center">
                Quiz dont completed
              </p>
            </div>
          </div>
        </div>
      )
    )}
    </div>
  );
};

export default Achievments;
