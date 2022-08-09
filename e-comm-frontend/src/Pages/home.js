import { Link } from "react-router-dom";
import '../StylePages/home.css';

function HomePage() {

     const Catergories = [
    {
        name: "Technology",
        img: ""
    },
    {
        name: "Phones",
        img: ""
    },
    {
        name: "Laptops",
        img: ""
    }
]

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
                 
                        {Catergories.map((catergory) => {  
                           return <p>{catergory.name}</p>
                        })}
               
            </div>   
        </div>
    </div>
    )
}

export default HomePage;