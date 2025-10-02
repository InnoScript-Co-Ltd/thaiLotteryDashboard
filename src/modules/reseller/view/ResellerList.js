import { Button } from "primereact/button"
import { HeaderBar } from "../../../components/HeaderBar"
import { useNavigate } from "react-router-dom"
import { paths } from "../../../constants/path";

export const ResellerList = () => {

    const navigate = useNavigate();

    return (
        <>
            <HeaderBar />

            <div className="w-full flex flex-row justify-content-between align-items-center mt-3 p-3">
                <div className="flex flex-row justify-content-start align-items-center">
                    <Button 
                        size="small"
                        label="Create Reseller Account"
                        icon="pi pi-plus-circle"
                        onClick={() => navigate(paths.RESELLER_CREATE)}
                    />
                </div>
                <div className="flex flex-row justify-content-start align-items-center">
                    <Button 
                        size="small"
                        label="Create Reseller Account"
                        icon="pi pi-plus-circle"
                        onClick={() => navigate(paths.RESELLER_CREATE)}
                    />
                </div>
            </div>
        </>
    )
}