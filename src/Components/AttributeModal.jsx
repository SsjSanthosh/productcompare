import React, { useState } from "react";
// npm module to easily implement react modals
import Modal from "react-modal";
import { connect } from "react-redux";
import {
  closeModal,
  openModal,
  applyAttributes
} from "./../Redux/productActions";
function AttributeModal({ closeModal, showModal, applyAttributes }) {
  // attaching app element to the modal to prevent overlay issues
  Modal.setAppElement("#root");
  // styles to center the overlay
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
  // initializing hooks for the attributes state
  // Using the attributes state , modal can pass the user selected attributes to the reducer which will filter the comparing properties
  const [attributes, setAttributes] = useState({
    colors: true,
    vendors: true,
    price: true,
    condition: true
  });

  // keeping track of check all box
  const [checkAll, setCheckAll] = useState(true);

  const { colors, vendors, price, condition } = attributes;

  // hook for tracking user input
  const [search, setSearch] = useState("");
  // function to handle checking all boxes
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

  // apply the user chosen attributes to the compare
  const handleSubmit = () => {
    applyAttributes(attributes);
  };
  // function to handle user input
  const handleSearchChange = e => {
    setSearch(e.target.value);
  };
  // closes the modal
  function setCloseModal() {
    // action to update the modal state
    closeModal();
  }
  // handling the changes in attributes checboxes
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
              {/* checking if attribute matches the string entered by the user and then rendering check */}
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
            <div className="Modal-btn-div">
              <button className="btn btn-close" onClick={closeModal}>
                Close
              </button>
              <button className="btn btn-done" onClick={handleSubmit}>
                Apply
              </button>
            </div>
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
