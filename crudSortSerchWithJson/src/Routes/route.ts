import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../Pages/Add-Products/HomePage/HomePage";
import AddProduct from "../Pages/Add-Products/AddProduct";
import ViewProduct from "../Pages/Add-Products/View-Products/ViewProduct";
import { ProductApi } from "../service/productApl";
import EditProduct from "../Pages/Add-Products/EditProduct/EditProduct";
import AddToCartPage from "../Pages/Add-Products/AddToCart/AddToCartPage";

export const routerNames = {
    home: '/',
    addProduct: '/addProduct',
    viewProduct: '/viewProduct',
    editProduct: '/editProduct/:id',
    AddToCartPage : "/addToCard"
}

export const routes = createBrowserRouter([
    {
        path: routerNames.home,
        Component: App,
        children: [
            {
                index: true,
                loader: async () => {
                    return await ProductApi.fetchAllProduct();
                },
                Component: HomePage
            },
            {
                path: routerNames.addProduct,
                Component: AddProduct
            },
            {
                path: routerNames.viewProduct,
                loader: async () => {
                    return await ProductApi.fetchAllProduct();
                },
                Component: ViewProduct
            },
            {
                path :routerNames.editProduct,
                loader: async ({params}) => {
                        return await ProductApi.fecthSingleProduct(params.id as string) 
                },
                Component: EditProduct
            },
            {
                path : routerNames.AddToCartPage,
                Component : AddToCartPage
            }
        ]
    }
])