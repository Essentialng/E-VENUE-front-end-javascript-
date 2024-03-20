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
import { handleInputChange } from "../global/handleInputChange";
import createEventFn from "../../lib/events/createEvent";
import styles from "./styles/createEvent83D.module.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { InlineSuccessMsg } from "../global/inllineSuccessMsg";
import { InlineErrMsg } from "../global/inlineErrMsg";
export var CreateEventForm = function (_a) {
    var first_name = _a.first_name;
    var _b = useState({
        name: "",
        location: "",
        url: "",
        category: "",
        frequency: "single",
        start_date_and_time: new Date(),
        end_date_and_time: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
        time_zone: "+1",
        imgs: "",
        price: "",
    }), formDetails = _b[0], setFormDetails = _b[1];
    var _c = useState(""), description = _c[0], setDescription = _c[1];
    var _d = useState(""), errMsg = _d[0], setErrMsg = _d[1];
    var _e = useState(""), successMsg = _e[0], setSuccessMsg = _e[1];
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
                        return [4 /*yield*/, createEventFn({ formDataBody: formDataBody, setErrMsg: setErrMsg })];
                    case 2:
                        res = _a.sent();
                        if (res.message.includes("successfully")) {
                            setSuccessMsg(res.message);
                        }
                        //TODO: Go to the event page
                        // reset the form
                        setFormDetails({
                            name: "",
                            location: "",
                            url: "",
                            category: "",
                            frequency: "",
                            time_zone: "",
                            start_date_and_time: new Date(),
                            end_date_and_time: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
                            imgs: "",
                            price: "",
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
            : "".concat(styles.container83D, " ").concat(styles.bigContainer) }, { children: [_jsx("div", {}), _jsxs("div", { children: [_jsxs("h2", { children: ["Hey ", first_name !== null && first_name !== void 0 ? first_name : "", " "] }), _jsx("p", { children: " let's set up your event...It will only take a few minutes" })] }), _jsx("h3", { children: "Events details" }), _jsxs("form", __assign({ onSubmit: handleSubmit }, { children: [_jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "name" }, { children: "Event Name" })), _jsx("input", { id: "name", name: "name", required: true, "aria-required": true, type: "text", onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "description" }, { children: "Describe your event" })), _jsx("section", __assign({ className: styles.quillDiv }, { children: _jsx(ReactQuill, { theme: "snow", value: description, onChange: setDescription, className: styles.quill }) }))] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "location" }, { children: "Location of Event" })), _jsx("input", { id: "location", name: "location", required: true, "aria-required": true, type: "text", onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "url" }, { children: "Use Custom URL" })), _jsx("input", { id: "url", name: "url", required: true, "aria-required": true, type: "url", onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "category" }, { children: "What kind of event is it?" })), _jsxs("select", __assign({ name: "category", id: "category", onChange: function (e) { return handleInputChange(e, setFormDetails); }, value: formDetails.category, required: true, "aria-required": true }, { children: [_jsx("option", __assign({ value: "" }, { children: "--Please choose an option--" })), _jsx("option", __assign({ value: "meetings" }, { children: "Meetings" })), _jsx("option", __assign({ value: "training" }, { children: "Training" })), _jsx("option", __assign({ value: "cooperation" }, { children: "Cooperation" })), _jsx("option", __assign({ value: "party" }, { children: "Party" })), "\u2590", _jsx("option", __assign({ value: "engagement" }, { children: "Engagement" }))] }))] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "start_date_and_time" }, { children: "Start date" })), _jsx("input", { type: "datetime-local", id: "start_date_and_time", name: "start_date_and_time", value: formDetails.start_date_and_time.toString(), min: new Date().toISOString().split("T")[0] + "T00:00", 
                                // max="2018-06-14T00:00"
                                onChange: function (e) { return handleInputChange(e, setFormDetails); }, required: true, "aria-required": true })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "end_date_and_time" }, { children: "End date" })), _jsx("input", { type: "datetime-local", id: "end_date_and_time", name: "end_date_and_time", value: formDetails.end_date_and_time.toString(), min: new Date().toISOString().split("T")[0] + "T00:00", 
                                // max="2018-06-14T00:00"
                                onChange: function (e) { return handleInputChange(e, setFormDetails); }, required: true, "aria-required": true })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "time_zone" }, { children: "Select time zone" })), _jsxs("select", __assign({ name: "time_zone", id: "time_zone", onChange: function (e) { return handleInputChange(e, setFormDetails); }, value: formDetails.time_zone, required: true, "aria-required": true }, { children: [_jsx("option", __assign({ value: "+1" }, { children: "UTC +1" })), _jsx("option", __assign({ value: "+2" }, { children: "UTC +2" }))] }))] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "frequency" }, { children: "Frequency" })), _jsxs("select", __assign({ name: "frequency", id: "frequency", onChange: function (e) { return handleInputChange(e, setFormDetails); }, value: formDetails.frequency, required: true, "aria-required": true }, { children: [_jsx("option", __assign({ value: "single" }, { children: "Single" })), _jsx("option", __assign({ value: "recurring" }, { children: "Recurring" }))] }))] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "imgs" }, { children: "Event Photos" })), _jsx("input", { type: "file", multiple: true, onChange: function (e) { return handleInputChange(e, setFormDetails); }, name: "imgs", id: "imgs", required: true, "aria-required": true, accept: "image/jpg, image/jpeg, image/png, image/svg, image/webp, image/avif" })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "price" }, { children: "Price" })), _jsx("input", { id: "price", name: "price", required: true, "aria-required": true, type: "number", onChange: function (e) { return handleInputChange(e, setFormDetails); }, value: formDetails.price })] }), _jsxs("div", { children: [_jsx("input", { type: "reset", value: "Reset" }), _jsx("button", __assign({ type: "submit" }, { children: "Post" }))] })] })), errMsg && _jsx(InlineErrMsg, { errMsg: errMsg }), successMsg && _jsx(InlineSuccessMsg, { successMsg: successMsg })] })));
};
