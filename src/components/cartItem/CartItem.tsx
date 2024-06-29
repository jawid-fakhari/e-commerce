import Button from "../button/Button";

function CartItem() {
  return (
    <div className="flex items-start gap-x-7 my-5">
      <img
        className="rounded w-1/4"
        src="https://media-assets.wired.it/photos/663c6add31d84e5170d75ae4/3:2/w_1029,h_686,c_limit/nokia%203210%204g.png"
        alt=""
      />
      <div className="">
        <h1 className="font-semibold">Product name</h1>
        <Button className="w-full my-1" variant="primary">
          +
        </Button>
        <Button className="w-full my-1" variant="secondary">
          -
        </Button>
        <Button className="w-full my-1" variant="pashmak">
          🗑️
        </Button>
        <div className=" w-full px-10 border-b-2 my-2">2</div>
      </div>
    </div>
  );
}

export default CartItem;
