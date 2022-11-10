import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ConfigContext } from '../../../../contexts/ConfigContext';
import * as actionType from '../../../../store/actions';
import logo from './../../assets/images/bds_logo.png';

const NavLogo = () => {
    const configContext = useContext(ConfigContext);
    const { collapseMenu } = configContext.state;
    const { dispatch } = configContext;

    let toggleClass = ['mobile-menu'];
    if (collapseMenu) {
        toggleClass = [...toggleClass, 'on'];
    }

    return (
        <React.Fragment>
            <div className="navbar-brand header-logo">
                <Link to="#" className="b-brand">
                    <img style={{ width: '160px', height: '48px', marginRight: '12px' }} src={logo} alt="logo" />
                </Link>
                <Link
                    to="#"
                    className={toggleClass.join(' ')}
                    id="mobile-collapse"
                    onClick={() => dispatch({ type: actionType.COLLAPSE_MENU })}
                >
                    <span />
                </Link>
            </div>
        </React.Fragment>
    );
};

export default NavLogo;
