import { NavLink } from 'react-router-dom';
import { PathRootSystem } from '~/utils';

export default function HeaderNavLink(){
    return (
        <nav className="container w-screen h-3 flex justify-between">
            <div className="flex items-center flex-start p-1 pl-0">
                <NavLink to={PathRootSystem.account_shop_login} className="text-white font-light text-sm font-serif p-1 cursor-pointer">Kênh người bán</NavLink>
                <NavLink to={PathRootSystem.account_shop_register} className="text-white font-light text-sm font-serif p-1 cursor-pointer">Trờ thành shopee clone</NavLink>
            </div>

            <div className="flex items-center flex-end p-1">
                <NavLink to={PathRootSystem.portal} className="text-white font-light text-sm font-serif p-1 cursor-pointer">Hỗ trợ</NavLink>
                <NavLink to={PathRootSystem.account_register} className="text-white font-light text-sm font-serif p-1 cursor-pointer">Đắng ký</NavLink>
                <NavLink to={PathRootSystem.account_login} className="text-white font-light text-sm font-serif p-1 cursor-pointer">Đăng nhập</NavLink>
            </div>
        </nav>
    )
}