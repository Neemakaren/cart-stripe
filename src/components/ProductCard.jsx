import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import { useContext } from 'react';

const ProductCard = (props) => {
    const product = props.product;
    const cart = useContext(CartContext)
    const  productQuantity = cart.getProductQuantity(product.id);
    // console.log(cart.items)
  return (
    <Card>
        <Card.Body>
           <img src={product.image} className='img img-fluid' />
            <Card.Title>{product.Title}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
            {/* <Button variant='dark'  onClick={() => cart.addOneToCart(product.id) }>Add To Cart</Button> */}
            { productQuantity > 0 ?
                    <>
                        <Form as={Row}>
                            <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
                            <Col sm="6">
                                <Button sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</Button>
                                <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
                            </Col>
                        </Form>
                        <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove from cart</Button>
                    </>
                    :
                    <Button variant="dark" onClick={() => cart.addOneToCart(product.id)}>Add To Cart</Button>
                }
        </Card.Body>
    </Card>
  )
}

export default ProductCard