let customer = [{
    name: 'Cust1',
    email: 'cust1@mail.com',
    phone: '+91-123-456-7890',
    no_of_times_shopped: 2,
    purchase_history: [
        {
            date_of_purchase: '01/07/2022',
            item_purchase: [
                {
                    product_name: 'Samsung Galaxy Y',
                    product_price: 12000
                },
                {
                    product_name: 'Mixer',
                    product_price: 4000
                },
            ]
        },
        {
            date_of_purchase: '30/06/2022',
            item_purchase: [
                {
                    product_name: 'Jeans',
                    product_price: 1200
                }
            ]
        }
    ],
    totalPurchaseAmount:function(){
        let s=0
        for(let i=0;i<this.purchase_history.length;i++){
            for(let j=0;j<this.purchase_history[i].item_purchase.length;j++){
                s+=this.purchase_history[i].item_purchase[j].product_price
            }
        }
        return s
    }
},
{
    name: 'Cust2',
    email: 'cust2@mail.com',
    phone: '+91-321-654-0987',
    no_of_times_shopped: 5,
    purchase_history: [
        {
            date_of_purchase: '11/07/2022',
            item_purchase: [
                {
                    product_name: 'Power bank',
                    product_price: 12000
                },
                {
                    product_name: 'Rubix Cube',
                    product_price: 4000
                },
            ]
        },
        {
            date_of_purchase: '05/07/2022',
            item_purchase: [
                {
                    product_name: 'Bag',
                    product_price: 1200
                }
            ]
        },
        {
            date_of_purchase: '04/07/2022',
            item_purchase: [
                {
                    product_name: 'Earphone',
                    product_price: 4000
                },
                {
                    product_name: 'Mouse',
                    product_price: 500
                },
            ]
        },
        {
            date_of_purchase: '30/06/2022',
            item_purchase: [
                {
                    product_name: 'Jeans',
                    product_price: 1200
                }
            ]
        },
        {
            date_of_purchase: '26/06/2022',
            item_purchase: [
                {
                    product_name: 'Keyboard',
                    product_price: 2000
                }
            ]
        }
    ],
    totalPurchaseAmount:function(){
        let s=0
        for(let i=0;i<this.purchase_history.length;i++){
            for(let j=0;j<this.purchase_history[i].item_purchase.length;j++){
                s+=this.purchase_history[i].item_purchase[j].product_price
            }
        }
        return s
    }
},
{
    name: 'Cust3',
    email: 'cust3@mail.com',
    phone: '+91-451-654-0987',
    no_of_times_shopped: 3,
    purchase_history: [
        {
            date_of_purchase: '09/07/2022',
            item_purchase: [
                {
                    product_name: 'Mi note 9 pro',
                    product_price: 21000
                },
                {
                    product_name: 'Electric kettle',
                    product_price: 4000
                },
            ]
        },
        {
            date_of_purchase: '30/06/2022',
            item_purchase: [
                {
                    product_name: 'Hard bed',
                    product_price: 15000
                }
            ]
        },
        {
            date_of_purchase: '13/08/2022',
            item_purchase: [
                {
                    product_name: 'Table',
                    product_price: 6000
                }
            ]
        }
    ],
    totalPurchaseAmount:function(){
        let s=0
        for(let i=0;i<this.purchase_history.length;i++){
            for(let j=0;j<this.purchase_history[i].item_purchase.length;j++){
                s+=this.purchase_history[i].item_purchase[j].product_price
            }
        }
        return s
    }
},
{
    name: 'Cust4',
    email: 'cust4@mail.com',
    phone: '+91-974-954-0897',
    no_of_times_shopped: 6,
    purchase_history: [
        {
            date_of_purchase: '11/07/2022',
            item_purchase: [
                {
                    product_name: 'Earbuds',
                    product_price: 3500
                },
                {
                    product_name: 'Trimmer',
                    product_price: 2000
                },
            ]
        },
        {
            date_of_purchase: '05/07/2022',
            item_purchase: [
                {
                    product_name: 'Hair Dryer',
                    product_price: 8000
                }
            ]
        },
        {
            date_of_purchase: '04/07/2022',
            item_purchase: [
                {
                    product_name: 'Utensils',
                    product_price: 4000
                },
                {
                    product_name: 'Tablet',
                    product_price: 25000
                },
            ]
        },
        {
            date_of_purchase: '30/06/2022',
            item_purchase: [
                {
                    product_name: 'Dslr',
                    product_price: 80000
                }
            ]
        },
        {
            date_of_purchase: '30/06/2022',
            item_purchase: [
                {
                    product_name: 'Jeans',
                    product_price: 1200
                }
            ]
        },
        {
            date_of_purchase: '26/06/2022',
            item_purchase: [
                {
                    product_name: 'Keyboard',
                    product_price: 2000
                }
            ]
        }
    ],
    totalPurchaseAmount:function(){
        let s=0
        for(let i=0;i<this.purchase_history.length;i++){
            for(let j=0;j<this.purchase_history[i].item_purchase.length;j++){
                s+=this.purchase_history[i].item_purchase[j].product_price
            }
        }
        return s
    }
},
{
    name: 'Cust5',
    email: 'cust5@mail.com',
    phone: '+91-876-456-7890',
    no_of_times_shopped: 2,
    purchase_history: [
        {
            date_of_purchase: '02/08/2022',
            item_purchase: [
                {
                    product_name: 'Refrigerator',
                    product_price: 22000
                },
                {
                    product_name: 'Water Purifier',
                    product_price: 23000
                },
            ]
        },
        {
            date_of_purchase: '30/09/2022',
            item_purchase: [
                {
                    product_name: 'Tubelight',
                    product_price: 1200
                }
            ]
        }
    ],
    totalPurchaseAmount:function(){
        let s=0
        for(let i=0;i<this.purchase_history.length;i++){
            for(let j=0;j<this.purchase_history[i].item_purchase.length;j++){
                s+=this.purchase_history[i].item_purchase[j].product_price
            }
        }
        return s
    }
}
];

console.log(`1. Customer Details\n`)
let arr= customer.map(item1=>{
    return {
        name: item1.name,
        email: item1.email,
        phone: item1.phone,
        no_of_times_shopped:item1.no_of_times_shopped,
        history:item1.purchase_history,
        totalPurchaseAmount:item1.totalPurchaseAmount()
    };
})

console.log(arr);


console.log(`\n2. Name of customer who had shopped more than 5 times are : `);
customer.filter(item=>(
    item.no_of_times_shopped>5
)).forEach(value=>{
    console.log(value.name)
})


console.log(`\n3. The name and total purchase amount all the shopping a customer did : `);
customer.forEach(value=>{
    console.log(`${value.name}-${value.totalPurchaseAmount()}`)
})