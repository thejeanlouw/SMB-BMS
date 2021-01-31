import React from 'react';
import styles from './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => (
  <button className={`${children} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
