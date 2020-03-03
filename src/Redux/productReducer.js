const initialState = {
  products: [],
  showModal: false,
  attributes: { colors: false, vendors: true, condition: true, price: true }
};

const productReducer = (state = initialState, action) => {
  const { products } = state;
  const { payload, type } = action;
  switch (type) {
    case "ADD_PRODUCT":
      return { ...state, products: [payload, ...products] };
    case "REMOVE_PRODUCT":
      let newProducts = products.filter(f => f.id !== payload);
      return { ...state, products: newProducts };
    case "SET_ATTRIBUTES":
      return { ...state, attributes: payload };
    case "OPEN_MODAL":
      return { ...state, showModal: true };
    case "CLOSE_MODAL":
      return { ...state, showModal: false };
    default:
      return state;
  }
};

export default productReducer;
