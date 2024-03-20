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
import { useState } from "react";
import stylesDetails from "../../components/profile/styles/personalDetailsFY8.module.css";
import { handleInputChange } from "../global/handleInputChange";
import updateProfileImgFn from "../../lib/profile/updateImg";
import { InlineErrMsg } from "../global/inlineErrMsg";
import { InlineSuccessMsg } from "../global/inllineSuccessMsg";
export var PersonalDetails = function (_a) {
    var showProfile = _a.showProfile, handleShowEdit = _a.handleShowEdit, handleShowProfile = _a.handleShowProfile, first_name = _a.first_name, last_name = _a.last_name, phone_number = _a.phone_number, country_code = _a.country_code, email = _a.email;
    var _b = useState({
        img: "",
    }), formDetails = _b[0], setFormDetails = _b[1];
    var _c = useState(""), errMsg = _c[0], setErrMsg = _c[1];
    // Temporary state. To be moved to a global component based on successful implementation
    var _d = useState(""), successMsg = _d[0], setSuccessMsg = _d[1];
    function handleSubmit(e) {
        return __awaiter(this, void 0, void 0, function () {
            var formDataBody, key, value, fileList, i;
            return __generator(this, function (_a) {
                e.preventDefault();
                formDataBody = new FormData();
                for (key in formDetails) {
                    if (key === "img") {
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
                try {
                    updateProfileImgFn({
                        formDataBody: formDataBody,
                        setErrMsg: setErrMsg,
                    }).then(function (data) {
                        setSuccessMsg(data.message);
                        // reset the form to empty
                    });
                }
                catch (error) { }
                return [2 /*return*/];
            });
        });
    }
    return (_jsxs(_Fragment, { children: [_jsxs("div", { children: [_jsx("button", __assign({ onClick: handleShowProfile, className: showProfile ? stylesDetails.active : stylesDetails.nonActive }, { children: "My profile" })), _jsx("button", __assign({ onClick: handleShowEdit, className: !showProfile ? stylesDetails.active : stylesDetails.nonActive }, { children: "Edit profile" }))] }), _jsxs("div", { children: [_jsx("h4", { children: "Personal Details" }), _jsx("button", __assign({ onClick: handleShowEdit }, { children: "Edit profile" }))] }), _jsxs("div", __assign({ className: stylesDetails.profileList }, { children: [_jsx("p", { children: first_name + " " + last_name }), phone_number && _jsx("p", { children: phone_number }), _jsxs("p", { children: ["Dial code: ", country_code] }), _jsx("p", { children: email })] })), _jsx("div", __assign({ className: stylesDetails.imgIcon }, { children: _jsx("img", { src: "/home/Group.svg", alt: "icon" }) })), _jsxs("form", __assign({ onSubmit: handleSubmit }, { children: [_jsx("label", { htmlFor: "img", hidden: true }), _jsx("input", { type: "file", name: "img", id: "img", onChange: function (e) { return handleInputChange(e, setFormDetails); }, required: true, "aria-required": true }), _jsx("button", { children: "Change Photo" })] })), errMsg && (_jsx(_Fragment, { children: _jsx(InlineErrMsg, { errMsg: errMsg }) })), successMsg && (_jsx(_Fragment, { children: _jsx(InlineSuccessMsg, { successMsg: successMsg }) }))] }));
};
