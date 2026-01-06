import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    product: {},
    isReviewSubmitted: false,
    isProductCreated: false,
    isProductDeleted: false,
    isProductUpdated: false,
    isReviewDeleted: false,
    reviews: [],
    error: null
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        // Product detail
        productRequest: (state) => { state.loading = true },
        productSuccess: (state, action) => { state.loading = false; state.product = action.payload.product },
        productFail: (state, action) => { state.loading = false; state.error = action.payload },

        // Review
        createReviewRequest: (state) => { state.loading = true },
        createReviewSuccess: (state) => { state.loading = false; state.isReviewSubmitted = true },
        createReviewFail: (state, action) => { state.loading = false; state.error = action.payload },
        clearReviewSubmitted: (state) => { state.isReviewSubmitted = false },

        // Clear errors & product
        clearError: (state) => { state.error = null },
        clearProduct: (state) => { state.product = {} },

        // New product
        newProductRequest: (state) => { state.loading = true },
        newProductSuccess: (state, action) => { state.loading = false; state.product = action.payload.product; state.isProductCreated = true },
        newProductFail: (state, action) => { state.loading = false; state.error = action.payload; state.isProductCreated = false },
        clearProductCreated: (state) => { state.isProductCreated = false },

        // Delete product
        deleteProductRequest: (state) => { state.loading = true },
        deleteProductSuccess: (state) => { state.loading = false; state.isProductDeleted = true },
        deleteProductFail: (state, action) => { state.loading = false; state.error = action.payload },
        clearProductDeleted: (state) => { state.isProductDeleted = false },

        // Update product
        updateProductRequest: (state) => { state.loading = true },
        updateProductSuccess: (state, action) => { state.loading = false; state.product = action.payload.product; state.isProductUpdated = true },
        updateProductFail: (state, action) => { state.loading = false; state.error = action.payload },
        clearProductUpdated: (state) => { state.isProductUpdated = false },

        // Reviews
        reviewsRequest: (state) => { state.loading = true },
        reviewsSuccess: (state, action) => { state.loading = false; state.reviews = action.payload.reviews },
        reviewsFail: (state, action) => { state.loading = false; state.error = action.payload },

        // Delete review
        deleteReviewRequest: (state) => { state.loading = true },
        deleteReviewSuccess: (state) => { state.loading = false; state.isReviewDeleted = true },
        deleteReviewFail: (state, action) => { state.loading = false; state.error = action.payload },
        clearReviewDeleted: (state) => { state.isReviewDeleted = false },
    }
});

export const {
    productRequest,
    productSuccess,
    productFail,
    createReviewFail,
    createReviewRequest,
    createReviewSuccess,
    clearError,
    clearReviewSubmitted,
    clearProduct,
    newProductFail,
    newProductSuccess,
    newProductRequest,
    clearProductCreated,
    deleteProductFail,
    deleteProductRequest,
    deleteProductSuccess,
    clearProductDeleted,
    updateProductFail,
    updateProductRequest,
    updateProductSuccess,
    clearProductUpdated,
    reviewsRequest,
    reviewsFail,
    reviewsSuccess,
    deleteReviewFail,
    deleteReviewRequest,
    deleteReviewSuccess,
    clearReviewDeleted
} = productSlice.actions;

export default productSlice.reducer;
