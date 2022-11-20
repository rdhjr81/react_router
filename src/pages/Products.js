import { Link } from "react-router-dom";

const Products = () =>{ 
    return(
        <section>
            <h1>The Products Page</h1>
            <ul>
                <li><Link to='/products/book'>Book</Link></li>
                <li><Link to='/products/shovel'>Shovel</Link></li>
                <li><Link to='/products/bouncy-ball'>Bouncy Ball</Link></li>
            </ul>

        </section>
    );
};
export default Products;