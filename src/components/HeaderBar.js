import { ButtonGroup } from 'primereact/buttongroup';
import { Button } from "primereact/button"
import { Image } from "primereact/image"
import { Toolbar } from "primereact/toolbar"

export const HeaderBar = () => {

    const StartContent = () => {
        return (
            <div className="flex align-items-start md:flex-row">
                <Image src="/logo192.png" alt="Image" width="40" height="40" className="mr-2" />
                <div className="flex-column">
                    <h3 className="m-0">Zaw Min Tun </h3>
                    <small className="mt-2">
                        Kuboda Spear Part
                    </small>
                </div>
            </div>
        )
    }

    const EndContent = () => {
        return (
            <>
                <Button icon="pi pi-user" rounded text aria-label="Profile" />
                <Button icon="pi pi-cog" rounded text aria-label="Setting" />
            </>

        )
    }

    return(
        <>
            <Toolbar 
                start={ <StartContent /> }
                end={ <EndContent /> }
            />
        </>
    )
}