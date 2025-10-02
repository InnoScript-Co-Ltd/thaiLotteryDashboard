import { Button } from "primereact/button"
import { Card } from "primereact/card"
import { InputText } from 'primereact/inputtext'
import { Password } from "primereact/password"
import { useNavigate } from "react-router-dom"
import { paths } from "../../../constants/path"

export const Login = () => {

    const navigate = useNavigate();

    return(
        <div className="flex align-items-center justify-content-center min-h-screen bg-gray-900">
            <Card 
                title="Welcome Back!" 
                subTitle="Sign in to your account" 
                className="w-full md:w-30rem"
            >
                <InputText 
                    placeholder="Username" 
                    className="w-full mb-3" 
                />
                <Password 
                    placeholder="Password" 
                    className="w-full mb-3"
                    toggleMask
                />

                <Button 
                    className="w-full mb-3 p-3" 
                    size="small"
                    label="Sign In"
                    onClick={() => navigate(paths.DASHBOARD)}
                />

                <label className="link-text" onClick={() => navigate(paths.FORGET_PASSWORD)}> Forget Password? </label>
            </Card>
        </div>
    )
}