import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  // USER_UPDATE_RESET,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_RESET,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_UPDATE_ADMIN_REQUEST,
  USER_UPDATE_ADMIN_SUCCESS,
  USER_UPDATE_ADMIN_FAIL,
  USER_UPDATE_ADMIN_RESET,
} from "../constants/userConstants";

export const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    //Login
    case USER_LOGIN_REQUEST:
      return { ...state, loadingLogin: true };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loadingLogin: false,
        sucessLogin: true,
        user: action.payload,
        // token: action.payload.token,
      };
    case USER_LOGIN_FAIL:
      return { loadingLogin: false, errorLogin: action.payload };
    case USER_LOGOUT:
      return {};
    //Register
    case USER_REGISTER_REQUEST:
      return { loadingRegister: true };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        loadingRegister: false,
        successRegister: true,
        user: action.payload,
        // token: action.payload.token,
      };
    case USER_REGISTER_FAIL:
      return { loading: false, errorRegister: action.payload };
    //Update
    case USER_UPDATE_REQUEST:
      return { ...state, loadingUpdate: true };
    case USER_UPDATE_SUCCESS:
      return {
        ...state,
        loadingUpdate: false,
        successUpdate: true,
        user: action.payload,
        // token: action.payload.token,
      };
    case USER_UPDATE_FAIL:
      return { loadingUpdate: false, errorUpdate: action.payload };
    //User delete for admin
    case USER_DELETE_REQUEST:
      return { ...state, loadingDelete: true };
    case USER_DELETE_SUCCESS:
      return { ...state, loadingDelete: false, successDelete: true };
    case USER_DELETE_FAIL:
      return { loadingDelete: false, errorDelete: action.payload };
    default:
      return state;
  }
};

export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true };
    case USER_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    case USER_LIST_RESET:
      return { users: [] };
    default:
      return state;
  }
};

export const userDetailsAndUpdateReducer = (
  state = { newUser: {} },
  action
) => {
  switch (action.type) {
    //Get user details
    case USER_DETAILS_REQUEST:
      return { ...state, loadingDetails: true };
    case USER_DETAILS_SUCCESS:
      return { ...state, loadingDetails: false, newUser: action.payload };
    case USER_DETAILS_FAIL:
      return { ...state, loadingDetails: false, error: action.payload };
    //Update User by Admin
    case USER_UPDATE_ADMIN_REQUEST:
      return { ...state, loadingUpdate: true };
    case USER_UPDATE_ADMIN_SUCCESS:
      return {
        ...state,
        loadingUpdate: false,
        successUpdate: true,
        newUser: action.payload,
      };
    case USER_UPDATE_ADMIN_FAIL:
      return { ...state, loadingUpdate: false, errorUpdate: action.payload };
    case USER_UPDATE_ADMIN_RESET:
      return { newUser: {} };
    default:
      return state;
  }
};

// export const userUpdateReducer = (state = { user: {} }, action) => {
//   switch (action.type) {
//     case USER_UPDATE_ADMIN_REQUEST:
//       return { loading: true };
//     case USER_UPDATE_ADMIN_SUCCESS:
//       return { loading: false, success: true };
//     case USER_UPDATE_ADMIN_FAIL:
//       return { loading: false, error: action.payload };
//     case USER_UPDATE_ADMIN_RESET:
//       return { user: {} };
//     default:
//       return state;
//   }
// };
