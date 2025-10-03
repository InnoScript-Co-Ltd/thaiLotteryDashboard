import { endpoints } from "../../constants/endpoints";
import { getRequest } from "../../utilities/api";
import { index } from "./resellerSlice";

export const resellerServices = {
    index: async (dispatch, params) => {
        const response = await getRequest(endpoints.reseller, params, dispatch);
        if(response.status === 200) {
            dispatch(index(response.data.data ? response.data.data : response.data));
        }
        return response;
    },

}