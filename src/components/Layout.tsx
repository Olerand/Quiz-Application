
import { Outlet } from 'react-router-dom'
import Menu from './Menu'

const Layout = () => {
  return (
    <div className="flex pl-[31px] pt-[33px] pr-[31px] h-[100vh] bg-[#FBF9F9]">
      <Menu />
      <Outlet />
    </div>
  )
}

export default Layout
