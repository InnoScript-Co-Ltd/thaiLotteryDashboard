import { Button } from "primereact/button"
import { Card } from "primereact/card"
import { InputText } from 'primereact/inputtext'
import { Password } from "primereact/password"
import { useNavigate } from "react-router-dom"
import { paths } from "../../../constants/path"
import { useEffect, useState } from "react"
import { payloadHandler } from "../../../utilities/handlers"
import { userPayloads } from "../userPayloads"
import { postRequest } from "../../../utilities/api"
import { endpoints } from "../../../constants/endpoints"
import { ValidationMessage } from "../../../components/ValidationMessage"
import { useDispatch } from "react-redux"
import { Notification } from "../../../components/Notification"
import { keys } from "../../../constants/settings"

export const Login = () => {

    const [payload, setPayload] = useState(userPayloads.login);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginHandler = async () => {
        setLoading(true);
        const requestResult = await postRequest(endpoints.login, payload, dispatch);

        if(requestResult.data.access_token) {
            localStorage.setItem(keys.API_TOKEN, requestResult.data.access_token);
            localStorage.setItem(keys.USER, JSON.stringify(requestResult.data.user));
            navigate(paths.HOME);
        }
        setLoading(false);
    }

    useEffect(() => {
        const token = localStorage.getItem(keys.API_TOKEN) ? localStorage.getItem(keys.API_TOKEN) : null;

        if(token) {
            navigate(paths.HOME);
        }
    },[navigate]);

    return(
        <div className="flex align-items-center justify-content-center min-h-screen bg-gray-900">
            <Notification />
            <Card 
                title="Thai Lottery Admin Control Panel" 
                subTitle="Sign in to your account" 
                className="w-full md:w-30rem"
            >
                <div className="w-full mb-3">
                    <InputText 
                        placeholder="Email" 
                        className="w-full" 
                        value={payload.email}
                        disabled={loading}
                        onChange={(e) => payloadHandler(payload, e.target.value, 'email', (updatePayload) => {
                            setPayload(updatePayload);
                        })}
                    />
                    <ValidationMessage field={"email"} />
                </div>
                
                <div className="w-full mb-3">
                    <Password 
                        placeholder="Password" 
                        className="w-full"
                        value={payload.password}
                        disabled={loading}
                        onChange={(e) => payloadHandler(payload, e.target.value, 'password', (updatePayload) => {
                            setPayload(updatePayload);
                        })}
                    />
                    <ValidationMessage field={"password"} />
                </div>

                <Button 
                    className="w-full mb-3 p-3" 
                    size="small"
                    label="Sign In"
                    disabled={loading}
                    loading={loading}
                    onClick={() => loginHandler()}
                />

                <label className="link-text" onClick={() => navigate(paths.FORGET_PASSWORD)}> Forget Password? </label>
            </Card>
        </div>
    )
}