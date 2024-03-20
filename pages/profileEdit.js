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
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import stylesDetails from "../components/profile/styles/personalDetailsFY8.module.css";
import stylesForm from "../components/profile/styles/profileEditBI1.module.css";
import { handleInputChange } from "../components/global/handleInputChange";
import { useState } from "react";
import updateProfileFn from "../lib/profile/update";
import { InlineErrMsg } from "../components/global/inlineErrMsg";
export var ProfileEdit = function (_a) {
    var showProfile = _a.showProfile, handleShowEdit = _a.handleShowEdit, handleShowProfile = _a.handleShowProfile;
    var _b = useState({
        first_name: "",
        last_name: "",
        business_name: "",
        business_img: "",
        country_code: "",
        phone_number: "",
        whatsapp_number: "",
        state: "",
        axis: "",
        business_state: "",
        business_axis: "",
        business_category: "",
        facebook: "",
        twitter: "",
        linkedin: "",
        instagram: "",
    }), formDetails = _b[0], setFormDetails = _b[1];
    var _c = useState(""), about_your_organisation = _c[0], setAbout_your_organisation = _c[1];
    var _d = useState(""), services_your_organization_provides = _d[0], setServices_your_organization_provides = _d[1];
    // error state
    var _e = useState(""), errMsg = _e[0], setErrMsg = _e[1];
    function handleSubmit(e) {
        return __awaiter(this, void 0, void 0, function () {
            var formDataBody, key, value, fileList, i, res, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        formDataBody = new FormData();
                        for (key in formDetails) {
                            if (key === "business_img") {
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
                        // append the stand alone states
                        formDataBody.append("about_your_organisation", about_your_organisation);
                        formDataBody.append("services_your_organization_provides", services_your_organization_provides);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, updateProfileFn({ formDataBody: formDataBody, setErrMsg: setErrMsg })];
                    case 2:
                        res = _a.sent();
                        console.log({ res: res });
                        // reset the form
                        setFormDetails({
                            first_name: "",
                            last_name: "",
                            business_name: "",
                            business_img: "",
                            country_code: "",
                            phone_number: "",
                            whatsapp_number: "",
                            state: "",
                            axis: "",
                            business_state: "",
                            business_axis: "",
                            business_category: "",
                            facebook: "",
                            twitter: "",
                            linkedin: "",
                            instagram: "",
                        });
                        setAbout_your_organisation("");
                        setServices_your_organization_provides("");
                        console.log({ res: res });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error({ error: error_1 });
                        return [2 /*return*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    return (_jsxs(_Fragment, { children: [_jsxs("div", { children: [_jsx("button", __assign({ onClick: handleShowProfile, className: showProfile ? stylesDetails.active : stylesDetails.nonActive }, { children: "My profile" })), _jsx("button", __assign({ onClick: handleShowEdit, className: !showProfile ? stylesDetails.active : stylesDetails.nonActive }, { children: "Edit profile" }))] }), _jsx("div", { children: _jsx("h4", { children: "My Profile" }) }), _jsxs("form", __assign({ onSubmit: handleSubmit, className: stylesForm.containerBI1 }, { children: [_jsxs("section", __assign({ className: stylesForm.flexWrapper }, { children: [_jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "first_name" }, { children: "First name" })), _jsx("input", { type: "text", id: "first_name", name: "first_name", value: formDetails.first_name, onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "last_name" }, { children: "Last name" })), _jsx("input", { type: "text", id: "last_name", name: "last_name", value: formDetails.last_name, onChange: function (e) { return handleInputChange(e, setFormDetails); } })] })] })), _jsxs("section", { children: [_jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "business_name" }, { children: "Business name" })), _jsx("input", { type: "text", id: "business_name", name: "business_name", value: formDetails.business_name || undefined, onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "business_img" }, { children: "Upload business img" })), _jsx("input", { type: "file", id: "business_img", name: "business_img", onChange: function (e) { return handleInputChange(e, setFormDetails); } })] })] }), _jsxs(_Fragment, { children: [_jsx("div", __assign({ className: stylesForm.header }, { children: _jsx("h4", { children: "Contact information" }) })), _jsxs("section", __assign({ className: stylesForm.flexWrapper }, { children: [_jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "country_code" }, { children: "Country code" })), _jsx("input", { type: "text", id: "country_code", name: "country_code", value: formDetails.country_code || undefined, onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "phone_number" }, { children: "Phone number" })), _jsx("input", { type: "text", id: "phone_number", name: "phone_number", value: formDetails.phone_number || undefined, onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "whatsapp_number" }, { children: "Whatsapp number" })), _jsx("input", { type: "text", id: "whatsapp_number", name: "whatsapp_number", value: formDetails.whatsapp_number || undefined, onChange: function (e) { return handleInputChange(e, setFormDetails); } })] })] }))] }), _jsxs(_Fragment, { children: [_jsx("div", __assign({ className: stylesForm.header }, { children: _jsx("h4", { children: "Address details" }) })), _jsxs("section", __assign({ className: stylesForm.flexWrapper }, { children: [_jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "state" }, { children: "State" })), _jsx("input", { type: "text", id: "state", name: "state", value: formDetails.state || undefined, onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "axis" }, { children: "Axis" })), _jsx("input", { type: "text", id: "axis", name: "axis", value: formDetails.axis || undefined, onChange: function (e) { return handleInputChange(e, setFormDetails); } })] })] }))] }), _jsxs("div", { children: [_jsx("div", __assign({ className: stylesForm.header }, { children: _jsx("h4", { children: "About your organization" }) })), _jsxs("div", __assign({ className: stylesForm.quillArea }, { children: [_jsx("label", { htmlFor: "" }), _jsx(ReactQuill, { theme: "snow", value: about_your_organisation, onChange: setAbout_your_organisation, className: stylesForm.quill, placeholder: "About your organization" })] })), _jsxs("div", __assign({ className: stylesForm.quillArea }, { children: [_jsx("label", { htmlFor: "" }), _jsx(ReactQuill, { theme: "snow", value: services_your_organization_provides, onChange: setServices_your_organization_provides, className: stylesForm.quill, placeholder: "Services Your Organization Provides, ...." })] })), _jsxs("section", __assign({ className: stylesForm.flexWrapper }, { children: [_jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "business_state" }, { children: "Business state" })), _jsx("input", { type: "text", id: "business_state", name: "business_state", value: formDetails.business_state || undefined, onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "business_axis" }, { children: "Business axis" })), _jsx("input", { type: "text", id: "business_axis", name: "business_axis", value: formDetails.business_axis || undefined, onChange: function (e) { return handleInputChange(e, setFormDetails); } })] })] })), _jsx("label", __assign({ htmlFor: "business_category" }, { children: "Business category" })), _jsx("input", { type: "text", id: "business_category", name: "business_category", value: formDetails.business_category || undefined, onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs(_Fragment, { children: [_jsx("div", __assign({ className: stylesForm.header }, { children: _jsx("h4", { children: "Social media" }) })), _jsxs("section", __assign({ className: stylesForm.flexWrapper }, { children: [_jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "facebook" }, { children: "Facebook" })), _jsx("input", { type: "text", id: "facebook", name: "facebook", value: formDetails.facebook || undefined, onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "twitter" }, { children: "Twitter" })), _jsx("input", { type: "text", id: "twitter", name: "twitter", value: formDetails.twitter || undefined, onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "linkedin" }, { children: "Linkedin" })), _jsx("input", { type: "text", id: "linkedin", name: "linkedin", value: formDetails.linkedin || undefined, onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "instagram" }, { children: "Instagram" })), _jsx("input", { type: "text", id: "instagram", name: "instagram", value: formDetails.instagram || undefined, onChange: function (e) { return handleInputChange(e, setFormDetails); } })] })] }))] }), _jsxs("div", __assign({ className: stylesForm.ctaArea }, { children: [_jsx("input", { type: "button", value: "Cancel" // value is targeted in CSS
                             }), _jsx("button", { children: "Submit" })] }))] })), errMsg && _jsx(InlineErrMsg, { errMsg: errMsg })] }));
};
