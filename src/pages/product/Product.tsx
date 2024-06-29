import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../components/container/Container'
import Button from '../../components/button/Button';


function Product() {

    const params = useParams()

  return (
    <div>
      <Container>
        <div className="h-auto shadow mt-4 grid grid-cols-12">
          <div className="col-span-4 p-4">
            <img
              src="https://www.evosmart.it/wp-content/uploads/2023/08/nokia-150-960x540.jpg"
              alt=""
            />
            <Button
            className='mt-2 w-full ip-4'
              variant="primary" //uso di variant nel nostro componente che lo passa come props
              onClick={() => {
                alert("Product added to the Card");
              }}
            >
              Add to Cart
            </Button>
          </div>
          <div className="col-span-8 py-2">
            <h1 className="text-xl font-semibold">Product Name</h1>
            <div>
              <p>Price: 30$</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                fugiat, commodi, ad error quam magnam recusandae reiciendis ex
                inventore aliquam quibusdam praesentium, optio quaerat et.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product