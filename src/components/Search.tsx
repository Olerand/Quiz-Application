import searchIcon from './../../public/logo/search.png'

const Search = () => {
  return (
       <div className="flex flex-row w-[100%] h-[64px] bg-white rounded-[10px]">
          <div className="pl-[27px] pt-[21px] pb-[18px] pr-[27px] w-[80%] flex flex-row content-center items-center">
            <img className='w-[25px] h-[25px] mr-[13px] ' src={searchIcon} alt="" />
            <input className='focus:outline-none w-auto'  type="text" placeholder="Search Quiz" />
          </div>
          <button className="bg-[#1935CA] w-[20%] h-[64px] rounded-[10px] text-[white] hover:bg-white hover:text-[#1935CA] 
          hover:border-[1px] hover:border-black transition-colors duration-300 active:shadow-2xl shadow-inner">
            Start Quiz
          </button>
        </div>
  )
}

export default Search
