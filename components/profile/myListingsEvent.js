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
import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import stylesDetails from "../../components/profile/styles/personalDetailsFY8.module.css";
import { handleInputChange } from "../global/handleInputChange";
export var MLEvents = function (_a) {
    var showEvent = _a.showEvent, handleShowEdit = _a.handleShowVenue, handleShowProfile = _a.handleShowEvent, total = _a.total, venuesTotal = _a.venuesTotal, formDetails = _a.formDetails, setFormDetails = _a.setFormDetails, handleSearch = _a.handleSearch;
    return (_jsxs(_Fragment, { children: [_jsxs("div", { children: [_jsxs("button", __assign({ onClick: handleShowProfile, className: showEvent ? stylesDetails.active : stylesDetails.nonActive }, { children: ["Event(", total, ")"] })), _jsxs("button", __assign({ onClick: handleShowEdit, className: !showEvent ? stylesDetails.active : stylesDetails.nonActive }, { children: ["Venue(", venuesTotal, ")"] }))] }), _jsxs("form", { children: [_jsxs("section", { children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "name" }), _jsx("input", { type: "text", placeholder: "name", name: "name", value: formDetails.name, onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "category" }), _jsx("input", { type: "text", placeholder: "category", name: "category", value: formDetails.category, onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "frequency" }), _jsx("input", { type: "text", placeholder: "frequency", name: "frequency", value: formDetails.frequency, onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "price" }), _jsx("input", { type: "text", placeholder: "price", name: "price", value: formDetails.price, onChange: function (e) { return handleInputChange(e, setFormDetails); } })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "location" }), _jsx("input", { type: "text", placeholder: "location", name: "location", value: formDetails.location, onChange: function (e) { return handleInputChange(e, setFormDetails); } })] })] }), _jsx("div", __assign({ className: stylesDetails.buttonDiv }, { children: _jsx("button", __assign({ onClick: handleSearch }, { children: "Search" })) }))] })] }));
};
