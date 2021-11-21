import React from "react"
import PropTypes from 'prop-types'


export default function Input({ task: { type, value, isRequiredInput }, onChangeInput }) {
    return <input type="text" value={value} />
}

Input.propTypes = {
    /** Composition of the input */
    input: PropTypes.shape({
      /** Type of the input */
      type: PropTypes.string.isRequired,
      /** Value of the input */
      value: PropTypes.string.isRequired,
      /** Current isRequired in the  input */
      isRequiredInput: PropTypes.bool.isRequired,
    }),
    /** Event to change the task to change */
    onChangeInput: PropTypes.func,
   }