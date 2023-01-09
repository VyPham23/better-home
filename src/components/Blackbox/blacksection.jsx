import './blacksection.css';

const BlackSection = () => {
    return (
        <div className="black">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12 agn">
                    <div className="black-pic">
                        <i class="bi bi-calendar-check"></i>
                    </div>
                    <div className="txt-area">
                        <h5>Our Agent</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Exercitationem, labore. Lorem ipsum, dolor sit amet.
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 cpn">
                    <div className="black-pic">
                        <i class="bi bi-house-door"></i>
                    </div>
                    <div className="txt-area">
                        <h5>Our Company</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Exercitationem, labore. Lorem ipsum, dolor sit amet.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlackSection;