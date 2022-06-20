import { useHistory } from 'react-router-dom';

const Navbar = () => {
    const history = useHistory();

    return (
        <nav className="navbar navbar-light bg-white shadow-0 py-3">
            <div className="container">
                <h1 onClick={() => history.push('/')} className="pointer text-success fw-bold">Docs</h1>
                <button className="btn btn-lg btn-success fw-bold" onClick={() => history.push('/api')}>Get started</button>
            </div>
        </nav>
    );
};

export default Navbar;