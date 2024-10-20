import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Products {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
        width: number;
        height: number;
        depth: number
    },
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: reviews[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: {
        createdAt: string;
        updatedAt: string;
        barcode: string;
        qrCode: string;
    },
    images: string[];
    thumbnail: string;
}

interface reviews {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string
};

interface ProductState {
    products: Products[],
    loading: boolean;
    error: string | null;
    status: string
}

const initialState: ProductState = {
    products: [],
    loading: false,
    error: null,
    status: "Idle"
}

export const fetchProducts = createAsyncThunk(
    "ecommerce/fetchProducts",
    async (queryParams) => {
        const { limit, skip, query } = queryParams;

        console.log(limit, skip, query);
        const queryString = new URLSearchParams({
            limit: limit.toString(),
            skip: skip.toString(),
        }).toString();

        const url = `https://dummyjson.com/products/search?q=${query}&${queryString}`;

        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        try {
            const response = await fetch(url, requestOptions);

            if (!response.ok) {
                throw new Error("Netwrok response was not OK");
            }
            const data = await response.json();
            return data;

        } catch (error: any) {
            return error.message
        }
    }
)

const prodcutSlice = createSlice({
    name: "ecommerce",
    initialState,
    reducers: {
        noAction: (state) => {
            console.log("No Method is created");
            console.log(state.products);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.status = "loading"
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.status = "successed"
                state.products = action.payload.products;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.status = "falied"
                state.error = action.error.message || "Faild to fetch Products";
            });
    }
});

export const { noAction } = prodcutSlice.actions;
export default prodcutSlice.reducer;