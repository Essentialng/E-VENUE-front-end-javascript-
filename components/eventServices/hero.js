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
import { handleInputChange } from "../global/handleInputChange";
import styles from "./styles/heroQ22.module.css";
export var Hero = function (_a) {
    var formDetails = _a.formDetails, setFormDetails = _a.setFormDetails, handleSearch = _a.handleSearch;
    return (_jsx("div", __assign({ className: styles.containerQ22 }, { children: _jsxs("div", __assign({ className: styles.contentBox }, { children: [_jsxs("h1", { children: [_jsx("span", { children: "Discover" }), " where the ", _jsx("span", { children: "Fun" }), " is"] }), _jsx("div", { children: _jsxs("div", { children: [_jsxs("div", { children: [_jsxs("select", __assign({ name: "category", value: formDetails.category, onChange: function (e) { return handleInputChange(e, setFormDetails); } }, { children: [_jsx("option", __assign({ value: "null" }, { children: "Category" })), _jsx("option", __assign({ value: "Photography/Videography" }, { children: "Photography/Videography" })), _jsx("option", __assign({ value: "make_up_artise" }, { children: "make up artise" }))] })), _jsx("input", { type: "text", placeholder: "Location", name: "location", value: formDetails.location, onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsx("button", __assign({ onClick: handleSearch }, { children: "Search" }))] }) })] })) })));
};
