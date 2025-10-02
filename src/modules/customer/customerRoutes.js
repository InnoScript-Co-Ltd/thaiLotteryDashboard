import { paths } from "../../constants/path";
import { CustomerList } from "./view/CustomerList";

export const customerRoutes = [
    {
        path: paths.CUSTOMERLIST,
        element: <CustomerList />
    }
]