import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const useActivity = () => {
    const context = useContext(UserContext)
    if(!context) {
        throw new Error('el hook useUser debe ser utilizado en un UserProvider')
    }
    return context
}