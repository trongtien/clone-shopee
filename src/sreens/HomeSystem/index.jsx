import CategoryCarousel from "~/components/categoryCarousel";
import ProductList from "~/widets/ProductList";
import { useGetCategoryQuery } from "../../features/category-system-key-search/categorySystemKeySearchService";


const fakeProductListData = [
    {
        id: 1,
        image: "https://cf.shopee.vn/file/7b52e519b8956724ea2246532e3b5806_tn",
        name: "Áo Khoác Bomber NEW YORK - phong cách nam nữ WILL SHOP chất nỉ bông cotton",
        price: 200000,
        price_discount: 100000,
        is_discount: 1,
        sold: "6.5k",
        address: "TP Hồ Chí Minh"
    },
    {
        id: 2,
        image: "https://cf.shopee.vn/file/7b52e519b8956724ea2246532e3b5806_tn",
        name: "Áo Khoác Bomber NEW YORK - phong cách nam nữ WILL SHOP chất nỉ bông cotton",
        price: 200000,
        price_discount: 100000,
        is_discount: 1,
        sold: "6.5k",
        address: "TP Hồ Chí Minh"
    },
    {
        id: 3,
        image: "https://cf.shopee.vn/file/7b52e519b8956724ea2246532e3b5806_tn",
        name: "Áo Khoác Bomber NEW YORK - phong cách nam nữ WILL SHOP chất nỉ bông cotton",
        price: 200000,
        price_discount: 100000,
        is_discount: 1,
        sold: "6.5k",
        address: "TP Hồ Chí Minh"
    },
    {
        id: 4,
        image: "https://cf.shopee.vn/file/7b52e519b8956724ea2246532e3b5806_tn",
        name: "Áo Khoác Bomber NEW YORK - phong cách nam nữ WILL SHOP chất nỉ bông cotton",
        price: 200000,
        price_discount: 100000,
        is_discount: 1,
        sold: "6.5k",
        address: "TP Hồ Chí Minh"
    },
    {
        id: 5,
        image: "https://cf.shopee.vn/file/7b52e519b8956724ea2246532e3b5806_tn",
        name: "Áo Khoác Bomber NEW YORK - phong cách nam nữ WILL SHOP chất nỉ bông cotton",
        price: 200000,
        price_discount: 100000,
        is_discount: 1,
        sold: "6.5k",
        address: "TP Hồ Chí Minh"
    },
    {
        id: 6,
        image: "https://cf.shopee.vn/file/7b52e519b8956724ea2246532e3b5806_tn",
        name: "Áo Khoác Bomber NEW YORK - phong cách nam nữ WILL SHOP chất nỉ bông cotton",
        price: 200000,
        price_discount: 100000,
        is_discount: 1,
        sold: "6.5k",
        address: "TP Hồ Chí Minh"
    },
    {
        id: 7,
        image: "https://cf.shopee.vn/file/7b52e519b8956724ea2246532e3b5806_tn",
        name: "Áo Khoác Bomber NEW YORK - phong cách nam nữ WILL SHOP chất nỉ bông cotton",
        price: 200000,
        price_discount: 100000,
        is_discount: 1,
        sold: "6.5k",
        address: "TP Hồ Chí Minh"
    },
    {
        id: 8,
        image: "https://cf.shopee.vn/file/7b52e519b8956724ea2246532e3b5806_tn",
        name: "Áo Khoác Bomber NEW YORK - phong cách nam nữ WILL SHOP chất nỉ bông cotton",
        price: 200000,
        price_discount: 100000,
        is_discount: 1,
        sold: "6.5k",
        address: "TP Hồ Chí Minh"
    },
    {
        id: 9,
        image: "https://cf.shopee.vn/file/7b52e519b8956724ea2246532e3b5806_tn",
        name: "Áo Khoác Bomber NEW YORK - phong cách nam nữ WILL SHOP chất nỉ bông cotton",
        price: 200000,
        price_discount: 100000,
        is_discount: 1,
        sold: "6.5k",
        address: "TP Hồ Chí Minh"
    },
    {
        id: 10,
        image: "https://cf.shopee.vn/file/7b52e519b8956724ea2246532e3b5806_tn",
        name: "Áo Khoác Bomber NEW YORK - phong cách nam nữ WILL SHOP chất nỉ bông cotton",
        price: 200000,
        price_discount: 100000,
        is_discount: 1,
        sold: "6.5k",
        address: "TP Hồ Chí Minh"
    },
    {
        id: 12,
        image: "https://cf.shopee.vn/file/7b52e519b8956724ea2246532e3b5806_tn",
        name: "Áo Khoác Bomber NEW YORK - phong cách nam nữ WILL SHOP chất nỉ bông cotton",
        price: 200000,
        price_discount: 100000,
        is_discount: 1,
        sold: "6.5k",
        address: "TP Hồ Chí Minh"
    },
    {
        id: 13,
        image: "https://cf.shopee.vn/file/7b52e519b8956724ea2246532e3b5806_tn",
        name: "Áo Khoác Bomber NEW YORK - phong cách nam nữ WILL SHOP chất nỉ bông cotton",
        price: 200000,
        price_discount: 100000,
        is_discount: 1,
        sold: "6.5k",
        address: "TP Hồ Chí Minh"
    },
    {
        id: 14,
        image: "https://cf.shopee.vn/file/7b52e519b8956724ea2246532e3b5806_tn",
        name: "Áo Khoác Bomber NEW YORK - phong cách nam nữ WILL SHOP chất nỉ bông cotton",
        price: 200000,
        price_discount: 100000,
        is_discount: 1,
        sold: "6.5k",
        address: "TP Hồ Chí Minh"
    },
    {
        id: 15,
        image: "https://cf.shopee.vn/file/7b52e519b8956724ea2246532e3b5806_tn",
        name: "Áo Khoác Bomber NEW YORK - phong cách nam nữ WILL SHOP chất nỉ bông cotton",
        price: 200000,
        price_discount: 100000,
        is_discount: 1,
        sold: "6.5k",
        address: "TP Hồ Chí Minh"
    },
    {
        id: 16,
        image: "https://cf.shopee.vn/file/7b52e519b8956724ea2246532e3b5806_tn",
        name: "Áo Khoác Bomber NEW YORK - phong cách nam nữ WILL SHOP chất nỉ bông cotton",
        price: 200000,
        price_discount: 100000,
        is_discount: 1,
        sold: "6.5k",
        address: "TP Hồ Chí Minh"
    },
    {
        id: 17,
        image: "https://cf.shopee.vn/file/7b52e519b8956724ea2246532e3b5806_tn",
        name: "Áo Khoác Bomber NEW YORK - phong cách nam nữ WILL SHOP chất nỉ bông cotton",
        price: 200000,
        price_discount: 100000,
        is_discount: 1,
        sold: "6.5k",
        address: "TP Hồ Chí Minh"
    },
    {
        id: 18,
        image: "https://cf.shopee.vn/file/7b52e519b8956724ea2246532e3b5806_tn",
        name: "Áo Khoác Bomber NEW YORK - phong cách nam nữ WILL SHOP chất nỉ bông cotton",
        price: 200000,
        price_discount: 100000,
        is_discount: 1,
        sold: "6.5k",
        address: "TP Hồ Chí Minh"
    },
    {
        id: 19,
        image: "https://cf.shopee.vn/file/7b52e519b8956724ea2246532e3b5806_tn",
        name: "Áo Khoác Bomber NEW YORK - phong cách nam nữ WILL SHOP chất nỉ bông cotton",
        price: 200000,
        price_discount: 100000,
        is_discount: 1,
        sold: "6.5k",
        address: "TP Hồ Chí Minh"
    },
    {
        id: 20,
        image: "https://cf.shopee.vn/file/7b52e519b8956724ea2246532e3b5806_tn",
        name: "Áo Khoác Bomber NEW YORK - phong cách nam nữ WILL SHOP chất nỉ bông cotton",
        price: 200000,
        price_discount: 100000,
        is_discount: 1,
        sold: "6.5k",
        address: "TP Hồ Chí Minh"
    }
]

export default function HomeSystem(){

    const { data: Categories } = useGetCategoryQuery();

    return (
        <div className="home-sreen w-full px-16 z-1">
            <CategoryCarousel 
                categoriData={Categories}
            />
           
            <ProductList
                products={fakeProductListData}
            />
        </div>
    )
}