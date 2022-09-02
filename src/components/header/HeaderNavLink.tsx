
export default function HeaderNavLink(){
    return (
        <nav className="container w-screen h-3 flex justify-between">
            <div className="flex items-center flex-start p-1 pl-0">
                <p className="text-white font-light text-sm font-serif p-1 cursor-pointer">Kênh người bán</p>
                <p className="text-white font-light text-sm font-serif p-1 cursor-pointer">Trờ thành shopee clone</p>
                <p className="text-white font-light text-sm font-serif p-1 cursor-pointer">Tải ứng dụng</p>
                <p className="text-white font-light text-sm font-serif p-1 cursor-pointer">Kết nối</p>
            </div>

            <div className="flex items-center flex-end p-1">
                <p className="text-white font-light text-sm font-serif p-1 cursor-pointer">Thông báo</p>
                <p className="text-white font-light text-sm font-serif p-1 cursor-pointer">Hỗ trợ</p>
                <p className="text-white font-light text-sm font-serif p-1 cursor-pointer">Đắng ký</p>
                <p className="text-white font-light text-sm font-serif p-1 cursor-pointer">Đăng nhập</p>
            </div>
        </nav>
    )
}