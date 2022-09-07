import CategoryCarousel from "../../components/categoryCarousel";
import { useGetCategoryQuery } from "../../features/category-system-key-search/categorySystemKeySearchService";


export default function HomeSystem(){

    const { data: Categories } = useGetCategoryQuery();

    return (
        <div className="home-sreen w-full px-16 z-1">
            <CategoryCarousel 
                categoriData={Categories}
            />
        </div>
    )
}