import { FC } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';

const HomePage: FC = () => {
    console.log('home');
    return (
        <Layout>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>

            <h1>Home</h1>
        </Layout>
    );
};

export default HomePage;
