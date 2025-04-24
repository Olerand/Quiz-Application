

type HistoryItem ={
  name: string,
  imgURL:string,
  points:number,
  date:string,
  time:string
}

const History = () => {
  const data: HistoryItem[] = JSON.parse(localStorage.history || '[]');

  if (data.length === 0) {
    return (
      <div className="w-full text-2xl text-center flex justify-center p-10">
        История пока пуста, но вы можете пополнить её, выполнив тесты!
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-white p-[34px]">
      <div className="scroll-container flex flex-row flex-wrap gap-[20px] justify-between overflow-y-auto h-[calc(100vh-100px)]">
        {data.map((item: HistoryItem, index: number) => (
          <div
            key={index}
            className="w-[450px] h-[350px] bg-center bg-cover flex flex-col transition-all duration-100 rounded-[10px] hover:border-[var(--BLUE)] hover:border-[5px] bg-[#EDEDED]"
            style={{ backgroundImage: `url(${item.imgURL})` }}
          >
            <div className="mt-auto space-y-2 px-4 pb-4">
              <div className="bg-[#3C1186]/40 backdrop-blur-sm flex justify-center items-center rounded-[10px] p-2">
                <p className="text-[16px] text-white text-center">{item.name} {' => '+ item.points}</p>
              </div>
              <div className="bg-[#3C1186]/40 backdrop-blur-sm flex justify-center items-center rounded-[10px] p-2">
                <p className="text-[16px] text-white text-center">
                  {item.date + ' ' + item.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
};
export default History