import { useEffect, useState } from "react";
import ProductItem from "../../components/productItem/ProductItem";
import Container from "../../components/container/Container";
import { Link } from "react-router-dom";
import { getProducts } from "../../services/api";
import { IProduct } from "../../type/Servers";

//pagina Store che mostra tutti i prodotti nello store

function Store() {
    //con useState settiamo i products, e dentro <IProducts[]> importiamo il type dei prodotti dal Servers.ts
    const [products, setProducts] = useState<IProduct[]>([]);

    //all'interno del useEffect importo func getProduct da api.ts e con metodo then prendo dati e setto products dai data ricevuti
    useEffect(() => {
        getProducts().then((result) => {
            setProducts(result);
        });
    }, []);

    return (
        <>
            <Container>
                <h1 className="text-2xl font-bold text-gray-800 my-6">
                    Newest Products
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((item) => (
                        <Link
                            key={item.id}
                            to={`/product/${item.id}`}
                            className="block transition-transform transform hover:scale-105"
                        >
                            {/* passare tutto data dei prodotti al comp. product item */}
                            <ProductItem {...item} />
                        </Link>
                    ))}
                </div>
            </Container>
        </>
    );
}

export default Store;
