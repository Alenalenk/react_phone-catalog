import './Header.scss';
import { MenuList } from '../MenuList';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from '../Context/Context';
import { getSearchWith } from '../../utils/GetSearchWith';

export const Header = () => {
  const { path, cart, favourite, setSearchParams, params, totalSums } =
    useContext(ProductContext);

  const handleSearchParamQuery = (value: string) => {
    setSearchParams(
      getSearchWith(params, {
        query: value || null,
        page: null,
      }),
    );
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/" className="header__logo">
          <img src="./img/icons/logo.svg" alt="logo" />
        </Link>
        {path !== '/menu' && <MenuList />}
        <div className="header__links">
          {(path === '/phones' ||
            path === '/tablets' ||
            path === '/accessories') && (
            <div className="header__search-wrapper">
              <input
                type="text"
                className="header__search"
                onChange={event => handleSearchParamQuery(event.target.value)}
              />
            </div>
          )}
          {path !== '/menu' && (
            <Link to="/menu" className="header__link header__link--burger-menu">
              <img
                className="header__image button__image"
                src="./img/icons/menu-burger.svg"
                alt="menu-burger"
              />
            </Link>
          )}

          {path === '/menu' && (
            <Link to="/" className="header__link header__link--close">
              <img
                className="header__image button__image"
                src="./img/icons/close.svg"
                alt="close"
              />
            </Link>
          )}

          <Link
            to="/favourites"
            className="header__link header__link--heart-like"
          >
            {favourite.length > 0 && (
              <span className="header__count button__count">
                {favourite.length}
              </span>
            )}
            <img
              className="header__image button__image"
              src="./img/icons/heart-like.svg"
              alt="heart-like"
            />
          </Link>

          <Link to="/cart" className="header__link header__link--cart">
            {cart.length > 0 && (
              <span className="header__count button__count">
                {totalSums[0]}
              </span>
            )}
            <img
              className="header__image button__image"
              src="./img/icons/cart.svg"
              alt="cart"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};