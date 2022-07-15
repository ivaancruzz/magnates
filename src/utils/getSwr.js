import useSWR from 'swr'
const axios = require('axios');
const fetcher = async (url) =>await axios(url).then(res => res.data)
export  function getUserData( ){
    const { data, error, mutate } = useSWR(`http://localhost:3000/api/v1/users/get/data`, fetcher)

    return {
        data,
        isLoading: !error && !data,
        isError: error,
        mutate
    }

}

export  function getUserShops( ){
    const { data, error } = useSWR(`http://localhost:3000/api/v1/users/get/commerces`, fetcher)

    return {
        shops: data,
        isLoading: !error && !data,
        isError: error
    }

}

export  function getShopById( id ){
    const { data, error } = useSWR(`http://localhost:3000/api/v1/commerces/get/shops/${shop}`, fetcher)

    return {
        shop: data,
        isLoading: !error && !data,
        isError: error
    }

}

export function getAllShopProducts( shop ){
    const { data, error } = useSWR(`http://localhost:3000/api/v1/commerces/get/products/${shop}`, fetcher)

    return {
        products: data,
        isLoading: !error && !data,
        isError: error
    }

}

export function getShopCategories( shop ){
    const { data, error } = useSWR(`http://localhost:3000/api/v1/commerces/get/categories/${shop}`, fetcher)

    return {
        categories: data,
        isLoading: !error && !data,
        isError: error
    }

}

export function getShopSales( shop ){
    const { data, error } = useSWR(`http://localhost:3000/api/v1/commerces/get/sales/${shop}`, fetcher)

    return {
        sales: data,
        isLoading: !error && !data,
        isError: error
    }

}

export function getShopOrders( shop ){
    const { data, error } = useSWR(`http://localhost:3000/api/v1/commerces/get/orders/${shop}`, fetcher)

    return {
        orders: data,
        isLoading: !error && !data,
        isError: error
    }

}

export function getShopConfigurations( shop ){
    const { data, error } = useSWR(`http://localhost:3000/api/v1/commerces/get/configurations/${shop}`, fetcher)

    return {
        configurations: data,
        isLoading: !error && !data,
        isError: error
    }

}

export  function getProduct( shop, product ){
    const { data, error } = useSWR(`http://localhost:3000/api/v1/products/get/product/${shop}/${product}`, fetcher)

    return {
        product: data,
        isLoading: !error && !data,
        isError: error
    }

}