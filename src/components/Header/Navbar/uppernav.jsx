import './navbar.css';
import { Link } from 'react-router-dom';

function UpperNav(props) {
    return (
        <div className='upper_nav_area'>
            <div className="upper_nav_list">
                <div>
                    <Link
                        to={'/'}>
                        Home
                    </Link>
                </div>
                <div>
                    <Link
                        to={'/about'}>
                        About Us
                    </Link>
                </div>
                <div>
                    <Link
                        to={'/news'}>
                        News
                    </Link>
                </div>
                <div>
                    <Link
                        to={'/contact'}>
                        Contact
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default UpperNav;