<template>
    <div>
        <nav class="navbar navbar-expand navbar-dark bg-dark">
            <div class="container">
                <div class="nav navbar-nav">
                    <router-link to="/" class="nav-tem nav-link active">Home</router-link>
                    <a class="nav-item nav-link" href="#">Product</a>
                </div>

                <div>
                    <div class="dropdown open">
                    <button 
                    class="btn btn-secondary dropdown-toggle" 
                    type="button" 
                    id="triggerId" 
                    data-bs-toggle="dropdown" 
                    aria-haspopup="true"
                    aria-expanded="false"
                    >{{ cartItemCount }} Cart</button>
                        <div class="dropdown-menu p-2" style="min-width:320px; right:0; left:0; " aria-labelledby="triggerId" @click="event.stopPropagation()">
                            <div v-for="item in cart" :key="item.product.id">
                                <div class="px-2 d-flex justify-content-between">
                                    <div >
                                        <strong>{{ item.product.title }}</strong>
                                        <br />{{ item.quantity }} x ${{ item.product.price }}
                                    </div>
                                    <div>
                                        <a href="#" class="badge bg-secondary">remove</a>
                                    </div>
                                </div>
                            </div>

                            <hr />
                            <div class="d-flex justify-content-between">
                                <span>Total: ${{ cartTotalPrice }}</span>
                                <a href="#">Clear Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>        
    </div>
</template>

<script>

export default {
    computed: {
        cart() {
            return this.$store.state.cart;
        },

        cartItemCount() {
            return this.$store.getters.cartItemCount;
        },

        cartTotalPrice() {
            return this.$store.getters.cartTotalPrice;
        },

        mounted() {
            return this.$store.dispatch('getCartItems')
        }
    }
}
</script>

<style>
</style>