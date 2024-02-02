const endpoints = {
    fetchProduct: {
        products: "/products",
        singleProduct: (id?: number)=>`/products/${id}`
    }
}

export default endpoints