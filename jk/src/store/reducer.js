const initState = {
    cart: {
        cartlist: []
    }

}

function reducer(state = initState, action) {

    switch (action.type) {

        // {type:'ADD_TO_CART',}
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: {
                    ...state.cart,
                    cartlist: [action.goods, ...state.cart.cartlist]
                }
            }

        // {type:'REMOVE_FROM_CART',_id
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: {
                    ...state.cart,
                    cartlist: state.cart.cartlist.filter(item => item._id !== action._id)
                }
            }
        // {type:"CLEAR_CART"}
        case 'CLEAR_CART':
            return {
                ...state,
                cart: {
                    ...state.cart,
                    cartlist: []
                }
            }

        //{type:'CHANGE_QTY'，_id,qty}
        case 'CHANGE_QTY':
            const cartlist = state.cart.caartlist.map(item => {
                if (item._id === action._id) {
                    item.qty = action.qty
                }
            })
            return {
                ...state,
                cart: {
                    ...state.cart,
                    cartlist: []
                }
            }
    }
}

export default reducer