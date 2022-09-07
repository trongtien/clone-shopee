

export default function CategorySlider() {
    return (
        <div id="category-carousel" className="category-carasel relative bg-white z-1" data-carousel="static">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96 ">
               <div className="home-category-carousel flex-col items-center w-[10%] p-1">
                    <img className="home-category-carousel-img w-[80%] h-[80%] flex-shrink-1" src="https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn" alt="..." />
                    <p className="text-sm text-text-secondary">Thời trang nam</p>
               </div>
            </div>
        </div>
    )
}