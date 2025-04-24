import exitModal from './../../public/logo/exitMark.svg'
import {FC} from 'react'


interface ModalProps{
  children:React.ReactNode
  modal:boolean,
  setModal:(value:boolean)=>void
}


const Modal:FC<ModalProps> = ({children,setModal}) => {

  return (
    <div className='h-[100vh] w-[100vw] bg-black/50 fixed top-0 left-0 flex justify-center items-center'>
      <div className='rounded-[10px] w-[689px] h-[621px] bg-white flex  '>
        <div onClick={()=>setModal(false)}  className="hover:scale-110 transform transition-transform duration-300 rounded-[100px] bg-[#FBF9F9] w-[40px] h-[40px] relative bottom-5 left-[97%] items-center flex justify-center">
          <img className=' w-[10px] h-[10px] ' src={exitModal} alt="" />
        </div>  
        {children}
      </div>
    </div>
  )
}

export default Modal
