import { Card } from "primereact/card"
import { HeaderBar } from "../../../components/HeaderBar"

export const CustomerList = () => {
    
    return(
        <>
            <HeaderBar />
            <div className="w-full">
                <div className="grid grid-nogutter">
                    <div className="col-12 p-3">
                        <Card
                            title="Customer List"
                        >

                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}