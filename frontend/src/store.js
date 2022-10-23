import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  // productDetailsReducer,
  // productDeleteReducer,
  productCreateAndDeleteReducer,
  productDetailsAndUpdateReducer,
  // productCreateReducer,
  // productUpdateReducer,
  productReviewCreateReducer,
  productTopRatedReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import {
  // userLoginReducer,
  // userRegisterReducer,
  userDetailsAndUpdateReducer,
  // userUpdateReducer,
  userReducer,
  userListReducer,
  // userDeleteReducer,
} from "./reducers/userReducers";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderListMyReducer,
  orderListReducer,
  orderDeliverReducer,
} from "./reducers/orderReducers";

const reducer = combineReducers({
  productList: productListReducer,
  // productDetails: productDetailsReducer,
  // productDelete: productDeleteReducer,
  // productCreate: productCreateReducer,
  // productUpdate: productUpdateReducer,
  productCreateAndDelete: productCreateAndDeleteReducer,
  productDetailsAndUpdate: productDetailsAndUpdateReducer,
  productReviewCreate: productReviewCreateReducer,
  productTopRated: productTopRatedReducer,
  cart: cartReducer,
  // userLogin: userLoginReducer,
  // userRegister: userRegisterReducer,
  // userUpdate: userUpdateReducer,
  userDetailsAndUpdate: userDetailsAndUpdateReducer,
  userReducer: userReducer,
  userList: userListReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderListMy: orderListMyReducer,
  orderList: orderListReducer,
  orderDeliver: orderDeliverReducer,
  // userDelete: userDeleteReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const shippingFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const paymentFromStorage = localStorage.getItem("paymentMethod")
  ? JSON.parse(localStorage.getItem("paymentMethod"))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingFromStorage,
    paymentMethod: paymentFromStorage,
  },
  userReducer: { user: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
