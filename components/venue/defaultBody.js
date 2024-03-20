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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { EServiceCategory } from "../eventServices/getCatByEService";
import { GroupSuggestions } from "../groups/suggestions";
import { VenueOrEventAd } from "../home/venueAd";
import { PopularVenues } from "./popularVenues";
import { ShowAdminEventsCategories } from "./showCatByEvenue";
import { ShowLocations } from "./showLocations";
import { ShowCategories } from "./showcategory";
import { BlankVenue } from "./weddingVenues";
export var DefaultBody = function () {
    return (_jsxs(_Fragment, { children: [_jsx("section", { children: _jsx(ShowLocations, {}) }), _jsx("section", { children: _jsx(ShowCategories, {}) }), _jsx("section", { children: _jsx(ShowAdminEventsCategories, {}) }), _jsx("section", { children: _jsx(EServiceCategory, {}) }), _jsx("section", { children: _jsx(BlankVenue, { identifierValue: "wedding", title: "Popular Wedding venues" }) }), _jsx("section", { children: _jsx(BlankVenue, { identifierValue: "boardrooms", title: "Popular Boardroom venues" }) }), _jsx("section", { children: _jsx(BlankVenue, { identifierValue: "academic", title: "Popular Academic venues" }) }), _jsx("section", { children: _jsx(BlankVenue, { identifierValue: "meetings", title: "Popular Meetings venues" }) }), _jsx("section", { children: _jsx(VenueOrEventAd, { props: "Find the, BEST, EVENTS, Happening Around you", body: "Some random words spanning two to three lines. Guess will have to find out.", toAttr: "events" }) }), _jsx("section", { children: _jsx(PopularVenues, {}) }), _jsx("section", __assign({ id: "group" }, { children: _jsx(GroupSuggestions, {}) }))] }));
};
