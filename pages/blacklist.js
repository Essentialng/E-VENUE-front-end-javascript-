import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BlacklistEvents } from "../components/blacklist/events";
import { Hero } from "../components/blacklist/hero";
import { BlacklistVenue } from "../components/blacklist/venues";
var Blacklist = function () {
    return (_jsxs("article", { children: [_jsx(Hero, {}), _jsx("section", { children: _jsx(BlacklistVenue, {}) }), _jsx("section", { children: _jsx(BlacklistEvents, {}) })] }));
};
export default Blacklist;
