import { FC } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = () => {
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </header>
    );
};

export default Header;
