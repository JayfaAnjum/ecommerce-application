import {
  loginFail,
  loginRequest,
  loginSuccess,
  clearError,
  registerFail,
  registerRequest,
  registerSuccess,
  loadUserRequest,
  loadUserSuccess,
  loadUserFail,
  logoutSuccess,
  logoutFail,
  updateProfileRequest,
  updateProfileSuccess,
  updateProfileFail,
  updatePasswordRequest,
  updatePasswordSuccess,
  updatePasswordFail,
  forgotPasswordRequest,
  forgotPasswordSuccess,
  forgotPasswordFail,
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordFail
} from "../slices/authSlice";

import {
  usersRequest,
  usersSuccess,
  usersFail,
  userRequest,
  userSuccess,
  userFail,
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserFail,
  updateUserRequest,
  updateUserSuccess,
  updateUserFail
} from "../slices/userSlice";

import axios from "axios";

/* ================= AUTH ================= */

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(loginRequest());

    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/v1/login`,
      { email, password },
      { withCredentials: true }
    );

    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFail(error.response?.data?.message));
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    dispatch(registerRequest());

    const config = {
      headers: { "Content-type": "multipart/form-data" },
      withCredentials: true,
    };

    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/v1/register`,
      userData,
      config
    );

    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerFail(error.response?.data?.message));
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch(loadUserRequest());

    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/myprofile`,
      { withCredentials: true }
    );

    dispatch(loadUserSuccess(data));
  } catch (error) {
    dispatch(loadUserFail(error.response?.data?.message));
  }
};

export const logout = () => async (dispatch) => {
  try {
    await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/logout`,
      { withCredentials: true }
    );

    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutFail(error.response?.data?.message));
  }
};

export const clearAuthError = () => (dispatch) => {
  dispatch(clearError());
};

/* ================= PROFILE ================= */

export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch(updateProfileRequest());

    const config = {
      headers: { "Content-type": "multipart/form-data" },
      withCredentials: true,
    };

    const { data } = await axios.put(
      `${process.env.REACT_APP_API_URL}/api/v1/update`,
      userData,
      config
    );

    dispatch(updateProfileSuccess(data));
  } catch (error) {
    dispatch(updateProfileFail(error.response?.data?.message));
  }
};

export const updatePassword = (formData) => async (dispatch) => {
  try {
    dispatch(updatePasswordRequest());

    await axios.put(
      `${process.env.REACT_APP_API_URL}/api/v1/password/change`,
      formData,
      {
        headers: { "Content-type": "application/json" },
        withCredentials: true,
      }
    );

    dispatch(updatePasswordSuccess());
  } catch (error) {
    dispatch(updatePasswordFail(error.response?.data?.message));
  }
};

/* ================= PASSWORD ================= */

export const forgotPassword = (formData) => async (dispatch) => {
  try {
    dispatch(forgotPasswordRequest());

    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/v1/password/forgot`,
      formData,
      {
        headers: { "Content-type": "application/json" },
        withCredentials: true,
      }
    );

    dispatch(forgotPasswordSuccess(data));
  } catch (error) {
    dispatch(forgotPasswordFail(error.response?.data?.message));
  }
};

export const resetPassword = (formData, token) => async (dispatch) => {
  try {
    dispatch(resetPasswordRequest());

    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/v1/password/reset/${token}`,
      formData,
      {
        headers: { "Content-type": "application/json" },
        withCredentials: true,
      }
    );

    dispatch(resetPasswordSuccess(data));
  } catch (error) {
    dispatch(resetPasswordFail(error.response?.data?.message));
  }
};

/* ================= ADMIN ================= */

export const getUsers = () => async (dispatch) => {
  try {
    dispatch(usersRequest());

    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/admin/users`,
      { withCredentials: true }
    );

    dispatch(usersSuccess(data));
  } catch (error) {
    dispatch(usersFail(error.response?.data?.message));
  }
};

export const getUser = (id) => async (dispatch) => {
  try {
    dispatch(userRequest());

    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/admin/user/${id}`,
      { withCredentials: true }
    );

    dispatch(userSuccess(data));
  } catch (error) {
    dispatch(userFail(error.response?.data?.message));
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch(deleteUserRequest());

    await axios.delete(
      `${process.env.REACT_APP_API_URL}/api/v1/admin/user/${id}`,
      { withCredentials: true }
    );

    dispatch(deleteUserSuccess());
  } catch (error) {
    dispatch(deleteUserFail(error.response?.data?.message));
  }
};

export const updateUser = (id, formData) => async (dispatch) => {
  try {
    dispatch(updateUserRequest());

    await axios.put(
      `${process.env.REACT_APP_API_URL}/api/v1/admin/user/${id}`,
      formData,
      {
        headers: { "Content-type": "application/json" },
        withCredentials: true,
      }
    );

    dispatch(updateUserSuccess());
  } catch (error) {
    dispatch(updateUserFail(error.response?.data?.message));
  }
};
