import  { getUserFail, getUserPending, getUserSuccess} from "./userSlice";
import { fetchUser } from "../../api/userApi";
// import { useDispatch } from "react-redux";

export const getUserProfile = () => async (dispatch) => {
    // const dispatch = useDispatch();
    try{
        dispatch(getUserPending())
        const user = await fetchUser();
        console.log(`user   ${JSON.stringify(user)}`)
        if (user && user?.user?._id) 
            return dispatch(getUserSuccess(user.user))
    
        dispatch(getUserFail('User Not Found'))
    } catch( err){
        console.log(err)
        dispatch(getUserFail(err))
    }
}