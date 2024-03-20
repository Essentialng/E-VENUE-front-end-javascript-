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
export var MLVenues = function (_a) {
    var showEvent = _a.showEvent, handleShowEdit = _a.handleShowVenue, handleShowProfile = _a.handleShowEvent, total = _a.total, venuesTotal = _a.venuesTotal, formDetailsVenue = _a.formDetailsVenue, setFormDetailsVenue = _a.setFormDetailsVenue, handleVenuesSearch = _a.handleVenuesSearch;
    return (_jsxs(_Fragment, { children: [_jsxs("div", { children: [_jsxs("button", __assign({ onClick: handleShowProfile, className: showEvent ? stylesDetails.active : stylesDetails.nonActive }, { children: ["Event(", total, ")"] })), _jsxs("button", __assign({ onClick: handleShowEdit, className: !showEvent ? stylesDetails.active : stylesDetails.nonActive }, { children: ["Venue(", venuesTotal, ")"] }))] }), _jsxs("form", { children: [_jsxs("section", { children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "title" }), _jsx("input", { type: "text", placeholder: "title", name: "title", value: formDetailsVenue.title, onChange: function (e) { return handleInputChange(e, setFormDetailsVenue); } })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "category" }), _jsx("input", { type: "text", placeholder: "category", name: "category", value: formDetailsVenue.category, onChange: function (e) { return handleInputChange(e, setFormDetailsVenue); } })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "venue_type" }), _jsx("input", { type: "text", placeholder: "venue_type", name: "venue_type", value: formDetailsVenue.venue_type, onChange: function (e) { return handleInputChange(e, setFormDetailsVenue); } })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "starting_price" }), _jsx("input", { type: "text", placeholder: "starting_price", name: "starting_price", value: formDetailsVenue.starting_price, onChange: function (e) { return handleInputChange(e, setFormDetailsVenue); } })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "location" }), _jsx("input", { type: "text", placeholder: "location", name: "location", value: formDetailsVenue.location, onChange: function (e) { return handleInputChange(e, setFormDetailsVenue); } })] })] }), _jsx("div", __assign({ className: stylesDetails.buttonDiv }, { children: _jsx("button", __assign({ onClick: handleVenuesSearch }, { children: "Search" })) }))] })] }));
};
