import { fetchProducts } from "@/store/product-slice";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const Products = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { products, status } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        if (status === 'Idle') {
            dispatch(fetchProducts());
        }
    }, [status, products, dispatch]);
    console.log(products);
    
    return <div>Products</div>;
};

export default Products;
