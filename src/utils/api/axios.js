const axios = require('axios');
export const post = {
    createShop: async ( data ) => axios.post('/api/v1/commerces/create/shop', data ),
    uploadLogoShop: async( file ) => {
        const data = new FormData()
        data.append('file', file )
        data.append('upload_preset', 'i7pbptj9')

        return await axios.post('https://api.cloudinary.com/v1_1/magnates/upload', data)
    }
}

export const get = {
    shopById: async ( id ) => await axios.get(`http://localhost:3000/api/v1/commerces/get/shops/${id}`),
    productById: async ( id ) => await axios.get(`http://localhost:3000/api/v1/products/get/product/${id}`),
    allShops: async () =>await axios(`http://localhost:3000/api/v1/commerces/get/shops`),
    shopProducts: async (shopId) =>await axios(`http://localhost:3000/api/v1/commerces/get/products/${shopId}`),
    shopSales: async (shopId) =>await axios(`http://localhost:3000/api/v1/commerces/get/sales/${shopId}`),
    shopConfiguration: async (shopId) =>await axios(`http://localhost:3000/api/v1/commerces/get/configuration/${shopId}`),
    shopCategories: async (shopId) =>await axios(`http://localhost:3000/api/v1/commerces/get/categories/${shopId}`),
    shopProduct: async (shopId, productId) =>await axios(`http://localhost:3000/api/v1/products/get/product/${shopId}/${productId}`),
}