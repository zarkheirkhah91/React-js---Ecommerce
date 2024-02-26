import React from 'react'
import './item.css'
import {useNavigate} from 'react-router-dom'

const Item = (props) => {
    let navigate = useNavigate();

    return (
        <div onClick={()=>{navigate(`/product-detail/${props.id}`)}} className='item'>
            
            {/* <Link to={`/productdetail/:${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt='' /></Link> */}
            
            <p>{props.name}</p>
            <div className='item-prices'>
                <div className='item-price.new'>
                    ${props.new_price}
                </div>
                <div className='item-price.old'>
                    ${props.old_price}
                </div>
            </div>
        </div>
    )
}

export default Item
