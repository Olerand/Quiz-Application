import { FC, useState } from 'react';
import searchIcon from './../../public/logo/search.png';
import Button from './Button';
interface SearchProps {
  onSearch: (value: string) => void;
}

const Search: FC<SearchProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearchClick = () => {
    onSearch(inputValue);
  };

  return (
    <div className="flex flex-row w-[100%] h-[64px] bg-white rounded-[10px]">
      <div className="pl-[27px] pt-[21px] pb-[18px] pr-[27px] w-[80%] flex flex-row content-center items-center">
        <img className='w-[25px] h-[25px] mr-[13px]' src={searchIcon} alt="" />
        <input
          className='focus:outline-none w-[100%]'
          type="text"
          placeholder="Search Quiz"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
     <Button onClick={handleSearchClick} w='20%' h={'68px'} blue={true}>
       Search Quiz
     </Button>
      
    </div>
  );
};

export default Search;
