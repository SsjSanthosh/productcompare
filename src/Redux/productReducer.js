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
      // adding the new product to the existing comparison items
      return { ...state, products: [payload, ...products] };
    case "REMOVE_PRODUCT":
      // removing the product from the comparison list
      let newProducts = products.filter(f => f.id !== payload);
      return { ...state, products: newProducts };
    case "SET_ATTRIBUTES":
      // setting attributes, only these will be displayed in the comparison
      return { ...state, attributes: payload };
    case "OPEN_MODAL":
      // opens modal
      return { ...state, showModal: true };
    case "CLOSE_MODAL":
      // closes modal
      return { ...state, showModal: false };
    default:
      return state;
  }
};

export default productReducer;
