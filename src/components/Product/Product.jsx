import React, {useContext} from 'react';
import { contentApi, contentApiTwo } from '../Home/Home';

const Product = () => {

    const [sProduct, setProduct] = useContext(contentApi);
    const [cart, setCart] = useContext(contentApiTwo);


    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);

    }


    return (
        <>
            {
                sProduct.map(product => <div className='s-item'>
                <div className="flex">
                    <div className="image">
                        <img src={product.img} alt="" />
                    </div>
                    <div className="content">
                        <h4>{product.name}</h4>
                        <p>Price : {product.price} $</p>
                        <span>Category : {product.category}</span>
                        <span>Rating : {product.ratings} Star</span>
                        <div>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                        </div>
                    </div>
                    <button onClick={() => addToCart(product)}>Add To Cart
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
                        <path d="M18.2185 14.2222H9.13044L9.33335 15.3333H17.6548C18.1323 15.3333 18.4862 15.8299 18.3804 16.3514L18.2093 17.1943C18.7888 17.5093 19.1883 18.1746 19.1883 18.9445C19.1883 20.0279 18.3972 20.9043 17.4267 20.8887C16.5021 20.8738 15.7417 20.0334 15.7168 18.9982C15.7031 18.4326 15.9054 17.9201 16.2377 17.5555H9.7382C10.0599 17.9085 10.2598 18.4002 10.2598 18.9445C10.2598 20.0491 9.43736 20.9386 8.44089 20.8867C7.5561 20.8407 6.83651 20.04 6.79001 19.0493C6.75411 18.2843 7.11354 17.6099 7.65964 17.2582L5.48185 5.33334H3.31534C2.90441 5.33334 2.57129 4.96025 2.57129 4.5V3.94445C2.57129 3.4842 2.90441 3.11111 3.31534 3.11111H6.49394C6.84739 3.11111 7.15205 3.38962 7.22289 3.77743L7.50705 5.33334H19.6841C20.1615 5.33334 20.5154 5.8299 20.4096 6.35136L18.944 13.5736C18.8671 13.953 18.5659 14.2222 18.2185 14.2222ZM15.2201 8.94445H13.732V7.55556C13.732 7.24872 13.5099 7 13.236 7H12.7399C12.466 7 12.2439 7.24872 12.2439 7.55556V8.94445H10.7558C10.4818 8.94445 10.2598 9.19316 10.2598 9.50001V10.0556C10.2598 10.3624 10.4818 10.6111 10.7558 10.6111H12.2439V12C12.2439 12.3068 12.466 12.5556 12.7399 12.5556H13.236C13.5099 12.5556 13.732 12.3068 13.732 12V10.6111H15.2201C15.4941 10.6111 15.7161 10.3624 15.7161 10.0556V9.50001C15.7161 9.19316 15.4941 8.94445 15.2201 8.94445Z" fill="#0E161A"/>
                        </svg>
                    </button>
                </div>
            </div>)
            }
            
        </>
    );
};
