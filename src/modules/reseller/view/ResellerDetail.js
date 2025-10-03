import { Button } from "primereact/button"
import { TabView, TabPanel } from 'primereact/tabview';
import { HeaderBar } from "../../../components/HeaderBar"
import { BackButton } from "../../../components/BackButton"
import { useNavigate, useParams } from "react-router-dom"
import { paths } from "../../../constants/path"
import { UpdateReseller } from "../entry/UpdateReseller";
import { useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";
import { resellerServices } from "../resellerServices";

export const ResellerDetail = () => {

    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();

    const init = useCallback( async () => {
        await resellerServices.show(dispatch, params.id);
    }, [dispatch, params]);

    useEffect(() => {
        init();
    }, [init]);

    return(
        <>
            <HeaderBar />

            <div className="w-full flex flex-row justify-content-between align-items-center mt-3 p-3">
                <BackButton />
                
                <div className="flex flex-row justify-content-start align-items-center">
                    <Button 
                        size="small"
                        label="Create Reseller Account"
                        icon="pi pi-plus-circle"
                        onClick={() => navigate(paths.RESELLER_CREATE)}
                    />
                </div>
            </div>

            <div className="w-full p-3">
                <TabView>
                    <TabPanel header="Reseller Account Information">
                        <UpdateReseller />
                    </TabPanel>
                </TabView>
            </div>
        </>
    )
}