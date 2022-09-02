import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import HeaderNavLink from "./HeaderNavLink";
import HeaderSectionSeach from "./HeaderSectionSearch";
import HeaderLinkCategorie from './HeaderLinkCategorie';

export default function Header(){
    return (
        <header className="pl-6 pr-6 pt-2 pb-2 fixed top-0 left-0 right-0 z-100 bg-gradient-to-b from-header to-header-linear">
            <HeaderNavLink />

            <div className="flex header-seach justify-between items-center pt-4 pl-1 pr-1">
                <p className="">sadsa</p>
                <div className="header-search-section p w-[70%]">
                    <HeaderSectionSeach  />
                    <HeaderLinkCategorie />
                </div>
                <div className="header-search-cart flex align-center items-center">
                    <FontAwesomeIcon icon={faCartShopping} size="2x" color='white'/>
                </div>
            </div>
        </header>
    )
}