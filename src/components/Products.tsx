import { fetchProducts } from "@/store/product-slice";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { products, status, loading } = useSelector((state: RootState) => state.products);
    const [value, setValue] = useState("");

    useEffect(() => {
        if (status === 'Idle') {
            dispatch(fetchProducts({ limit: 20, skip: 0, query: value }));
        }
    }, [status, products, dispatch]);

    return (
        <>
            {loading && <p className="text-4xl text-center mt-14">Loading...</p>}
            <div className="w-[90%] mx-auto md:grid md:grid-cols-4 gap-5 mt-14">
                {
                    products.length > 0
                    && products.map((product) => (
                        <div className="p-3 bg-[#FEF9F2] rounded-md flex flex-col justify-between" key={product.id}>
                            <img src={product.thumbnail} />
                            <div className="my-2">
                                <p className="text-[1.3em] font-semibold">{product.title}</p>
                                <p className="text-[1em] mt-2">{product.description}</p>
                            </div>
                            <p className="text-xl">$ {product.price}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
};

export default Products;
