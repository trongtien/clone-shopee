import CategoryCarousel from "~/components/categoryCarousel";
import ProductList from "~/widets/ProductList";
import { useGetCategoryQuery } from "../../features/category-system-key-search/categorySystemKeySearchService";


export default function HomeSystem(){

    const { data: Categories } = useGetCategoryQuery();

    return (
        <div className="home-sreen w-full px-16 z-1">
            <CategoryCarousel 
                categoriData={Categories}
            />

            <ProductList

            />
        </div>
    )
}