import {useState} from 'react';
import ProductForm from './components/product-form/ProductForm';
import { Product } from './components/product/Product';
import './App.css'
function App() {
  const [products,setProducts]=useState([
    {
      product_name:"Range Rover",
      product_image:"https://m.economictimes.com/thumb/msid-69429504,width-1200,height-900,resizemode-4,imgsize-586493/jlr-unveils-petrol-variant-of-range-rover-sport-at-rs-86-71-lakh.jpg",
      product_price:"Rs.2,50,00,000",
      product_description:"The Land Rover Range Rover (generally known simply as the Range Rover) is a 4x4 motor car produced by Land Rover, a marque and sub-brand of Jaguar Land Rover. The Range Rover line was launched in 1970 by British Leyland and is now in its fifth generation."
    },
    {
      product_name:"Cruise Ship",
      product_image:"https://www.marineinsight.com/wp-content/uploads/2019/08/Cruise-ships-1.png",
      product_price:"Rs.9000000",
      product_description:"Cruise ships are large passenger ships used mainly for vacationing. Unlike ocean liners, which are used for transport, cruise ships typically embark on round-trip voyages to various ports-of-call, where passengers may go on tours known as shore excursions."
    }
  ]);
  const addnewProductHandler=(product)=>{
    console.log('Product is Added');
    const productObj ={
      product_name:product.productName,
      product_price:product.productPrice,
      product_image:product.productImage,
      product_description:product.productDescription
    }
    setProducts([...products,productObj]);
  }
  return (
    <div className="App">
      <ProductForm onProductAdded ={addnewProductHandler}/>
      <h1 className='h1'><u>PRODUCTS</u></h1>
      {products.map((product,index)=>
      <Product key={index} pname={product.product_name}
      pprice={product.product_price}
      pimage={product.product_image}
      description={product.product_description}/>
      )}
    </div>
  );
}

export default App;