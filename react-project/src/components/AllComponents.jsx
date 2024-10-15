import { Route, Routes, useLocation } from "react-router-dom";
import Navigation from "./Navigation"
import NoPage from "./NoPage"
import LandingPage from './LandingPage'
import About from './About'
import Team from './Team'
import Blog from './Blog'
import Products from './Products'
import ProductDetails from './Products/ProductDetails.jsx'
import Contacts from './Contacts'
import BlogDetails from "./Blog/BlogDetails";
import FetchUser from "./FetchUser";


const UserFetchedLandingPage = FetchUser(LandingPage)
const UserFetchedAbout = FetchUser(About)
const UserFetchedTeam = FetchUser(Team)
const UserFetchedBlog = FetchUser(Blog)
const UserFetchedBlogDetails = FetchUser(BlogDetails)
const UserFetchedProducts = FetchUser(Products)
const UserFetchedProductDetails = FetchUser(ProductDetails)
const UserFetchedContacts = FetchUser(Contacts)
const UserFetchedNoPage = FetchUser(NoPage)


function AllComponents() {
    const location = useLocation();
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigation />} >
                <Route index element={<UserFetchedLandingPage />} />
                <Route path="about" element={<UserFetchedAbout />} />
                <Route path="team" element={<UserFetchedTeam />} />
                <Route path="blog" element={<UserFetchedBlog />} />
                <Route path="blog/:id" element={<UserFetchedBlogDetails />} />
                <Route path="products" element={<UserFetchedProducts />} />
                <Route path="products/:id" element={<UserFetchedProductDetails />} />
                <Route path="contacts" element={<UserFetchedContacts />} />
                <Route path="*" element={<UserFetchedNoPage />} />
            </Route>
        </Routes>
    );
}
export default AllComponents;