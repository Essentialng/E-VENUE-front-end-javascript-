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
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Btn1Content } from "../components/eventServices/btn1Content";
import { Btn2Content } from "../components/eventServices/btn2Content";
import { Btn3Content } from "../components/eventServices/btn3Content";
import { DefaultBody } from "../components/eventServices/defaultBody";
import { Hero } from "../components/eventServices/hero";
import LimitedInfoCard from "../components/eventServices/limitedInfoCard";
import { ErrMsg } from "../components/global/errMsg";
import { LoginNotice } from "../components/global/loginNotice";
import eventServicesSearchFn from "../lib/eventsShowcase/search";
import styles from "./styles/eventServicseOTW.module.css";
import getCountByCatFn from "../lib/eventsServices/getCountByCategory";
var EventServices = function () {
    var _a, _b, _c, _d;
    var _e = useState({
        location: "",
        category: "",
    }), formDetails = _e[0], setFormDetails = _e[1];
    var _f = useState(), eventServices = _f[0], setEventServices = _f[1];
    var _g = useState(""), errMsg = _g[0], setErrMsg = _g[1];
    var _h = useState(false), specificEService = _h[0], setSpecificEService = _h[1];
    var _j = useState(_jsx(_Fragment, {})), btnPageContent = _j[0], setBtnPageContent = _j[1];
    var _k = useState(false), showLoginErr = _k[0], setShowLoginErr = _k[1];
    var _l = useState(), countByCat = _l[0], setCountByCat = _l[1];
    var token = Cookies.get("token");
    var navigate = useNavigate();
    useEffect(function () {
        try {
            getCountByCatFn({ setErrMsg: setErrMsg }).then(function (res) {
                res && setCountByCat(res);
            });
        }
        catch (error) { }
    }, []);
    function handleSearch(e) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var res, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        e.preventDefault();
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, eventServicesSearchFn({
                                location: (_a = formDetails.location) !== null && _a !== void 0 ? _a : "",
                                category: (_b = formDetails.category) !== null && _b !== void 0 ? _b : "",
                                setErrMsg: setErrMsg,
                            })];
                    case 2:
                        res = _c.sent();
                        console.log({ res: res });
                        setEventServices(res);
                        setErrMsg("");
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _c.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    var content = (_a = eventServices === null || eventServices === void 0 ? void 0 : eventServices.result) === null || _a === void 0 ? void 0 : _a.map(function (event) { return (_jsx(LimitedInfoCard, __assign({}, event), event.id)); });
    // get the total count for each category
    var designersCount = (_b = countByCat === null || countByCat === void 0 ? void 0 : countByCat.result.find(function (count) { return count.total_designers; })) === null || _b === void 0 ? void 0 : _b.total_designers;
    var mkupartCount = (_c = countByCat === null || countByCat === void 0 ? void 0 : countByCat.result.find(function (count) { return count.total_make_up_artise; })) === null || _c === void 0 ? void 0 : _c.total_make_up_artise;
    var videoPhotoCount = (_d = countByCat === null || countByCat === void 0 ? void 0 : countByCat.result.find(function (count) { return count.total_photo_video_makers; })) === null || _d === void 0 ? void 0 : _d.total_photo_video_makers;
    var btn1Content = _jsx(Btn1Content, {});
    var btn2Content = _jsx(Btn2Content, {});
    var btn3Content = _jsx(Btn3Content, {});
    // on click for buttons to determine
    function handleBtnClick(e) {
        if (e.currentTarget.name === "btn1") {
            setSpecificEService(true);
            setBtnPageContent(btn1Content);
        }
        else if (e.currentTarget.name === "btn2") {
            setSpecificEService(true);
            setBtnPageContent(btn2Content);
        }
        else if (e.currentTarget.name === "btn3") {
            setSpecificEService(true);
            setBtnPageContent(btn3Content);
        }
    }
    function handleCreateService(e) {
        if (!token) {
            console.log("login needed");
            setShowLoginErr(true);
            setTimeout(function () {
                setShowLoginErr(false);
            }, 10000);
            return;
        }
        else {
            navigate("/e-service/create-service");
        }
    }
    return (_jsxs("article", __assign({ className: styles.containerOTW }, { children: [_jsx(Hero, { formDetails: formDetails, setFormDetails: setFormDetails, handleSearch: handleSearch }), _jsxs("div", { children: [_jsx("h3", { children: "Service Providers" }), _jsxs("div", { children: [_jsxs("button", __assign({ name: "btn1", onClick: handleBtnClick }, { children: [_jsx("img", { src: "/home/photographers.svg", alt: "photographers" }), _jsxs("span", { children: ["Photography/ Videographer (", videoPhotoCount, ")"] })] })), _jsxs("button", __assign({ name: "btn2", onClick: handleBtnClick }, { children: [_jsx("img", { src: "/home/make_up_artise.svg", alt: "Make up Artise" }), _jsxs("span", { children: ["Make up Artise (", mkupartCount, ")"] })] })), _jsxs("button", __assign({ name: "btn3", onClick: handleBtnClick }, { children: [_jsx("img", { src: "/home/designers.svg", alt: "designers" }), _jsxs("span", { children: ["Designers (", designersCount, ")"] })] }))] })] }), _jsxs("div", __assign({ className: styles.addServiceArea }, { children: [_jsx("button", __assign({ onClick: handleCreateService }, { children: "Create Service" })), showLoginErr && _jsx(LoginNotice, {})] })), specificEService ? (btnPageContent) : eventServices || errMsg ? (_jsx(_Fragment, { children: errMsg ? _jsx(ErrMsg, { errMsg: errMsg }) : _jsx("div", { children: content }) })) : (_jsx(_Fragment, { children: _jsx(DefaultBody, {}) }))] })));
};
export default EventServices;
