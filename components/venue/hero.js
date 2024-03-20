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
import styles from "./styles/heroI1W.module.css";
export var Hero = function (_a) {
    var formDetails = _a.formDetails, setFormDetails = _a.setFormDetails, handleSearch = _a.handleSearch;
    return (_jsx("div", __assign({ className: styles.containerI1W }, { children: _jsxs("div", __assign({ className: styles.contentBox }, { children: [_jsx("h1", { children: "Book a Venue for your Event" }), _jsx("div", { children: _jsxs("div", { children: [_jsxs("div", { children: [_jsxs("select", __assign({ name: "category", value: formDetails.category, onChange: function (e) { return handleInputChange(e, setFormDetails); } }, { children: [_jsx("option", __assign({ value: "null" }, { children: "Category" })), _jsx("option", __assign({ value: "meetings" }, { children: "Meetings" })), _jsx("option", __assign({ value: "shows" }, { children: "Shows" })), _jsx("option", __assign({ value: "academic" }, { children: "Academic" })), _jsx("option", __assign({ value: "boardrooms" }, { children: "Boardrooms" }))] })), _jsx("input", { type: "text", placeholder: "Location", name: "location", value: formDetails.location, onChange: function (e) { return handleInputChange(e, setFormDetails); } }), _jsx("input", { type: "text", placeholder: "No of guest", name: "no_of_guest", value: formDetails.no_of_guest, onChange: function (e) { return handleInputChange(e, setFormDetails); } }), _jsx("input", { type: "text", placeholder: "Venue type", name: "venue_type", value: formDetails.venue_type, onChange: function (e) { return handleInputChange(e, setFormDetails); } }), _jsx("input", { type: "text", placeholder: "Space preference", name: "space_preference", value: formDetails.space_preference, onChange: function (e) { return handleInputChange(e, setFormDetails); } }), _jsx("input", { type: "text", placeholder: "Rating", name: "rating", value: formDetails.rating, onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsx("button", __assign({ onClick: handleSearch }, { children: "Search" }))] }) })] })) })));
};
