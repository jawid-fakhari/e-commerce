import { useEffect, useState } from "react";
import ProductItem from "../../components/productItem/ProductItem";
import Container from "../../components/container/Container";
import { Link } from "react-router-dom";
import { getProducts } from "../../services/api";
import { IProduct } from "../../type/Servers";
import Footer from "../../components/footer/Footer";

function Store() {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        getProducts().then((result) => {
            setProducts(result);
        });
    }, []);

    return (
        <>
            <Container>
                <div className="flex flex-wrap justify-center gap-8 my-20">
                    {products.map((item) => (
                        <Link
                            key={item.id}
                            to={`/product/${item.id}`}
                            className="block hover:opacity-90 transition-opacity"
                        >
                            <ProductItem {...item} />
                        </Link>
                    ))}
                </div>
            </Container>
        </>
    );
}

export default Store;
