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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { LimitedInfoCard } from "../components/profile/eventCard";
import { MLEvents } from "../components/profile/myListingsEvent";
import { ProfileNav } from "../components/profile/nav";
import stylesDetails from "../components/profile/styles/personalDetailsFY8.module.css";
import styles from "../components/profile/styles/profileMainJS4.module.css";
import stylesNav from "../components/profile/styles/profileNavZZZ.module.css";
import getProfileFn from "../lib/profile/getProfile";
import { ErrMsg } from "../components/global/errMsg";
import getEventProfileFn from "../lib/profile/getEvents";
import searchEventsFn from "../lib/profile/searchEvents";
import { MLVenues } from "../components/profile/myListingsVenue";
import getVenueProfileFn from "../lib/profile/getVenues";
import searchVenuesFn from "../lib/profile/searchVenues";
export var MyListings = function () {
    var _a = useState(), profileRes = _a[0], setProfileRes = _a[1];
    var _b = useState(), eventRes = _b[0], setEventRes = _b[1];
    var _c = useState(), venueRes = _c[0], setVenueRes = _c[1];
    var _d = useState(true), showEvent = _d[0], setShowEvent = _d[1];
    //   const [showDefaultDetails, setShowDefaultDetails] = useState(false);
    var _e = useState(""), errMsg = _e[0], setErrMsg = _e[1];
    //   const navigate = useNavigation();
    // search states
    var _f = useState({
        name: "",
        location: "",
        category: "",
        frequency: "",
        price: "",
    }), formDetails = _f[0], setFormDetails = _f[1];
    var _g = useState({
        title: "",
        location: "",
        category: "",
        venue_type: "",
        starting_price: "",
    }), formDetailsVenue = _g[0], setFormDetailsVenue = _g[1];
    var _h = useState(), searchRes = _h[0], setSearchRes = _h[1];
    var _j = useState(), venueSearchRes = _j[0], setVenueSearchRes = _j[1];
    // end of search states
    useEffect(function () {
        try {
            getProfileFn({ setErrMsg: setErrMsg })
                .then(function (res) {
                res && setProfileRes(res);
            })
                .then(function () {
                getEventProfileFn({ setErrMsg: setErrMsg }).then(function (res) {
                    res && setEventRes(res);
                });
            });
        }
        catch (error) { }
    }, []);
    // map eventRes
    var eventResMapped = eventRes === null || eventRes === void 0 ? void 0 : eventRes.finalResult[0].map(function (event) { return (_jsx(LimitedInfoCard, __assign({}, event), event.event_id)); });
    // Assuming MLEvents accepts a prop named 'total'
    var total = eventRes === null || eventRes === void 0 ? void 0 : eventRes.finalResult[1].reduce(function (acc, event) { return acc + event.total; }, 0);
    function handleShowVenue(e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                e.preventDefault();
                setShowEvent(false);
                try {
                    getVenueProfileFn({ setErrMsg: setErrMsg }).then(function (res) {
                        res && setVenueRes(res);
                    });
                }
                catch (error) { }
                return [2 /*return*/];
            });
        });
    }
    var venuesResMapped = venueRes === null || venueRes === void 0 ? void 0 : venueRes.finalResult[0].map(function (venue) { return (_jsx(LimitedInfoCard, __assign({}, venue), venue.event_id)); });
    var venuesTotal = venueRes === null || venueRes === void 0 ? void 0 : venueRes.finalResult[1].reduce(function (acc, venue) { return acc + venue.total; }, 0);
    function handleShowEvent(e) {
        e.preventDefault();
        setShowEvent(true);
    }
    // Search logic
    function handleSearch(e) {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_f) {
                e.preventDefault();
                try {
                    searchEventsFn({
                        name: (_a = formDetails.name) !== null && _a !== void 0 ? _a : "",
                        location: (_b = formDetails.location) !== null && _b !== void 0 ? _b : "",
                        category: (_c = formDetails.category) !== null && _c !== void 0 ? _c : "",
                        frequency: (_d = formDetails.frequency) !== null && _d !== void 0 ? _d : "",
                        price: (_e = formDetails.price) !== null && _e !== void 0 ? _e : "",
                        setErrMsg: setErrMsg,
                    }).then(function (res) {
                        res && setSearchRes(res);
                        setErrMsg("");
                    });
                }
                catch (error) { }
                return [2 /*return*/];
            });
        });
    }
    var searchContent = searchRes === null || searchRes === void 0 ? void 0 : searchRes.result.map(function (event) { return (_jsx(LimitedInfoCard, __assign({}, event), event.event_id)); });
    // end of search logic
    // venues search logic
    function handleVenuesSearch(e) {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_f) {
                e.preventDefault();
                try {
                    searchVenuesFn({
                        title: (_a = formDetailsVenue.title) !== null && _a !== void 0 ? _a : "",
                        location: (_b = formDetailsVenue.location) !== null && _b !== void 0 ? _b : "",
                        category: (_c = formDetailsVenue.category) !== null && _c !== void 0 ? _c : "",
                        venue_type: (_d = formDetailsVenue.venue_type) !== null && _d !== void 0 ? _d : "",
                        starting_price: (_e = formDetailsVenue.starting_price) !== null && _e !== void 0 ? _e : "",
                        setErrMsg: setErrMsg,
                    }).then(function (res) {
                        res && setVenueSearchRes(res);
                        setErrMsg("");
                    });
                }
                catch (error) { }
                return [2 /*return*/];
            });
        });
    }
    var venuesSearchContent = venueSearchRes === null || venueSearchRes === void 0 ? void 0 : venueSearchRes.result.map(function (event) { return (_jsx(LimitedInfoCard, __assign({}, event), event.event_id)); });
    var token = Cookies.get("token");
    // Replace with navigate
    if (!token) {
        window.location.href = "/login";
    }
    return (_jsx("div", __assign({ className: styles.containerJS4 }, { children: _jsxs("section", { children: [_jsx("nav", __assign({ className: stylesNav.containerZZZ }, { children: _jsx(ProfileNav, {}) })), errMsg ? (_jsx("div", __assign({ className: styles.errMsg }, { children: _jsx(ErrMsg, { errMsg: errMsg }) }))) : (profileRes === null || profileRes === void 0 ? void 0 : profileRes.profile.map(function (user) { return (_jsxs("article", { children: [_jsxs("section", __assign({ className: styles.header }, { children: [_jsx("div", { children: _jsx("h2", { children: "My Listings " }) }), _jsxs("div", { children: [_jsx("div", { children: _jsx("img", { src: user.img, alt: "profile" }) }), _jsxs("div", { children: [_jsx("p", { children: user.first_name + " " + user.last_name }), _jsx("p", { children: user.email })] }), _jsx("div", { children: _jsx("img", { src: "/home/bell.svg", alt: "bell" }) })] })] })), showEvent ? (_jsxs(_Fragment, { children: [_jsxs("section", __assign({ className: stylesDetails.containerFY8 }, { children: [_jsx(MLEvents, { showEvent: showEvent, handleShowVenue: handleShowVenue, handleShowEvent: handleShowEvent, total: total || 0, venuesTotal: venuesTotal || 0, 
                                            /**passing search props */
                                            formDetails: formDetails, setFormDetails: setFormDetails, handleSearch: handleSearch }), " "] })), errMsg ? (_jsx(ErrMsg, { errMsg: errMsg })) : !searchContent ? (_jsx("section", __assign({ className: stylesDetails.eventsListFY8 }, { children: eventResMapped }))) : (_jsx("section", __assign({ className: stylesDetails.eventsListFY8 }, { children: searchContent })))] })) : (_jsxs(_Fragment, { children: [_jsxs("section", __assign({ className: stylesDetails.containerFY8 }, { children: [_jsx(MLVenues, { showEvent: showEvent, handleShowVenue: handleShowVenue, handleShowEvent: handleShowEvent, total: total || 0, venuesTotal: venuesTotal || 0, 
                                            /**passing search props */
                                            formDetailsVenue: formDetailsVenue, setFormDetailsVenue: setFormDetailsVenue, handleVenuesSearch: handleVenuesSearch }), " "] })), errMsg ? (_jsx(ErrMsg, { errMsg: errMsg })) : !venuesSearchContent ? (_jsx("section", __assign({ className: stylesDetails.eventsListFY8 }, { children: venuesResMapped }))) : (_jsx("section", __assign({ className: stylesDetails.eventsListFY8 }, { children: venuesSearchContent })))] }))] }, user.user_id)); }))] }) })));
};
