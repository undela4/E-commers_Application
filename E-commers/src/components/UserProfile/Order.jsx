import React, { useState } from 'react'
import { Item } from './Myorders';
import './myorders.css';
import { cancel_order } from './helpers';
export default function Order(item) {
    
    const [reason,setreason]=useState(false);
    const [option,setoption]=useState('');
    console.log(option)

function onsubmit()
{
  if(option!='Select Reason for cancel....')
  {
    if (confirm("Make sure you want to cancel the order ?") == true) {
          cancel_order(item.item[0]._id,option);
        }
  }
    
}
    
  return (
    <div className='order'>
    <Item orders={item.item}  />

   <div className="m-4 p-2 row">
   <div className="col-md-5">
   <Progress od={item.item[0].date_of_order.substring(0,10)}
       status={item.item[0].delivery_status!='pending' ? item.item[0].delivery_status.substring(0,9)+" due to "+ item.item[0].delivery_status.substring(9,) :`Delivered by  ${item.item[0].delivery_date.substring(0,10)}`} 
     />
   </div>
   {

   item.item[0].delivery_status==="pending" ? (<div className="col-md-6">
     <button className="btn btn-danger w-100"
     style={{display:!reason?"block":"none"}} 
      onClick={()=>setreason(true)}>Cancel</button>
     {
     reason&&<div className='d-flex flex-column gap-4 w-100'>
        <Select setoption={setoption} />
        <button className='btn btn-outline-danger' disabled={option==''?true:false} onClick={onsubmit} >Cancel</button>
 
     </div>
 }

    </div>):(
      <div className="pt-0 can-img col-md-5">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/cancel-order-illustration-5225054-4363243.png"/>
      </div>
    )
   }
  

    </div>

    </div>
  )
}



import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';



const Progress = ({od,status}) => (
  <Timeline
    mode="left"
    items={[
      {
        children:`Order Placed ${od}`,
        color: 'green',
      },
      {
        children:`Accepted ${od}`,
        color: 'green',
      },
      {
        children:`Packed ${od}`,
        color: 'green',
      },
      {
        children:`Shipped`,
        color: 'orange',
      },
      {
        dot: (
          <ClockCircleOutlined
            style={{
              fontSize: '16px',
              color: 'orange'
            }}
          />
        ),
        children: `Out Of Delivery`,
      },
      {
        color: 'red',
        children:`${status}`,
      }
    ]}
    
  />
)



import Form from 'react-bootstrap/Form';
function Select({setoption}) {

function onchange(e){
    setoption(e.target.value);

}

    const options=["Delayed Delivery: Significant delays in delivery time.",
    "Customer Service: The customer was not satisfied with the service.",
    "Product Quality: The product did not meet the customer's expectations.",
    "Return Policy: The customer did not comply with the return policy.",
    "Shipping Issues: Problems with the shipping process.",
    "Payment Issues: Problems with the payment process.",
  
];

  return (
    <Form.Select aria-label="Default select example" onChange={onchange}>
      <option>Select Reason for cancel....</option>
     {
        options.map((item, index) => (
          <option key={index} value={item}>{item}</option>
        ))
     }
      
    </Form.Select>
  );
}


