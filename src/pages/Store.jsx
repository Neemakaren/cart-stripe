import { ProductsArray } from "../ProductsStore";
import { Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";

const Store = () => {
  return (
   <>
    <h1 align="center" className="p-3">Welcome to the store!</h1>
            <Row xs={2} md={3} className="g-4">
                {ProductsArray.map((product, idx) => (
                    <Col align="center" key={idx}>
                        <ProductCard product={product}/>
                    </Col>
                ))}
            </Row>
   </>
  )
}

export default Store