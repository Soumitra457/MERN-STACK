import { Product } from './components/Product'

function App() {
  const product_arr=[
    {
      product_name:"Range Rover",
      product_image:"https://imgd.aeplcdn.com/1200x900/cw/ec/38708/2019-Range-Rover-Sentinel-150037.jpg?wm=0",
      product_price:"$250,000 ",
    },
    {
      product_name:"Refrigerator",
      product_image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHR4OdYJHv0YsJUhUveYo9FOHxYCqllxhkuA&usqp=CAU",
      product_price:"$625",
    },
    {
      product_name:"Washing Machine",
      product_image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHJKpnvOsfgvHqiBDYGaVINCPDTYrzaPyZjA&usqp=CAU",
      product_price:"$312.88",
    }
  ]
  return (
    <div className="App">
      <h1><center><u>PRODUCTS</u></center></h1>
      {product_arr.map((ele)=>{
          return <Product key={ele} {...ele}/>
    })}     
    </div>
  );
}
export default App;