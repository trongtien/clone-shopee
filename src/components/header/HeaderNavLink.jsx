import { NavLink } from 'react-router-dom';
import { PathRoot } from './../../utils'

export default function HeaderNavLink(){
    return (
        <nav className="container w-screen h-3 flex justify-between">
            <div className="flex items-center flex-start p-1 pl-0">
                <NavLink to={PathRoot.account_shop_login} className="text-white font-light text-sm font-serif p-1 cursor-pointer">Kênh người bán</NavLink>
                <NavLink to={PathRoot.account_shop_register} className="text-white font-light text-sm font-serif p-1 cursor-pointer">Trờ thành shopee clone</NavLink>
                {/* <NavLink to={"/user-shoppee-cart"} className="text-white font-light text-sm font-serif p-1 cursor-pointer">Kết nối</NavLink> */}
            </div>

            <div className="flex items-center flex-end p-1">
                {/* <NavLink to={""} className="text-white font-light text-sm font-serif p-1 cursor-pointer">Thông báo</NavLink> */}
                <NavLink to={PathRoot.portal} className="text-white font-light text-sm font-serif p-1 cursor-pointer">Hỗ trợ</NavLink>
                <NavLink to={PathRoot.account_register} className="text-white font-light text-sm font-serif p-1 cursor-pointer">Đắng ký</NavLink>
                <NavLink to={PathRoot.account_login} className="text-white font-light text-sm font-serif p-1 cursor-pointer">Đăng nhập</NavLink>
            </div>
        </nav>
    )
}