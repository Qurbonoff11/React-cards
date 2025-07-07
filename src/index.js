import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

const notebookList = [
  {
    id: 3214,
    img: "https://mini-io-api.texnomart.uz/catalog/product/3579/357958/204658/a0de8f9e-9fca-41c4-b8d1-cf3390719599.webp",
    price: "13,990,000",
    brand: "ASUS TUF Gaming A15",
  },
  {
    id: 4597,
    img: "https://mini-io-api.texnomart.uz/catalog/product/3576/357619/204960/d9c3b9b7-fcd1-41f2-b8ca-1cd0bb8b1a40.webp",
    price: "9,990,000",
    brand: "ASUS Vivobook",
  },
  {
    id: 6578,
    img: "https://mini-io-api.texnomart.uz/catalog/product/3581/358172/208279/1e5ea295-8f61-4ae9-886c-bba53734d4ef.webp",
    price: "19,590,000",
    brand: "ASUS TUF Gaming F15",
  },
  {
    id: 3249,
    img: "https://mini-io-api.texnomart.uz/catalog/product/3581/358187/208221/69d92611-c363-42a1-893c-449a1c6ba955.webp",
    price: "7,990,000",
    brand: "Acer SF314-43",
  },
  {
    id: 9752,
    img: "https://mini-io-api.texnomart.uz/catalog/product/1024/102436/209903/21edd39b-7ff2-4da6-a627-38d1020a6234.png",
    price: "19,709,000",
    brand: "ASUS ROG Zephyrus",
  },
  {
    id: 2548,
    img: "https://mini-io-api.texnomart.uz/catalog/product/3585/358554/210190/583cb9e6-e8ac-41a1-b225-290e799bd8be.webp",
    price: "23,150,000",
    brand: "Apple M4",
  },
  {
    id: 1872,
    img: "https://mini-io-api.texnomart.uz/catalog/product/3580/358046/207577/844e22fd-4926-4acd-b3a7-39112ef746a4.webp",
    price: "5,588,000",
    brand: "Acer Aspire 3",
  },
  {
    id: 2975,
    img: "https://maxnepal.com.np/wp-content/uploads/2024/07/Honor-Magicbook-x15-i5-4.webp",
    price: "9,819,000",
    brand: "Honor MagicBook X15",
  },

]

const Productlist = ({props}) => {
  const {brand, price, img} = props
  return (
    <div className="product">
      <img src={img} alt={brand} />
      <div>
        <h2>Brand: {brand}</h2>
        <h4>Price: {price} so'm</h4>
      </div>
    </div>
  )
}

const Product = () => {
  return (
    <section className="section container">
      {
        notebookList.map((note) => <Productlist props={note} key={note.id}/>)
      }
    </section>
  )
}

const Main = () => {
  return <>
    <Product/>
  </>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
