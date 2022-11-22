
const CartReducer = (state, action) => {
    
    switch(action.type) {
        case "ADD_TO_CART":
            const {id, color, amount, product} = action.payload;
            console.log(action.payload);
    }

    return state;  
}

export default CartReducer;