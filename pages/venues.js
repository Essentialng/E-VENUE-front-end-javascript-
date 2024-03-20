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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ErrMsg } from "../components/global/errMsg";
import { DefaultBody } from "../components/venue/defaultBody";
import { Hero } from "../components/venue/hero";
import { SearchResWrapper } from "../components/venue/searchResWrapper";
import searchVenueFn from "../lib/venues/search";
import styles from "./styles/venuesTX4.module.css";
var Venues = function () {
    var _a;
    // state for search
    var _b = useState({
        category: "",
        location: "",
        no_of_guest: "",
        venue_type: "",
        space_preference: "",
        rating: "",
    }), formDetails = _b[0], setFormDetails = _b[1];
    var _c = useState(), venues = _c[0], setVenues = _c[1];
    var _d = useState(""), errMsg = _d[0], setErrMsg = _d[1];
    function handleSearch(e) {
        var _a, _b, _c, _d, _e, _f;
        return __awaiter(this, void 0, void 0, function () {
            var res, error_1;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        e.preventDefault();
                        _g.label = 1;
                    case 1:
                        _g.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, searchVenueFn({
                                category: (_a = formDetails.category) !== null && _a !== void 0 ? _a : "",
                                location: (_b = formDetails.location) !== null && _b !== void 0 ? _b : "",
                                no_of_guest: (_c = formDetails.no_of_guest) !== null && _c !== void 0 ? _c : "",
                                venue_type: (_d = formDetails.venue_type) !== null && _d !== void 0 ? _d : "",
                                space_preference: (_e = formDetails.space_preference) !== null && _e !== void 0 ? _e : "",
                                rating: (_f = formDetails.rating) !== null && _f !== void 0 ? _f : "",
                                setErrMsg: setErrMsg,
                            })];
                    case 2:
                        res = _g.sent();
                        console.log({ res: res });
                        setVenues(res);
                        setErrMsg("");
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _g.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    var content = (_a = venues === null || venues === void 0 ? void 0 : venues.result) === null || _a === void 0 ? void 0 : _a.map(function (venue) { return (_jsx(SearchResWrapper, __assign({}, venue), venue.id)); });
    return (_jsxs("article", { children: [_jsx(Hero, { formDetails: formDetails, setFormDetails: setFormDetails, handleSearch: handleSearch }), _jsx("section", __assign({ className: styles.vSectionTX4 }, { children: venues || errMsg ? (_jsx(_Fragment, { children: errMsg ? (_jsx(ErrMsg, { errMsg: errMsg })) : (_jsx("div", __assign({ className: styles.containerR58a }, { children: content }))) })) : (_jsx("div", __assign({ className: styles.defaultBodyBox }, { children: _jsx(DefaultBody, {}) }))) }))] }));
};
export default Venues;
