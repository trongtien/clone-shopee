

export default function Product() {
    return (
        <div className="e-product-home bg-white max-w-sm flex flex-col">
            <img
                className=" e-product-home-image w-[11.6rem] h-[11.6rem] mx-auto"
                src="https://cf.shopee.vn/file/7b52e519b8956724ea2246532e3b5806_tn"
                alt="..."
            />
            <div className="e-product-home-detail flex flex-col items-start p-2">
                <div className="e-product-title w-full overflow-hidden text-ellipsis">
                    <h4 className="text-sm text-[rgba(0,0,0,.87)] overflow-hidden text-ellipsis w-full -webkit-box whitespace-normal">Áo Khoác Bomber NEW YORK - phong cách nam nữ WILL SHOP chất nỉ bông cotton</h4>
                </div>

                <div className="e-product-price flex text-lg">
                    <div className="e-product-price-discount pr-2 text-[rgba(0,0,0,.54)]  line-through">
                        <span className="text-sm">đ</span>
                        <span>200.00</span>
                    </div>
                    <div className="e-product-price-current text-[#ee4d2d]">
                        <span className="text-sm">đ</span>
                        <span>100.00</span>
                    </div>
                </div>

                <div className="e-product-total-raiting flex mt-2">
                    <div className="text-sm text-[rgba(0,0,0,.87)] overflow-hidden text-ellipsis w-full ">Đã bán 6,5k</div>
                </div>
                <div className="e-product-address text-sm text-[rgba(0,0,0,.65)] overflow-hidden text-ellipsis w-full mt-2"> TP Hồ Chí Minh </div>
            </div>
        </div>
    )
}