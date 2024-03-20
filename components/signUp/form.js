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
import { useState } from "react";
import { handleInputChange } from "../global/handleInputChange";
import signUpFn from "../../lib/users/signUp";
import styles from "../global/styles/signup&loginG9D.module.css";
import { MaxInputLength } from "../global/maxInputLength";
import { useNavigate } from "react-router-dom";
export var Form = function () {
    var _a = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    }), formDetails = _a[0], setFormDetails = _a[1];
    var _b = useState(""), errMsg = _b[0], setErrMsg = _b[1];
    var _c = useState(false), showPassword = _c[0], setShowPassword = _c[1];
    var navigate = useNavigate();
    var handleSubmit = function (e) {
        e.preventDefault();
        try {
            signUpFn({
                first_name: formDetails.first_name,
                last_name: formDetails.last_name,
                email: formDetails.email,
                password: formDetails.password,
                setErrMsg: setErrMsg,
            });
            navigate("/profile");
        }
        catch (error) { }
    };
    // when the max length is reached, a message display below the specific input
    // when the input is invalid on blur, add a className of pesudo class :invalid
    return (_jsxs("div", __assign({ className: styles.containerG9D }, { children: [errMsg && _jsx("p", __assign({ className: styles.errMsg }, { children: errMsg })), _jsxs("form", __assign({ onSubmit: handleSubmit }, { children: [_jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "first_name" }, { children: " First Name" })), _jsx("input", { type: "text", name: "first_name", value: formDetails.first_name, id: "first_name", required: true, "aria-required": true, onChange: function (e) { return handleInputChange(e, setFormDetails); }, autoComplete: "given-name", maxLength: 20 }), _jsx("div", { children: formDetails.first_name.length === 20 && _jsx(MaxInputLength, {}) })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "last_name" }, { children: " Last Name" })), _jsx("input", { type: "text", name: "last_name", value: formDetails.last_name, id: "last_name", required: true, "aria-required": true, onChange: function (e) { return handleInputChange(e, setFormDetails); }, autoComplete: "family-name", maxLength: 20 }), _jsx("div", { children: formDetails.last_name.length === 20 && _jsx(MaxInputLength, {}) })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "email" }, { children: " Email" })), _jsx("input", { type: "email", name: "email", value: formDetails.email, id: "email", required: true, "aria-required": true, onChange: function (e) { return handleInputChange(e, setFormDetails); }, autoComplete: "email", maxLength: 60 }), _jsx("div", { children: formDetails.email.length === 60 && _jsx(MaxInputLength, {}) })] }), _jsxs("div", { children: [_jsx("label", __assign({ htmlFor: "password" }, { children: " Password" })), _jsx("input", { type: showPassword ? "text" : "password", name: "password", value: formDetails.password, id: "password", required: true, "aria-required": true, onChange: function (e) { return handleInputChange(e, setFormDetails); }, autoComplete: "new-password", maxLength: 100 }), _jsx("div", __assign({ className: styles.showPasswordArea }, { children: showPassword ? (_jsx("p", __assign({ onClick: function (e) { return setShowPassword(false); } }, { children: "Hide password" }))) : (_jsx("p", __assign({ onClick: function (e) { return setShowPassword(true); } }, { children: "Show password" }))) })), _jsx("div", { children: formDetails.password.length === 100 && _jsx(MaxInputLength, {}) })] }), _jsx("button", { children: "Sign Up" })] }))] })));
};
