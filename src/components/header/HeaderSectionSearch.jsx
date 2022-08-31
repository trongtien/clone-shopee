import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function HeaderSectionSeach(){
    return (
        <div className="w-full">
            <input className="w-full relative h-10" placeholder="Sản phẩm muốn tiềm kiếm"/>
            <button className="absolute right-16 bottom-10 bg-origin p-0.5 w-[5em] h-[2em] bg-gradient-to-b from-header to-header-linear">
                <FontAwesomeIcon icon={faSearch} size="1x" color='white'/>
            </button>
        </div>
    )
}