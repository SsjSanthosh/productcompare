import React, { useState } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import {
  closeModal,
  openModal,
  applyAttributes
} from "./../Redux/productActions";
function AttributeModal({ closeModal, showModal, applyAttributes }) {
  Modal.setAppElement("#root");
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    },
    overlay: {
      backgroundColor: "rgba(0,0,0,0.6)"
    }
  };
  const [attributes, setAttributes] = useState({
    colors: true,
    vendors: true,
    price: true,
    condition: true
  });

  const [checkAll, setCheckAll] = useState(true);

  const { colors, vendors, price, condition } = attributes;

  const [search, setSearch] = useState("");
  const handleAllTrue = () => {
    if (checkAll) {
      setCheckAll(false);
    } else {
      setAttributes({
        colors: true,
        vendors: true,
        price: true,
        condition: true
      });
      setCheckAll(true);
    }
  };

  const handleSubmit = () => {
    applyAttributes(attributes);
  };

  const handleSearchChange = e => {
    setSearch(e.target.value);
  };
  function setCloseModal() {
    closeModal();
  }

  const handleChange = e => {
    let value = !attributes[e.target.name];
    if (value === false) setCheckAll(false);
    setAttributes({ ...attributes, [e.target.name]: value });
  };

  return (
    <div>
      <div>
        <Modal
          isOpen={showModal}
          onRequestClose={setCloseModal}
          style={customStyles}
          contentLabel="Attribute Modal"
        >
          <div className="Modal">
            <p className="Modal-title">Add/Remove Attributes</p>
            <div className="Modal-search">
              <input
                type="text"
                value={search}
                onChange={handleSearchChange}
                placeholder="Search Attributes"
                name="search"
                autoComplete="off"
              />
              <div className="Modal-checkbox-div">
                <div className="Modal-checkbox">
                  <input
                    type="checkbox"
                    id="all"
                    name="all"
                    checked={checkAll}
                    onChange={handleAllTrue}
                  />
                  <label htmlFor="all">Select all</label>
                </div>
              </div>
            </div>
            <div className="Modal-attributes">
              {"price".includes(search.toLowerCase()) && (
                <div className="Modal-checkbox">
                  <input
                    type="checkbox"
                    id="Price"
                    name="price"
                    checked={price}
                    onChange={handleChange}
                  />
                  <label htmlFor="Price"> Price</label>
                </div>
              )}
              {"colors".includes(search.toLowerCase()) && (
                <div className="Modal-checkbox">
                  <input
                    type="checkbox"
                    id="Colors"
                    name="colors"
                    checked={colors}
                    onChange={handleChange}
                  />
                  <label htmlFor="Colors">Colors</label>
                </div>
              )}
              {"conditions".includes(search.toLowerCase()) && (
                <div className="Modal-checkbox">
                  <input
                    type="checkbox"
                    id="Condition"
                    name="condition"
                    checked={condition}
                    onChange={handleChange}
                  />
                  <label htmlFor="Condition">Condition</label>
                </div>
              )}
              {"vendors".includes(search.toLowerCase()) && (
                <div className="Modal-checkbox">
                  <input
                    type="checkbox"
                    checked={vendors}
                    onChange={handleChange}
                    id="Vendor"
                    name="vendors"
                  />
                  <label htmlFor="vendors"> Vendor</label>
                </div>
              )}
            </div>
            <button className="btn btn-close" onClick={closeModal}>
              Close
            </button>
            <button className="btn btn-done" onClick={handleSubmit}>
              Apply
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    showModal: state.products.showModal
  };
};

export default connect(mapStateToProps, {
  openModal,
  closeModal,
  applyAttributes
})(AttributeModal);
