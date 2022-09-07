import { PathRootSystem } from "../constants/path";


export const formatStringPathRoute = (path) => {
    if(path === PathRootSystem.home)
        return path.concat("*");
    else
        return path.concat("/*");
}