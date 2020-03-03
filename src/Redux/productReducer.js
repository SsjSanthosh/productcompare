const initialState = { products: [], showProps: false };

const productReducer = (state = initialState, action) => {
  const { products, showProps } = state;
  const { payload, type } = action;
  switch (type) {
    case "ADD_PRODUCT":
      return { ...state, products: [payload, ...products] };
    case "REMOVE_PRODUCT":
      let newProducts = products.filter(f => f.id !== payload);
      return { ...state, products: newProducts };
    default:
      return state;
  }
};

export default productReducer;
