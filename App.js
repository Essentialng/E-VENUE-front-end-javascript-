var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./App.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from "react-router-dom";
import Root from "./components/root/root";
import { DynamicVenue } from "./components/venue/dynamicVenue";
import About from "./pages/about";
import Blacklist from "./pages/blacklist";
import { CreateAnEvent } from "./pages/createAnEvent";
import { CreateGroup } from "./pages/createGroup";
import { DyanmicGroups } from "./pages/dyanmicGroups";
import { DynamicServiceProvides } from "./pages/dynamicEservice";
import { DynamicEvent } from "./pages/dynamicEvent";
import { DynamicShortVideos } from "./pages/dynamicShortVids";
import { DynamicStories } from "./pages/dynamicStories";
import EventServices from "./pages/eventServices";
import EventShowcase from "./pages/eventShowcase";
import { Groups } from "./pages/groups";
import Home from "./pages/home";
import Login from "./pages/login";
import { MyListings } from "./pages/myListings";
import { Profile } from "./pages/profile";
import { ProfileMedia } from "./pages/profileMedia";
import { ProfilePost } from "./pages/profilePost";
import { ShortVideos } from "./pages/shortVideos";
import { ShortVideoUploadForm } from "./pages/shortVideoUpload";
import SignUp from "./pages/signUp";
import Ticketing from "./pages/ticketing";
import Venues from "./pages/venues";
import { DynamicChatWrapper } from "./pages/dynamicChatWrapper";
import { ProfileMessages } from "./pages/messages";
import { CreateService } from "./pages/createService";
import { ViewByLocation } from "./components/venue/viewByLocation";
import { ViewByCategoryV } from "./components/venue/viewByCategory";
import { ViewByAdminEventCategory } from "./components/event/viewByAdminEventCat";
import { ViewByEServiceCat } from "./components/eventServices/viewByEServiceCat";
import { ShowLocationsFullList } from "./components/venue/showLocationsFullList";
import { ShowAdminEventsCategoriesFullList } from "./components/venue/showCatByEvenueFullList";
import { EServiceCategoryFullList } from "./components/eventServices/getCatByService";
import { DynamicReviews } from "./pages/dynamicReviews";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
function App() {
    var _a = useState(Cookies.get("token") ? true : false), tokenState = _a[0], setTokenState = _a[1];
    useEffect(function () {
        setTokenState(Cookies.get("token") ? true : false);
    }, []);
    var router = createBrowserRouter(createRoutesFromElements(_jsxs(Route, __assign({ path: "/", element: _jsx(Root, { setTokenState: setTokenState, tokenState: tokenState }) }, { children: [_jsx(Route, { index: true, element: _jsx(Home, {}) }), _jsx(Route, { path: "/venues", element: _jsx(Venues, {}) }), _jsx(Route, { path: "/ticketing", element: _jsx(Ticketing, {}) }), _jsx(Route, { path: "/event-services", element: _jsx(EventServices, {}) }), _jsx(Route, { path: "/event-showcase", element: _jsx(EventShowcase, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/blacklist", element: _jsx(Blacklist, {}) }), _jsx(Route, { path: "/sign-up", element: _jsx(SignUp, {}) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "*", element: _jsx("p", { children: "There's nothing here: 404!" }) }), _jsx(Route, { path: "/events/:event_id", element: _jsx(DynamicEvent, {}) }), _jsx(Route, { path: "/venues/:venue_id", element: _jsx(DynamicVenue, {}) }), _jsx(Route, { path: "/create-event", element: _jsx(CreateAnEvent, {}) }), _jsx(Route, { path: "/profile", element: _jsx(Profile, {}) }), _jsx(Route, { path: "/profile/my-listings", element: _jsx(MyListings, {}) }), _jsx(Route, { path: "/profile/post", element: _jsx(ProfilePost, {}) }), _jsx(Route, { path: "/profile/media", element: _jsx(ProfileMedia, {}) }), _jsx(Route, { path: "/profile/messages", element: _jsx(ProfileMessages, {}) }), _jsx(Route, { path: "/short-videos", element: _jsx(ShortVideos, {}) }), _jsx(Route, { path: "/short-videos/:video_id", element: _jsx(DynamicShortVideos, {}) }), _jsx(Route, { path: "/upload-short-videos", element: _jsx(ShortVideoUploadForm, {}) }), _jsx(Route, { path: "/stories/:story_id", element: _jsx(DynamicStories, {}) }), _jsx(Route, { path: "/groups", element: _jsx(Groups, {}) }), _jsx(Route, { path: "/groups/create", element: _jsx(CreateGroup, {}) }), _jsx(Route, { path: "/groups/:group_id", element: _jsx(DyanmicGroups, {}) }), _jsx(Route, { path: "/event-services/:eservice_id", element: _jsx(DynamicServiceProvides, {}) }), _jsx(Route, { path: "/chat/:recipient_id/:first_name", element: _jsx(DynamicChatWrapper, {}) }), _jsx(Route, { path: "/e-service/create-service", element: _jsx(CreateService, {}) }), _jsx(Route, { path: "/venues/q/:location_identifier", element: _jsx(ViewByLocation, {}) }), _jsx(Route, { path: "/venues/ci/:category_identifier", element: _jsx(ViewByCategoryV, {}) }), _jsx(Route, { path: "/event/ev/:category_identifier", element: _jsx(ViewByAdminEventCategory, {}) }), _jsx(Route, { path: "/event-services/q/:category_identifier", element: _jsx(ViewByEServiceCat, {}) }), _jsx(Route, { path: "/event-centres/full-list", element: _jsx(ShowLocationsFullList, {}) }), _jsx(Route, { path: "/by-eVenue/full-list", element: _jsx(ShowAdminEventsCategoriesFullList, {}) }), _jsx(Route, { path: "/event-services/full-list", element: _jsx(EServiceCategoryFullList, {}) }), _jsx(Route, { path: "/reviews/:service_id/:business_name", element: _jsx(DynamicReviews, {}) })] }))));
    return (_jsx("div", __assign({ className: "App" }, { children: _jsx(RouterProvider, { router: router }) })));
}
export default App;
