
const CartReducer = (state, action) => {
    
    switch(action.type) {
        case "ADD_TO_CART":
            const {id, color, amount, product} = action.payload;
            // console.log(action.payload);

            const cartProduct = {
                id : id+color,
                name : product.name,
                color,
                amount,
                price : product.price,
                image : product.image[0].url,
                price : product.price,
                max : product.stock
            }

            return {
                ...state,
                cart : [...state.cart, cartProduct],
            };
    }

    return state;  
}

export default CartReducer;