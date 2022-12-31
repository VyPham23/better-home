import './navbar.css';
import { Link } from 'react-router-dom';

function UpperNav (props) {    
    return (
        <header style={{overflow: "hidden"}}>
            <nav className='upper-nav'>
                <div className='left-nav'>
                    <Link
                    to={'/'}>
                        Home
                    </Link>
                    <Link
                    to={'/about'}>
                        About Us
                    </Link>
                </div>
                <div className='left-nav'>
                    <Link
                    to={'/news'}>
                        News
                    </Link>
                    <Link
                    to={'/contact'}>
                        Contact
                    </Link>
                </div>
                
            </nav>
        </header>
        
    );
}

export default UpperNav;