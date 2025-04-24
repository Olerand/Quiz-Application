import { FC } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  w: string;
  h: string;
  onClick?: () => void;
  blue: boolean;
}

const Button: FC<ButtonProps> = ({ children, w, h, onClick, blue }) => {
  return (
    blue ? (
      <button
        onClick={onClick}
        style={{ width: w, height: h }} // Добавлено только это
        className={`bg-[#1935CA] w-[${w}] h-[${h}] rounded-[10px] text-[white] hover:bg-white hover:text-[#1935CA] hover:border-[1px] hover:border-black transition-colors duration-300 active:shadow-2xl shadow-inner`}
      >
        {children}
      </button>
    ) : (
      <button
        onClick={onClick}
        style={{ width: w, height: h }} // И это
        className={`w-[${w}] h-[${h}] border-[1px] border-black flex items-center transition-colors duration-300 justify-center rounded-[10px] text-center hover:bg-[var(--BLUE)] hover:text-white`}
      >
        {children}
      </button>
    )
  );
};

export default Button;