import React from 'react';
import styles from './styles/Button.module.scss';

const Button = ({ children, onClick }) => {
	
	const isOperator = () => children === '.' || children === '+' || children === '-'|| children === '*' || children === '/' || children === '=' 

	return <button style={{borderBottomLeftRadius: `${children === '0' && '4px'}`}} onClick={() => onClick(children)} className={isOperator() ? styles.button : styles.buttonNumber}>{children}</button>;
};

export default Button;
