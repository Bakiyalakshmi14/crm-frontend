import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../login/LoginSlice";
import { fetchNewAccessJWT } from "../../api/userApi";
import { getUserProfile } from "../../pages/Dashboard/userAction";

export const PrivateRoute = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuth} = useSelector( state => state.login)
  const { user} = useSelector( state => state.user);
  // useEffect(()=> {
  //   const updateAccessJWT = async () => {
  //     const result = await fetchNewAccessJWT();
  //     result && dispatch(loginSuccess())
  //   }
  //   (!sessionStorage.getItem('accessJWT') && localStorage.getItem('refreshJWT') && updateAccessJWT())
  //   ( !isAuth && sessionStorage.getItem('accessJWT') && dispatch(loginSuccess()))
  // }, [ dispatch, isAuth])
  
  useEffect(() => {
    const updateAccessJWT = async () => {
      const result = await fetchNewAccessJWT();
      result && dispatch(loginSuccess());
    };
  
    if(!user._id){
      dispatch(getUserProfile())
    }

    if (!sessionStorage.getItem('accessJWT') && localStorage.getItem('refreshJWT')) {
      updateAccessJWT();
    }

    if (!isAuth && sessionStorage.getItem('accessJWT')) {
      dispatch(loginSuccess());
    }
  }, [dispatch, isAuth, fetchNewAccessJWT, user._id]);
  

  return isAuth ? <Outlet /> : <Navigate to="/" replace />
};
