import { IProduct } from "../../type/Servers";

type TProductItem = IProduct;

function ProductItem({ title, price, image, description }: TProductItem) {
    return (
        <div className="shadow-lg border rounded-lg overflow-hidden bg-white transition hover:shadow-xl">
            <img className="w-full h-48 object-cover" src={image} alt={title} />
            <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {title}
                </h3>
                <p className="text-xl font-semibold text-blue-600 mb-3">
                    {price}$
                </p>
                <p className="text-gray-600 text-sm line-clamp-2">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default ProductItem;
