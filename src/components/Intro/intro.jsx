import './intro.css';

function Intro() {
    return (
        <div className="intro mt-5">
            <div className="intro_container">
                <div><h2 id="title" className='mb-5'>Real Estate for Business</h2></div>
                <div className="intro_button">
                    <button className="navbutton">
                        <a className='button_nav_home' href="/real_este">Shop House / <br/>Business Location</a>
                    </button>
                    <button className="navbutton navbutton_middle">
                        <a className='button_nav_home' href="/real_este">Office for Rent</a>
                    </button>
                    <button className="navbutton">
                        <a className='button_nav_home' href="/real_este">Co-working Space</a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Intro