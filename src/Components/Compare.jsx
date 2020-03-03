import React from "react";

export default function Compare({ product }) {
  let { price, colors, condition, description, name, vendors } = product;
  let vendorstring = "";
  for (let v of vendors) {
    vendorstring += v + ",";
  }
  vendorstring = vendorstring.substring(0, vendorstring.length - 1);
  console.log(colors);
  return (
    <div className="Compare">
      <div className="Compare-div">
        <p className="Compare-div-title">Name</p>
        <p className="Compare-div-value">{name}</p>
      </div>
      <div className="Compare-div">
        <p className="Compare-div-title">Price</p>
        <p className="Compare-div-value">{price}</p>
      </div>
      <div className="Compare-div">
        <p className="Compare-div-title">Condition</p>
        <p className="Compare-div-value">{condition}</p>
      </div>

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
      <div className="Compare-div">
        <p className="Compare-div-title">Vendors</p>
        <p className="Compare-div-value">{vendorstring}</p>
      </div>
    </div>
  );
}
