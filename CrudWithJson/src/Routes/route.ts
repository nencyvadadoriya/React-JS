import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../Pages/Add-Products/HomePage/HomePage";
import AddProduct from "../Pages/Add-Products/AddProduct";
import ViewProduct from "../Pages/Add-Products/View-Products/ViewProduct";
import { ProductApi } from "../service/productApl";
import EditProduct from "../Pages/Add-Products/EditProduct/EditProduct";
import AddToCartPage from "../Pages/Add-Products/AddToCart/AddToCartPage";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import NotFound from "../Pages/Error/NotFoundPage";

export const routerNames = {
    home: '/',
    addProduct: '/addProduct',
    viewProduct: '/viewProduct',
    editProduct: '/editProduct/:id',
    productDetails: '/product/:id',
    AddToCartPage: "/addToCard",
    NotFound : "/notfound"
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
                path: routerNames.editProduct,
                loader: async ({ params }) => {
                    return await ProductApi.fecthSingleProduct(params.id as string)
                },
                Component: EditProduct
            },
            {
                path: "/product/:id",
                loader: async ({ params }) => {
                    return await ProductApi.fecthSingleProduct(params.id as string);
                },
                Component: ProductDetails
            },
            {
                path: routerNames.AddToCartPage,
                Component: AddToCartPage
            },{
                path :"*",
                Component : NotFound
            }
        ]
    }
])