// takes in a product to add
export const addProduct = product => {
  return {
    type: "ADD_PRODUCT",
    payload: product
  };
};

// takes in an id to remove
export const removeProduct = id => {
  return {
    type: "REMOVE_PRODUCT",
    payload: id
  };
};

// takes an obj to set attributes to filter
export const applyAttributes = attr => {
  return {
    type: "SET_ATTRIBUTES",
    payload: attr
  };
};
// opens modal
export const openModal = () => {
  return {
    type: "OPEN_MODAL"
  };
};
// closes modal
export const closeModal = () => {
  return {
    type: "CLOSE_MODAL"
  };
};
