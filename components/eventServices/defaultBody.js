import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { GroupSuggestions } from "../groups/suggestions";
import { VenueOrEventAd } from "../home/venueAd";
import { PopularPhotos } from "./popularPhoto";
export var DefaultBody = function () {
    return (_jsxs(_Fragment, { children: [_jsx("section", { children: _jsx(PopularPhotos, {}) }), _jsx("section", { children: _jsx(VenueOrEventAd, { props: "Find the, BEST, VENUE, for your, Events ", body: "Lorem ipsum dolor sit amet consectetur. Velit viverra rhoncus pharetra in ut sit.", toAttr: "venues" }) }), _jsx(GroupSuggestions, {})] }));
};
