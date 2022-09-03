import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function HeaderSectionSeach(){
    const [ valueSearch, setValueSearch ] = useState("");

    const onHandleChangeSeachValue = (e) => {
        setValueSearch(e)
    }

    const onHanleClickSearch = () => {
        console.log("valueSearch onHanleClickSearch", valueSearch)
    }

    return (
        <div className="w-full relative">
            <input 
                className="w-full h-10 pr-24 pl-4" 
                placeholder="Sản phẩm muốn tiềm kiếm"
                value={valueSearch}
                onChange={e => onHandleChangeSeachValue(e.target.value)}
            />
            <button 
                className="absolute right-1 bottom-1 bg-origin p-0.5 w-[5em] h-[2em] bg-gradient-to-b from-header to-header-linear"
                onClick={onHanleClickSearch}
            >
                <FontAwesomeIcon icon={faSearch} size="1x" color='white'/>
            </button>
        </div>
    )
}
