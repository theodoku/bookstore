import React from 'react';
import { PropTypes } from 'prop-types';

const Input = ({ types, placeholder, value, name, onChange }) => {
    <input type={types} placeholder={placeholder} value={value} name={value} onChange={onChange} />
};

export default Input;

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}