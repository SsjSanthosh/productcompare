import React from "react";
import { connect } from "react-redux";

function Compare({ product, attributes }) {
  let { price, colors, condition, name, vendors } = product;
  let vendorstring = "";
  for (let v of vendors) {
    vendorstring += v + ",";
  }
  vendorstring = vendorstring.substring(0, vendorstring.length - 1);

  return (
    <div className="Compare">
      <div className="Compare-div">
        <p className="Compare-div-title">Name</p>
        <p className="Compare-div-value">{name}</p>
      </div>
      {attributes.price && (
        <div className="Compare-div">
          <p className="Compare-div-title">Price</p>
          <p className="Compare-div-value">{price}</p>
        </div>
      )}
      {attributes.condition && (
        <div className="Compare-div">
          <p className="Compare-div-title">Condition</p>
          <p className="Compare-div-value">{condition}</p>
        </div>
      )}

      {attributes.colors && (
        <div className="Compare-div">
          <p className="Compare-div-title">Colors</p>
          <div className="Compare-div-colors">
            {colors.map(c => (
              <div
                className="Compare-colors"
                style={{ backgroundColor: c }}
              ></div>
            ))}
          </div>
        </div>
      )}
      {attributes.vendors && (
        <div className="Compare-div">
          <p className="Compare-div-title">Vendors</p>
          <p className="Compare-div-value">{vendorstring}</p>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    attributes: state.products.attributes
  };
};

export default connect(mapStateToProps)(Compare);
