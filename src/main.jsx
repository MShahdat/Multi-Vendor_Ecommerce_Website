import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Pages/Home'
import Home2 from './Pages/Electronics'
import CountdownBox from './Components/CountdownBox'
import Header from './Components/Header'
import DailyDeals from './Components/DailyDeals'
import MyAccount from './Pages/MyAccount'
import UserSidebar from './Components/SideBar'
import NavBar from './Components/NavBar'
import TopSellers from './Components/TopSellers'
import ProductsDetails from './Pages/ProductsDetails'
import Dashboard from './Components/Dashboard'
import DashboardV from './Pages/DashboardV'
import DashboardWithdrawV from './Pages/DashboardWithdrawV'
import DashboardOrdersV from './Pages/DashboardOrdersV'
import DashboardOrders from './Components/DashboardOrders'
import MyAccountV from './Pages/StoreDetailsV'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RegisterV from './Pages/RegisterV'
import Linka from './Components/Linka'
import Shop from './Pages/Shop'
import Blogs from './Pages/Blogs'
import Pages from './Pages/pages'
import Features from './Pages/Features'
import Signin from './Pages/Signin'
import Register from './Pages/Register'
import SideBar from './Components/SideBar'
import Wishlist from './Pages/Wishlist'
import OrderTrack from './Pages/OrderTrack'
import HelpCenter from './Pages/HelpCenter'
import DashboardProducts from './Components/DashboardProducts'
import StoreDetailsV from './Pages/StoreDetailsV'
import StoreList from './Pages/StoreList'
import EditStoreV from './Pages/EditStoreV'
import Banner from './Components/Banner'
import Electronics from './Pages/Electronics'
import MarketplaceWelcome from './Components/MarketplaceWelcome'
import StoreSetup from './Components/StoreSetup'
import StoreReady from './Components/StoreReady'
import Review from './Components/Review'
import ShippingReturns from './Components/ShippingReturns'
import AdditionalInformation from './Components/AdditionalInformation'
import CartSuccess from './Components/CartSuccess'
import CartConfirmation from './Pages/CartConfirmation'
import CartItemsHero from './Components/CartItemsHero'
import CheckoutHero from './Components/CheckoutHero'
import CartItems from './Pages/CartItems'
import CheckoutPage from './Pages/CheckoutPage'
import Compare from './Components/Compare'
import ComparePage from './Pages/ComparePage'
import WishlistHero from './Components/WishlistHero'
import GardenHero from './Components/GardenHero'
import HomeGarden from './Pages/HomeGarden'
import Fashion from './Pages/Fashion'
import Jewelary from './Pages/Jewelary'
import Sports from "./Pages/Sports"
import MotherKids from './Pages/MotherKids'
import Beauty from './Pages/Beauty'
import Games from './Pages/Games'
import AutoMobiles from './Pages/AutoMobiles'
import Art from './Pages/Art'
import Tools from './Pages/Tools'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import SideBarSignin from './Components/SideBarSignin'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/cart-alert",
    element: <CartConfirmation></CartConfirmation>
  },
  {
    path: "/accounts",
    element: <SideBarSignin></SideBarSignin>
  },
  {
    path: '/home-garden',
    element: <HomeGarden></HomeGarden>
  },
  {
    path: "/fashion",
    element: <Fashion></Fashion>
  },
  {
    path: "/jewelry-accessories",
    element: <Jewelary></Jewelary>
  },
  {
    path: '/sports-entertainment',
    element: <Sports></Sports>
  },
  {
    path: "/mother-kids",
    element: <MotherKids></MotherKids>
  },
  {
    path: '/beauty-health',
    element: <Beauty></Beauty>
  },
  {
    path: "/toys-games",
    element: <Games></Games>
  },
  {
    path: "/automobiles",
    element: <AutoMobiles></AutoMobiles>
  },
  {
    path: "/collectibles-art",
    element: <Art></Art>
  },
  {
    path: "/tools-home-improvement",
    element: <Tools></Tools>
  },
  {
    path: "/",
    element: <ProductsDetails></ProductsDetails>,
    children: [
      {
        path: "/product-review",
        element: <Review></Review>
      },
      {
        path: "/product-return",
        element: <ShippingReturns></ShippingReturns>
      },
      {
        path: "/product-info",
        element: <AdditionalInformation></AdditionalInformation>
      },
    ]
  },
  {
    path: "/checkout",
    element: <CheckoutPage></CheckoutPage>
  },
  {
    path: "/signin",
    element: <Signin></Signin>
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/registerv",
    element: <RegisterV></RegisterV>
  },
  {
    path: "/shop",
    element: <Shop></Shop>
  },
  {
    path: "/features",
    element: <Features></Features> //this page will be detele. 
  },
  {
    path: "/pages",
    element: <Pages></Pages>  //this page will be delete
  },
  {
    path: "/blogs",
    element: <Blogs></Blogs>  //this page will be delete
  },
  {
    path: "/about-us",
    element: <AboutUs></AboutUs>
  },
  {
    path: "/contact-us",
    element: <ContactUs></ContactUs>
  },
  {
    path: "/help-centers",
    element: <HelpCenter></HelpCenter>
  },
  {
    path: "/account",
    element: <SideBar></SideBar>
  },
  {
    path: "/wishlist",
    element: <Wishlist></Wishlist>
  },
  {
    path: "/cart",
    element: <CartItems></CartItems>
  },
  {
    path: "/compare",
    element: <ComparePage></ComparePage>
  },
  {
    path: "/create-account",
    element: <Register></Register>
  },
  {
    path: "/track-order",
    element: <OrderTrack></OrderTrack>
  },
  {
    path: "/help-center",
    element: <HelpCenter></HelpCenter>
  },
  {
    path: "/electronics",
    element: <Electronics></Electronics>
  },
  {
    path: "/my-account",
    element: <MyAccount></MyAccount>
  },
  {
    path: "/dashboard",
    element: <DashboardV></DashboardV>
  },
  {
    path: "/dashboard/order",
    element: <DashboardOrdersV></DashboardOrdersV>
  },
  {
    path: "/dashboard/withdraw",
    element: <DashboardWithdrawV></DashboardWithdrawV>
  },
  {
    path: "/dashboard/products",
    element: <DashboardProducts></DashboardProducts>
  },
  {
    path: "/dashboard/store-details",
    element: <StoreDetailsV></StoreDetailsV>
  },
  {
    path: "/dashboard/store-list",
    element: <StoreList></StoreList>
  },
  {
    path: "/dashboard/store-edit",
    element: <EditStoreV></EditStoreV>
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

