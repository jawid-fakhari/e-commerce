import { IProduct } from "../../type/Servers";
import { GoHeart, GoComment, GoShareAndroid } from "react-icons/go";

//product item type è la stessa del type di products
type TProductItem = IProduct;

function ProductItem({ title, price, image }: TProductItem) {
    return (
        <div className="w-[350px] flex flex-col gap-2 mb-8">
            <div className="w-[350px] h-[355px] bg-gray-100 flex items-center justify-center rounded-md overflow-hidden">
                <img
                    className="w-full h-full object-contain p-2"
                    src={image}
                    alt={title}
                />
            </div>
            <div className="mt-2">
                <p className="text-[16px] font-medium text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis">
                    {title}
                </p>
                <p className="text-[16px] font-medium text-purple-600">
                    {price}$
                </p>
            </div>
            <hr className="border-gray-300 my-2" />
            <div className="flex gap-4">
                <span className="text-gray-600">
                    <GoHeart />
                </span>
                <span className="text-gray-600">
                    <GoComment />
                </span>
                <span className="text-gray-600">
                    <GoShareAndroid />
                </span>
            </div>
        </div>
    );
}

export default ProductItem;
