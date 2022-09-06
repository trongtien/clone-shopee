import { useLayoutEffect,  useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function HeaderSectionSeach({valueSeach, onClickSeach}){
    
    const [ value, setValueSearch ] = useState(valueSeach);

    useLayoutEffect(() => {
        if(value !== valueSeach) setValueSearch(valueSeach)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [valueSeach])

    const onHandleChangeSeachValue = (e) => {
        setValueSearch(e)
    }

    const onHanleClickSearch = () => onClickSeach(value)

    return (
        <div className="w-full relative">
            <input 
                className="w-full h-10 pr-24 pl-4" 
                placeholder="Sản phẩm muốn tiềm kiếm"
                value={value}
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


HeaderSectionSeach.propTypes = {
    valueSeach: PropTypes.string,
    onClickSeach: PropTypes.func
}

HeaderSectionSeach.defautProps = {
    valueSeach: "",
    onClickSeach: () => {}
}