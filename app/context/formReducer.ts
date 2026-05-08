// This code is Brain 

export const initialState = {
  client: {
    name: "",
    email: "",
    phone: ""
  },
  product: {
    name: "",
    price: "",
    category: "",
    image:null
  },
  step: 1   
};

export const formReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_CLIENT":
      return {
        ...state,
        client: {
          ...state.client,
          ...action.payload
        }
      };

    case "SET_PRODUCT":
      return {
        ...state,
        product: {
          ...state.product,
          ...action.payload
        }
      };

    case "NEXT_STEP":
      return {
        ...state,
        step: state.step + 1
      };

    case "PREV_STEP":
      return {
        ...state,
        step: state.step - 1
      };

    default:
      return state;
  }
};