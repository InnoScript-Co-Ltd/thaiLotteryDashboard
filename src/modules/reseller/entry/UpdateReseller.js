import { useDispatch, useSelector } from "react-redux"
import { useCallback, useEffect, useState } from "react"
import { InputText } from "primereact/inputtext"
import { Dropdown } from "primereact/dropdown"
import { ValidationMessage } from "../../../components/ValidationMessage"
import { resellerPayloads } from "../resellerPayload"
import { payloadHandler } from "../../../utilities/handlers"
import { Button } from "primereact/button"
import { Image } from "primereact/image"
import { resellerServices } from "../resellerServices"
import { useParams } from "react-router-dom"

const genderList = [
  { name: "MALE", code: "MALE" },
  { name: "FEMALE", code: "FEMALE" },
];

const statusList = [
  { name: "ACTIVE", code: "ACTIVE" },
  { name: "PENDING", code: "PENDING" },
];

export const UpdateReseller = () => {

    const [loading, setLoading] = useState(false);
    const [payload, setPayload] = useState(resellerPayloads.update);

    const { reseller } = useSelector((state) => state.reseller);

    const dispatch = useDispatch();
    const params = useParams();

    const updateHandler = async () => {
        setLoading(true);
        let updatePayload = { ...payload };
        updatePayload.status =  payload.status.code;
        updatePayload.gender = payload.gender.code;

        await resellerServices.update(dispatch, params.id, updatePayload);
    }

    const init = useCallback (async () => {
        setLoading(true);
        
        if(reseller) {
            let updatePayload = {...reseller};
            updatePayload.gender = genderList.find(value => value.code === reseller.gender);
            updatePayload.status = statusList.find(value => value.code === reseller.status);   
            setPayload(updatePayload);
        }
        
        setLoading(false);
    }, [reseller]);

    useEffect(() => {
        init();
    }, [init]);

    return(
        <>
            { payload && (
                <div className="grid">
                    <div className="col-3 mt-3">
                        <div className="w-full flex flex-row justify-content-center align-items-center">
                            <Image 
                                src="https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp"
                            />
                        </div>
                    </div>

                    <div className="col-9">
                        <div className="grid">
                            <div className="col-12">
                                <h2> Update Reseller Account Information </h2>
                            </div>

                            <div className="col-3 md:col-3 mt-3">
                                <div className="w-full p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-user"></i>
                                    </span>
                                    <InputText 
                                        className="w-full"
                                        placeholder="Enter reseller first name"
                                        disabled={loading}
                                        value={payload.first_name || ""}
                                        onChange={(e) => payloadHandler(payload, e.target.value, "first_name", (updatePayload) => {
                                            setPayload(updatePayload);
                                        })}
                                    />
                                </div>
                                <ValidationMessage field="first_name" />
                            </div>

                            <div className="col-3 md:col-3 mt-3">
                                <div className="w-full p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-user"></i>
                                    </span>
                                    <InputText 
                                        className="w-full"
                                        placeholder="Enter reseller last name"
                                        disabled={loading}
                                        value={payload.last_name || ""}
                                        onChange={(e) => payloadHandler(payload, e.target.value, "last_name", (updatePayload) => {
                                            setPayload(updatePayload);
                                        })}
                                    />
                                </div>
                                <ValidationMessage field="last_name" />
                            </div>

                            <div className="col-3 md:col-3 mt-3">
                                <div className="w-full p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-venus"></i>
                                    </span>
                                    <Dropdown
                                        placeholder="Select gender type"
                                        options={genderList}
                                        value={payload.gender || ""}
                                        optionLabel="name"
                                        onChange={(e) => payloadHandler(payload, e.value, "gender", (updatePayload) => {
                                            setPayload(updatePayload);
                                        })}
                                    />
                                </div>
                                <ValidationMessage field="gender" />
                            </div>

                            <div className="col-3 md:col-3 mt-3">
                                <div className="w-full p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-phone"></i>
                                    </span>
                                    <InputText 
                                        className="w-full"
                                        placeholder="Enter reseller phone number"
                                        disabled={loading}
                                        value={payload.phone || ""}
                                        onChange={(e) => payloadHandler(payload, e.target.value, "phone", (updatePayload) => {
                                            setPayload(updatePayload);
                                        })}
                                    />
                                </div>
                                <ValidationMessage field="phone" />
                            </div>

                            <div className="col-3 md:col-3 mt-3">
                                <div className="w-full p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-info-circle"></i>
                                    </span>
                                    <Dropdown
                                        placeholder="Select status"
                                        options={statusList}
                                        value={payload.status || ""}
                                        optionLabel="name"
                                        onChange={(e) => payloadHandler(payload, e.value, "status", (updatePayload) => {
                                            setPayload(updatePayload);
                                        })}
                                    />
                                </div>
                                <ValidationMessage field="status" />
                            </div>

                            <div className="col-3 md:col-3 mt-3">
                                <div className="w-full p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-id-card"></i>
                                    </span>
                                    <InputText 
                                        className="w-full"
                                        placeholder="Enter reseller NRC number"
                                        disabled={loading}
                                        value={payload.nrc || ""}
                                        onChange={(e) => payloadHandler(payload, e.target.value, "nrc", (updatePayload) => {
                                            setPayload(updatePayload);
                                        })}
                                    />
                                </div>
                                <ValidationMessage field="nrc" />
                            </div>

                            <div className="col-3 md:col-6 mt-3">
                                <div className="w-full p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-home"></i>
                                    </span>
                                    <InputText 
                                        className="w-full"
                                        placeholder="Enter reseller address"
                                        disabled={loading}
                                        value={payload.address || ""}
                                        onChange={(e) => payloadHandler(payload, e.target.value, "address", (updatePayload) => {
                                            setPayload(updatePayload);
                                        })}
                                    />
                                </div>
                                <ValidationMessage field="address" />
                            </div>

                            <div className="col-12 mt-3">
                                <Button 
                                    size="small"
                                    label="Update"
                                    onClick={() => updateHandler()}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}