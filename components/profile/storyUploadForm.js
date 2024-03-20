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
import styles from "./styles/storyUploadFormGDK.module.css";
import uploadStoryFn from "../../lib/story/upload";
import { handleInputChange } from "../global/handleInputChange";
import { InlineErrMsg } from "../global/inlineErrMsg";
import { InlineSuccessMsg } from "../global/inllineSuccessMsg";
export var StoryUploadForm = function (_a) {
    var userImg = _a.userImg, userFirstName = _a.userFirstName, userLastName = _a.userLastName, setShowUpload = _a.setShowUpload;
    var _b = useState({ video: "" }), formDetails = _b[0], setFormDetails = _b[1];
    var _c = useState(""), errMsg = _c[0], setErrMsg = _c[1];
    var _d = useState(""), successMsg = _d[0], setSuccessMsg = _d[1];
    var _e = useState(false), isSubmitting = _e[0], setIsSubmitting = _e[1];
    function handleSubmit(event) {
        return __awaiter(this, void 0, void 0, function () {
            var formDataBody, key, value, fileList, i, res, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        formDataBody = new FormData();
                        for (key in formDetails) {
                            if (key === "video") {
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
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        setIsSubmitting(true);
                        return [4 /*yield*/, uploadStoryFn({ formDataBody: formDataBody, setErrMsg: setErrMsg })];
                    case 2:
                        res = _a.sent();
                        if (res === null || res === void 0 ? void 0 : res.message.includes("successful")) {
                            setSuccessMsg(res.message);
                        }
                        setIsSubmitting(false);
                        // reset the form
                        setFormDetails({
                            video: "",
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
    return (_jsxs("div", __assign({ className: styles.containerGDK }, { children: [_jsxs("span", { children: [_jsx("h3", { children: "Create Post" }), _jsx("p", __assign({ onClick: function () { return setShowUpload(false); } }, { children: "X" }))] }), _jsx("hr", {}), _jsxs("div", { children: [_jsx("div", { children: _jsx("img", { src: userImg, alt: "gjdj" }) }), _jsx("div", { children: _jsxs("h5", { children: [userFirstName, " ", userLastName] }) })] }), _jsxs("form", __assign({ onSubmit: handleSubmit }, { children: [_jsx("div", { children: _jsx("input", { type: "file", name: "video", id: "video", onChange: function (e) { return handleInputChange(e, setFormDetails); }, required: true, "aria-required": true }) }), _jsx("button", { children: isSubmitting ? "Uploading..." : "Upload" })] })), errMsg && _jsx(InlineErrMsg, { errMsg: errMsg }), successMsg && _jsx(InlineSuccessMsg, { successMsg: successMsg })] })));
};
