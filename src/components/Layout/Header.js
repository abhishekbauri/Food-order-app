import React from 'react'
import mealsImage from '../../assets/meals.png'
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <React.Fragment>
        <header className={styles.header} >
            <h1>Food For You</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={styles['main-image']} >
            <img src={mealsImage} alt="A table full of delicious food!" />
        </div>
    </React.Fragment>
  )
}

export default Header;