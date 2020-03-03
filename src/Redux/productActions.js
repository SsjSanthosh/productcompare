export const addProduct = product => {
  return {
    type: "ADD_PRODUCT",
    payload: product
  };
};

export const removeProduct = id => {
  return {
    type: "REMOVE_PRODUCT",
    payload: id
  };
};

export const applyAttributes = attr => {
  return {
    type: "SET_ATTRIBUTES",
    payload: attr
  };
};

export const openModal = () => {
  return {
    type: "OPEN_MODAL"
  };
};

export const closeModal = () => {
  return {
    type: "CLOSE_MODAL"
  };
};
