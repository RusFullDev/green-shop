<script>
    export default {
       
        props:{
            product:Object
        },
      computed:{
isLiked(){
    const index = this.$store.state.likeProducts.findIndex(p=>p.id == this.product.id)
    return index !== -1
}
      },
        methods:{
            toogleLike(){
                this.$store.commit('toogleLikeProduct',this.product)
            } 
        }
    }
</script>
<template>
    <div>
        <div class="bg-gray-200 rounded p-5 relative">
            <button @click="toogleLike" class="absolute top-5 right-5">
                {{ isLiked ? '💘' : '🤍' }}
            </button>
            <img :src="product.thumbnail" alt="foto">
            <h1 class="text-2xl font-medium line-clamp-1 my-3"> {{product.title}}</h1>
            <p class="line-clamp-2 mb-3">{{product.description }}</p>
            <h1 class="text-2xl font-medium"> {{product.price}}$</h1>
  
    </div>
    </div>
</template>



<style  scoped>

</style>