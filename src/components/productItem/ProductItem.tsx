import React from "react";

function ProductItem() {
  return (
    <div className="shadow border rounded pb-2">
      <img
        className="rounded-t"
        src="https://www.evosmart.it/wp-content/uploads/2023/08/nokia-150-960x540.jpg"
        alt=""
      />
      <div className="flex justify-between p-4 mt-2">
        <h3>Nome del prodotto</h3>
        <span>55$</span>
      </div>
      <div className="px-4 mt-1">
        <p className="line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsum optio qui nesciunt officiis repellat!
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
