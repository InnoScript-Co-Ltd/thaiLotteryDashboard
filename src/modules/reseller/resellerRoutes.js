import { paths } from "../../constants/path";
import { CreateReseller } from "./entry/CreateReseller";
import { ResellerList } from "./view/ResellerList";

export const resellerRoutes = [
    {
        path: paths.RESELLER_LIST,
        element: <ResellerList />
    }, 
    {
        path: paths.RESELLER_CREATE,
        element: <CreateReseller />
    }
]