import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';

function HomePage() {
    return (
        <div>
            <div>
        <div className="products-container">
            <h2>Last Products</h2>
            {/* last products here from backend */}
        </div>
            <div>
            <Link to="/category/all">See More</Link>
            </div>
            </div>
            {/* sale banner from canva */}
        <div className="sale-banner-container">
            <img src="" alt="" />
            </div>
        <div>
                <div className="recent-products-container">
                    <h2>Catergories</h2>
                    <Row>

                    </Row>
            </div>   
        </div>
    </div>
    )
}

export default HomePage;