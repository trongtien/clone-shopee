import { memo, useCallback } from 'react';
import { createSearchParams, useNavigate, useSearchParams  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import HeaderNavLink from "./HeaderNavLink";
import HeaderSectionSeach from "./HeaderSectionSearch";
import HeaderLinkSearchCategorie from './HeaderLinkCategorie';
import { PathRoot } from '../../utils';
import { useGetCategorySystemKeySeachQuery } from '../../features/category-system-key-search/categorySystemKeySearchService';

const UmemoizedHeaderLinkSeachCategories = memo(HeaderLinkSearchCategorie);
const UmemoizedHeaderSectionSeach = memo(HeaderSectionSeach);

const LogoHeader = "https://cdn.haitrieu.com/wp-content/uploads/2022/05/Logo-ShopeeXpress-H-Orange.png";

export default function Header(){
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const searchParamsCurrent = searchParams.get('keyword') === null ? "" : searchParams.get('keyword');
    
    const {
        data: CategoryKeySeachs,
        // isLoading,
        // isSuccess,
        // isError,
        // error
    } = useGetCategorySystemKeySeachQuery();

    const onHandleChangeSeach = useCallback((keyword) => {
        if(keyword !== searchParamsCurrent) {
            navigate({
                pathname: PathRoot.search,
                search: createSearchParams({
                    keyword: keyword
                }).toString()
            });
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <header className="pl-6 pr-6 pt-2 pb-2 fixed top-0 left-0 right-0 z-100 bg-gradient-to-b from-header to-header-linear">
            <HeaderNavLink />

            <div className="flex header-seach justify-between items-center pt-4 pl-1 pr-1">
                <p className="">
                    <LazyLoadImage 
                        src={LogoHeader} 
                        accessKey='' 
                        alt='bg-log-img' 
                        className='logo-image w-[11em] h-[3em]' 
                        effect="black-and-white"
                    />
                </p>
                <div className="header-search-section p w-[70%]">
                    <UmemoizedHeaderSectionSeach  
                        valueSeach={searchParamsCurrent}
                        onClickSeach={onHandleChangeSeach}
                    />
                    <UmemoizedHeaderLinkSeachCategories 
                        dataSeach={CategoryKeySeachs}
                        onchangeSeach={onHandleChangeSeach}
                    />
                </div>
                <div className="header-search-cart flex align-center items-center w-32">
                    <FontAwesomeIcon icon={faCartShopping} size="2x" color='white'/>
                </div>
            </div>
        </header>
    )
}