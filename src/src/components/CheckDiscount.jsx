/* eslint-disable eqeqeq */
import React from "react";
import '../../App.css';
import PropTypes from 'prop-types';

function CheckDiscount(props) {
    const { isDiscount,discount } = props;
    if (isDiscount == "yes") {
      return (
        <p>Diskon {discount}% Off</p>
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
  
  CheckDiscount.propTypes = {
    discount: PropTypes.number
  };
  
  export default CheckDiscount;