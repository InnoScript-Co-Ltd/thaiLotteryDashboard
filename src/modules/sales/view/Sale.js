import { HeaderBar } from "../../../components/HeaderBar"
import { Card } from "primereact/card"

export const Sale = () => {

    return(
        <>
            <HeaderBar />
            <div className="grid grid-nogutter">
                <div className="col-12 p-3">
                    <h2 className="m-0">Sales</h2>
                </div>
            </div>
        </>
    )
}