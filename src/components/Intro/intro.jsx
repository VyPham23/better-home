import './intro.css';

function Intro() {
    return (
        <div className="intro">
            <div className="intro_container">
                <h2 id="title" className='mb-5'>Real Estate for Business</h2>
                <div className="intro_button">
                    <button className="navbutton"><a href="/real_este">Shop House or <br/>Business Location</a></button>
                    <button className="navbutton"><a href="/real_este">Office for Rent</a></button>
                    <button className="navbutton"><a href="/real_este">Co-working Space</a></button>
                </div>
            </div>
        </div>
    );
}

export default Intro