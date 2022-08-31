import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import HeaderNavLink from "./HeaderNavLink";
import HeaderSectionSeach from "./HeaderSectionSearch";

export default function Header(){
    return (
        <header className="pl-6 pr-6 pt-2 pb-2 fixed top-0 left-0 right-0 z-100 bg-gradient-to-b from-header to-header-linear ">
            <HeaderNavLink />

            <div className="flex header-seach justify-between pt-4">
                <p className="">sadsa</p>
                <div className="header-search-section w-full p">
                    <HeaderSectionSeach />
                    <div>
                        <div className="flex items-center flex-end p-1 pl-0">
                            <p className="text-white font-light text-sm font-serif pr-3">Dép</p>
                            <p className="text-white font-light text-sm font-serif pr-3">Áo khoác</p>
                            <p className="text-white font-light text-sm font-serif pr-3">Áo phông</p>
                            <p className="text-white font-light text-sm font-serif pr-3">Dép nữ</p>
                        </div>
                    </div>
                </div>
                <div className="header-search-cart flex align-center items-center">
                    <FontAwesomeIcon icon={faCartShopping} size="2x" color='white'/>
                </div>
            </div>
        </header>
    )
}