
import { Outlet } from 'react-router-dom'
import Menu from './Menu'

const Layout = () => {
  return (
    <div className="flex">
      <Menu />
      <div className="flex-1 w-[83.7%]">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
