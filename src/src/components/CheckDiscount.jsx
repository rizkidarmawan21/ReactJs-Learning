import React from "react";
import '../../App.css';

function CheckDiscount(props) {
    const { isDiscount } = props;
    if (isDiscount == "yes") {
      return (
        <p>Diskon 50% Off</p>
      );
    } else if (isDiscount == "comming") {
      return (
        <p>Akan ada diskon</p>
      );
    } else {
      return (
        <p>Belum Ada Discount</p>
      );
    }
  }
  

  export default CheckDiscount;