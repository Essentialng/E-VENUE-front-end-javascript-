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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import createVenueFn from "../../lib/venues/createVenue";
import { handleInputChange } from "../global/handleInputChange";
import { InlineErrMsg } from "../global/inlineErrMsg";
import { InlineSuccessMsg } from "../global/inllineSuccessMsg";
import styles from "../event/styles/createEvent83D.module.css";
export var CreateVenueForm = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    var first_name = _a.first_name;
    var _r = useState({
        title: "",
        category: "",
        furnishing: "",
        select_type: "indoor",
        bathrooms: "",
        imgs: "",
        toilets: "",
        starting_price: "",
        location: "",
        no_of_guest: "",
        venue_type: "",
        vEmail: "",
        vPhone: "",
        space_preference: "",
        MONDAY_OPEN: "",
        MONDAY_CLOSE: "",
        TUESDAY_OPEN: "",
        TUESDAY_CLOSE: "",
        WEDNESDAY_OPEN: "",
        WEDNESDAY_CLOSE: "",
        THURSDAY_OPEN: "",
        THURSDAY_CLOSE: "",
        FRIDAY_OPEN: "",
        FRIDAY_CLOSE: "",
        SATURDAY_OPEN: "",
        SATURDAY_CLOSE: "",
        SUNDAY_OPEN: "",
        SUNDAY_CLOSE: "",
    }), formDetails = _r[0], setFormDetails = _r[1];
    var _s = useState(""), description = _s[0], setDescription = _s[1];
    var _t = useState(""), errMsg = _t[0], setErrMsg = _t[1];
    var _u = useState(""), successMsg = _u[0], setSuccessMsg = _u[1];
    function handleSubmit(event) {
        return __awaiter(this, void 0, void 0, function () {
            var formDataBody, key, value, fileList, i, res, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        formDataBody = new FormData();
                        for (key in formDetails) {
                            if (key === "imgs") {
                                value = formDetails[key];
                                if (value instanceof FileList) {
                                    fileList = value;
                                    for (i = 0; i < fileList.length; i++) {
                                        formDataBody.append(key, fileList[i]);
                                    }
                                }
                                else if (typeof value === "string") {
                                    formDataBody.append(key, value);
                                }
                            }
                            else {
                                formDataBody.append(key, String(formDetails[key]));
                            }
                        }
                        // append states of external packages
                        formDataBody.append("description", description);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, createVenueFn({ formDataBody: formDataBody, setErrMsg: setErrMsg })];
                    case 2:
                        res = _a.sent();
                        if (res.message.includes("successfully")) {
                            setSuccessMsg(res.message);
                        }
                        //TODO: Go to the event page
                        // reset the form
                        setFormDetails({
                            title: "",
                            category: "",
                            furnishing: "",
                            select_type: "",
                            bathrooms: "",
                            imgs: "",
                            toilets: "",
                            starting_price: "",
                            location: "",
                            no_of_guest: "",
                            venue_type: "",
                            vEmail: "",
                            vPhone: "",
                            space_preference: "",
                            MONDAY_OPEN: "",
                            MONDAY_CLOSE: "",
                            TUESDAY_OPEN: "",
                            TUESDAY_CLOSE: "",
                            WEDNESDAY_OPEN: "",
                            WEDNESDAY_CLOSE: "",
                            THURSDAY_OPEN: "",
                            THURSDAY_CLOSE: "",
                            FRIDAY_OPEN: "",
                            FRIDAY_CLOSE: "",
                            SATURDAY_OPEN: "",
                            SATURDAY_CLOSE: "",
                            SUNDAY_OPEN: "",
                            SUNDAY_CLOSE: "",
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    return (_jsxs("div", __assign({ className: first_name
            ? "".concat(styles.container83D, " ").concat(styles.smallContainer, " ")
            : "".concat(styles.container83D, " ").concat(styles.bigContainer) }, { children: [_jsx("div", {}), _jsx("p", {}), _jsxs("div", { children: [_jsxs("h2", { children: ["Hey ", first_name !== null && first_name !== void 0 ? first_name : "OLuchi", " "] }), _jsx("p", { children: " let's set up your venue...It will only take a few minutes" })] }), _jsx("h3", { children: "Venue details" }), _jsxs("form", __assign({ onSubmit: handleSubmit }, { children: [_jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "title" }, { children: "Event Name" })), _jsx("input", { id: "title", name: "title", required: true, "aria-required": true, type: "text", value: formDetails.title, onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "description" }, { children: "Describe your event" })), _jsx("section", __assign({ className: styles.quillDiv }, { children: _jsx(ReactQuill, { theme: "snow", value: description, onChange: setDescription, className: styles.quill }) }))] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "category" }, { children: "Category " })), _jsxs("select", __assign({ id: "category", name: "category", required: true, "aria-required": true, value: formDetails.category, onChange: function (e) { return handleInputChange(e, setFormDetails); } }, { children: [_jsx("option", __assign({ value: "null" }, { children: "Category" })), _jsx("option", __assign({ value: "wedding" }, { children: "Wedding" })), _jsx("option", __assign({ value: "academic" }, { children: "Academic" })), _jsx("option", __assign({ value: "boardrooms" }, { children: "Boardroom" })), _jsx("option", __assign({ value: "meetings" }, { children: "Meetings" }))] }))] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "furnishing" }, { children: "Custom furnishing" })), _jsx("input", { id: "furnishing", name: "furnishing", required: true, "aria-required": true, type: "text", value: formDetails.furnishing, onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "vEmail" }, { children: "Venue Email" })), _jsx("input", { id: "vEmail", name: "vEmail", required: true, "aria-required": true, type: "email", value: formDetails.vEmail, onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "vPhone" }, { children: "Venue Phone" })), _jsx("input", { id: "vPhone", name: "vPhone", required: true, "aria-required": true, type: "text", value: formDetails.vPhone, onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "select_type" }, { children: "Select type" })), _jsxs("select", __assign({ name: "select_type", id: "select_type", onChange: function (e) { return handleInputChange(e, setFormDetails); }, value: formDetails.select_type, required: true, "aria-required": true }, { children: [_jsx("option", __assign({ value: "indoor" }, { children: "Indoor" })), _jsx("option", __assign({ value: "outdoor" }, { children: "Outdoor" }))] }))] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "bathrooms" }, { children: "No. of bathrooms" })), _jsx("input", { id: "bathrooms", name: "bathrooms", required: true, "aria-required": true, type: "text", value: formDetails.bathrooms, onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "toilets" }, { children: "No. of toilets" })), _jsx("input", { id: "toilets", name: "toilets", required: true, "aria-required": true, type: "text", value: formDetails.toilets, onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "starting_price" }, { children: "Starting price" })), _jsx("input", { id: "starting_price", name: "starting_price", required: true, "aria-required": true, type: "text", value: formDetails.starting_price, onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "location" }, { children: "Location" })), _jsx("input", { id: "location", name: "location", required: true, "aria-required": true, type: "text", value: formDetails.location, onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "no_of_guest" }, { children: "No of guest" })), _jsx("input", { id: "no_of_guest", name: "no_of_guest", required: true, "aria-required": true, type: "text", value: formDetails.no_of_guest, onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "venue_type" }, { children: "Venue type" })), _jsx("input", { id: "venue_type", name: "venue_type", required: true, "aria-required": true, type: "text", value: formDetails.venue_type, onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "space_preference" }, { children: "Space preference" })), _jsx("input", { id: "space_preference", name: "space_preference", required: true, "aria-required": true, type: "text", value: formDetails.space_preference, onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "imgs" }, { children: "Event Photos" })), _jsx("input", { type: "file", multiple: true, onChange: function (e) { return handleInputChange(e, setFormDetails); }, name: "imgs", id: "imgs", required: true, "aria-required": true, accept: "image/jpg, image/jpeg, image/png, image/svg, image/webp, image/avif" })] }), _jsx("h4", { children: "Opening hours" }), _jsxs("section", { children: [_jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "MONDAY_OPEN" }, { children: "Monday Open" })), _jsx("input", { type: "time", id: "MONDAY_OPEN", name: "MONDAY_OPEN", value: (_b = formDetails.MONDAY_OPEN) === null || _b === void 0 ? void 0 : _b.toString(), onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "MONDAY_CLOSE" }, { children: "Monday Close" })), _jsx("input", { type: "time", id: "MONDAY_CLOSE", name: "MONDAY_CLOSE", value: (_c = formDetails.MONDAY_CLOSE) === null || _c === void 0 ? void 0 : _c.toString(), onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "TUESDAY_OPEN" }, { children: "Tuesday Open" })), _jsx("input", { type: "time", id: "TUESDAY_OPEN", name: "TUESDAY_OPEN", value: (_d = formDetails.TUESDAY_OPEN) === null || _d === void 0 ? void 0 : _d.toString(), onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "TUESDAY_CLOSE" }, { children: "Tuesday Close" })), _jsx("input", { type: "time", id: "TUESDAY_CLOSE", name: "TUESDAY_CLOSE", value: (_e = formDetails.TUESDAY_CLOSE) === null || _e === void 0 ? void 0 : _e.toString(), onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "WEDNESDAY_OPEN" }, { children: "Wednesday Open" })), _jsx("input", { type: "time", id: "WEDNESDAY_OPEN", name: "WEDNESDAY_OPEN", value: (_f = formDetails.WEDNESDAY_OPEN) === null || _f === void 0 ? void 0 : _f.toString(), onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "WEDNESDAY_CLOSE" }, { children: "Wednesday Close" })), _jsx("input", { type: "time", id: "WEDNESDAY_CLOSE", name: "WEDNESDAY_CLOSE", value: (_g = formDetails.WEDNESDAY_CLOSE) === null || _g === void 0 ? void 0 : _g.toString(), onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "THURSDAY_OPEN" }, { children: "Thursday Open" })), _jsx("input", { type: "time", id: "THURSDAY_OPEN", name: "THURSDAY_OPEN", value: (_h = formDetails.THURSDAY_OPEN) === null || _h === void 0 ? void 0 : _h.toString(), onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "THURSDAY_CLOSE" }, { children: "Thursday Close" })), _jsx("input", { type: "time", id: "THURSDAY_CLOSE", name: "THURSDAY_CLOSE", value: (_j = formDetails.THURSDAY_CLOSE) === null || _j === void 0 ? void 0 : _j.toString(), onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "FRIDAY_OPEN" }, { children: "Friday Open" })), _jsx("input", { type: "time", id: "FRIDAY_OPEN", name: "FRIDAY_OPEN", value: (_k = formDetails.FRIDAY_OPEN) === null || _k === void 0 ? void 0 : _k.toString(), onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "FRIDAY_CLOSE" }, { children: "Friday Close" })), _jsx("input", { type: "time", id: "FRIDAY_CLOSE", name: "FRIDAY_CLOSE", value: (_l = formDetails.FRIDAY_CLOSE) === null || _l === void 0 ? void 0 : _l.toString(), onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "SATURDAY_OPEN" }, { children: "Saturday Open" })), _jsx("input", { type: "time", id: "SATURDAY_OPEN", name: "SATURDAY_OPEN", value: (_m = formDetails.SATURDAY_OPEN) === null || _m === void 0 ? void 0 : _m.toString(), onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "SATURDAY_CLOSE" }, { children: "Saturday Close" })), _jsx("input", { type: "time", id: "SATURDAY_CLOSE", name: "SATURDAY_CLOSE", value: (_o = formDetails.SATURDAY_CLOSE) === null || _o === void 0 ? void 0 : _o.toString(), onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "SUNDAY_OPEN" }, { children: "Sunday Open" })), _jsx("input", { type: "time", id: "SUNDAY_OPEN", name: "SUNDAY_OPEN", value: (_p = formDetails.SUNDAY_OPEN) === null || _p === void 0 ? void 0 : _p.toString(), onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "SUNDAY_CLOSE" }, { children: "Sunday Close" })), _jsx("input", { type: "time", id: "SUNDAY_CLOSE", name: "SUNDAY_CLOSE", value: (_q = formDetails.SUNDAY_CLOSE) === null || _q === void 0 ? void 0 : _q.toString(), onChange: function (e) { return handleInputChange(e, setFormDetails); } })] })] }), _jsxs("div", { children: [_jsx("input", { type: "reset", value: "Reset" }), _jsx("button", __assign({ type: "submit" }, { children: "Post" }))] })] })), errMsg && _jsx(InlineErrMsg, { errMsg: errMsg }), successMsg && _jsx(InlineSuccessMsg, { successMsg: successMsg })] })));
};
