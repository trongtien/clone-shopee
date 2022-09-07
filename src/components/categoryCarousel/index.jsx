import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function CategoryCarousel({ categoriData }) {

    return (
        <div
            id="category-carousel"
            className="category-carasel bg-white z-1 p-1"
            data-carousel="static"
        >
            <div className="overflow-hidden rounded-lg h-auto flex ">
                {
                    categoriData.map(data => {
                        return (
                            <Link
                                to={data.path}
                                className="home-category-carousel flex-col items-center w-[10%] h-[100%] p-1 cursor-pointer"
                                key={data.id}
                            >
                                <LazyLoadImage
                                    className="home-category-carousel-img w-[80%] h-[80%] flex-shrink-1 bg-no-repeat bg-contain"
                                    src={data.image_reasize}
                                    alt={data.name}
                                    effect="opacity"
                                />
                                <p className="text-sm text-text-secondary">
                                    {data.name}
                                </p>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

CategoryCarousel.propTypes = {
    categoriData: PropTypes.array
}

CategoryCarousel.defaultProps = {
    categoriData: []
}