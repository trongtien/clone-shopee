import PropTypes from 'prop-types';


export default function HeaderLinkSearchCategorie({ onchangeSeach, dataSeach }){

    const onHandleClickchageSeach = (keyword) => onchangeSeach(keyword)

    return (
        <div className="flex items-center flex-end p-1 pt-2 pl-0">
            {
                dataSeach.map(
                    data => <p
                            key={data.id} 
                            className="text-white font-light text-sm font-serif pr-3 cursor-pointer"
                            onClick={() => onHandleClickchageSeach(data.name)}
                        >
                            {data.name}
                        </p>
                )
            }
        </div>
    )
}

HeaderLinkSearchCategorie.propTypes = {
    onchangeSeach: PropTypes.func,
    dataSeach: PropTypes.array
}

HeaderLinkSearchCategorie.defaultProps = {
    onchangeSeach: () => {},
    dataSeach: []

}