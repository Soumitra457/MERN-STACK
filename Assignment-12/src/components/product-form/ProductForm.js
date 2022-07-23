import React, { useState } from 'react';
import './product-form.css';
const ProductForm =(props) =>{
    const [formInput,setFormInput] = useState({
        productName:'',
        productPrice:'',
        productImage:'',
        productDescription:'',
    })

    const productNameHandler = (event) =>{
    setFormInput((prevState)=>{
    return{
        ...prevState,
        productName:event.target.value
    }
    })
    }

    const productPriceHandler = (event) =>{
        setFormInput({
            ...formInput,
            productPrice:event.target.value
        });
    }

    const productImageHandler = (event) =>{
        setFormInput({
            ...formInput,
            productImage:event.target.value
        });
    }

    const productDescriptionHandler = (event) =>{
        setFormInput({
            ...formInput,
            productDescription:event.target.value
        });
    }

    const formSubmitHandler = (event) =>{

        let error =''
        if(formInput.productName =='' &&  error ==''){
            error='Please Enter Product Name';
            alert(error);
            console.log(error);
        }

        else if(formInput.productPrice =='' &&  error ==''){
            error='Please Enter Product Price';
            alert(error);
            console.log(error);
        }
        
        else{
            console.log(formInput);
            props.onProductAdded(formInput);
        }
        event.preventDefault();
    }

    return(
        <div className ="form-container">
            <h1>Add New Product</h1>
            <form onSubmit={formSubmitHandler}>
                <div className="form-input">
                    <input type="text" placeholder="Product Name" onChange={productNameHandler}/>
                </div>
                <div className="form-input">
                    <input type="text" placeholder="Product Price" onChange={productPriceHandler}/>
                </div>
                <div className="clearfix"></div>
                <div className="form-input">
                    <input type="text" placeholder="Product Image" onChange={productImageHandler}/>
                </div>
                <div className="form-input">
                    <input type="text" placeholder="Product Description" onChange={productDescriptionHandler}/>
                </div>
                <div className="clearfix"></div>
                <div className="form-input">
                    <button className='button'>Add Product</button>                    
                </div>
                <div className="clearfix"></div>
            </form>
        </div>
    )
}

export default ProductForm;