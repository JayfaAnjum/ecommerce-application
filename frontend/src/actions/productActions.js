import axios from 'axios';
import { productsFail, productsSuccess, productsRequest, adminProductsRequest, adminProductsSuccess, adminProductsFail } from '../slices/productsSlice';
import { productFail, productSuccess, productRequest, createReviewRequest, createReviewSuccess, createReviewFail, newProductRequest, newProductSuccess, newProductFail, deleteProductRequest, deleteProductSuccess, deleteProductFail, updateProductRequest, updateProductSuccess, updateProductFail, reviewsRequest, reviewsSuccess, reviewsFail, deleteReviewRequest, deleteReviewSuccess, deleteReviewFail } from '../slices/productSlice';

export const getProducts = (keyword, price, category, rating, currentPage) => async (dispatch) => {

    try {  
        dispatch(productsRequest()) 
        let link = `${process.env.REACT_APP_API_URL}/api/v1/products?page=${currentPage}`;
        
        if(keyword) {
            link += `&keyword=${keyword}`
        }
        if(price) {
            link += `&price[gte]=${price[0]}&price[lte]=${price[1]}`
        }
        if(category) {
            link += `&category=${category}`
        }
        if(rating) {
            link += `&ratings=${rating}`
        }
        
        const { data }  =  await axios.get(link,{withCredentials: true});
        dispatch(productsSuccess(data))
    } catch (error) {
        //handle error
        dispatch(productsFail(error.response.data.message))
    }
    
}


export const getProduct = id => async (dispatch) => {

    try {  
        dispatch(productRequest()) 
        const { data }  =  await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/product/${id}`,{withCredentials: true});
        dispatch(productSuccess(data))
    } catch (error) {
        //handle error
        dispatch(productFail(error.response.data.message))
    }
    
}

export const createReview = reviewData => async (dispatch) => {

    try {  
        dispatch(createReviewRequest()) 
        const config = {
            headers : {
                'Content-type': 'application/json'
            },
            withCredentials: true
        }
        const { data }  =  await axios.put(`${process.env.REACT_APP_API_URL}/api/v1/review`,reviewData, config);
        dispatch(createReviewSuccess(data))
    } catch (error) {
        //handle error
        dispatch(createReviewFail(error.response.data.message))
    }
    
}

export const getAdminProducts  =  async (dispatch) => {

    try {  
        dispatch(adminProductsRequest()) 
        const { data }  =  await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/admin/products`,{withCredentials: true});
        dispatch(adminProductsSuccess(data))
    } catch (error) {
        //handle error
        dispatch(adminProductsFail(error.response.data.message))
    }
    
}

export const createNewProduct  =  productData => async (dispatch) => {

    try {  
        dispatch(newProductRequest()) 
        const { data }  =  await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/admin/product/new`, productData,{withCredentials: true});
        dispatch(newProductSuccess(data))
    } catch (error) {
        //handle error
        dispatch(newProductFail(error.response.data.message))
    }
    
}

export const deleteProduct  =  id => async (dispatch) => {

    try {  
        dispatch(deleteProductRequest()) 
        await axios.delete(`${process.env.REACT_APP_API_URL}/api/v1/admin/product/${id}`,{withCredentials: true});
        dispatch(deleteProductSuccess())
    } catch (error) {
        //handle error
        dispatch(deleteProductFail(error.response.data.message))
    }
    
}

export const updateProduct  =  (id, productData) => async (dispatch) => {

    try {  
        dispatch(updateProductRequest()) 
        const { data }  =  await axios.put(`${process.env.REACT_APP_API_URL}/api/v1/admin/product/${id}`, productData,{withCredentials: true});
        dispatch(updateProductSuccess(data))
    } catch (error) {
        //handle error
        dispatch(updateProductFail(error.response.data.message))
    }
    
}


export const getReviews =  id => async (dispatch) => {

    try {  
        dispatch(reviewsRequest()) 
        const { data }  =  await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/admin/reviews`,{params: {id}},{withCredentials: true});
        dispatch(reviewsSuccess(data))
    } catch (error) {
        //handle error
        dispatch(reviewsFail(error.response.data.message))
    }
    
}

export const deleteReview =  (productId, id) => async (dispatch) => {

    try {  
        dispatch(deleteReviewRequest()) 
        await axios.delete(`${import.meta.env.VITE_URL}/api/v1/admin/review`,{params: {productId, id}},{withCredentials: true});
        dispatch(deleteReviewSuccess())
    } catch (error) {
        //handle error
        dispatch(deleteReviewFail(error.response.data.message))
    }
    
}