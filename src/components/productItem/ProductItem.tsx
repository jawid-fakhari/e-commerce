import { Products } from "../../type/Servers";

type TProductItem = Products;

function ProductItem({ title, price, image, description }: TProductItem) {
    return (
        <div className="shadow border rounded pb-2">
            <img className="rounded-t" src={image} alt="" />
            <div className="p-4 mt-2">
                <h3 className="py-2">{title}</h3>
                <p className="text-xl font-semibold py-2">{price}$</p>
            </div>
            <div className="px-4 mt-1">
                <p className="line-clamp-2">{description}</p>
            </div>
        </div>
    );
}

export default ProductItem;
