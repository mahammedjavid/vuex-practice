const cartStore = {
    namespaced: true,
    state() {
        return {
            items: [],
            total: 0, qty: 0
        }
    },
    mutations: {
        addToCart(state, payload) {
            const productData = payload
            const productInCartIndex = state.items.findIndex(
                (ci) => ci.productId === productData.id
            );

            if (productInCartIndex >= 0) {
                state.items[productInCartIndex].qty++;
            } else {
                const newItem = {
                    productId: productData.id,
                    title: productData.title,
                    image: productData.image,
                    price: productData.price,
                    qty: 1,
                };
                state.items.push(newItem);
            }
            state.qty++;
            state.total += productData.price;
        },
        removeFromCart(state, prodId) {
            const productInCartIndex = state.items.findIndex(
                (cartItem) => cartItem.productId === prodId
            );
            const prodData = state.items[productInCartIndex];
            state.items.splice(productInCartIndex, 1);
            state.qty -= prodData.qty;
            state.total -= prodData.price * prodData.qty;
        },
    },
    getters: {
        cartTotal(state) {
            return state.total.toFixed(2);
        },
        allCartItem(state) {
            return state.items
        },
        totalQuantity(state) {
            return state.qty
        }
    },
    actions: {
        addItemToCart(context, prodId) {
            const allProduct = context.rootGetters['productStore/getProducts']
            const product = allProduct.find(prod => prod.id === prodId)
            context.commit('addToCart', product);
        },
        removeProductFromCart(context, payload) {
            context.commit('removeFromCart', payload);
        }
    }
}
export default cartStore