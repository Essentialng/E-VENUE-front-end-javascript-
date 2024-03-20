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
import { jsx as _jsx } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
import { BlankVenue4States } from "./blankVenue4States";
import styles from "./styles/viewByCategoryDKI.module.css";
export var ViewByLocation = function () {
    var location_identifier = useParams().location_identifier;
    console.log({ location_identifier: location_identifier });
    if (!location_identifier) {
        throw new Error("pass category view");
    }
    // capitalize title
    var title = location_identifier.charAt(0).toUpperCase() + location_identifier.slice(1);
    return (_jsx("article", __assign({ className: styles.containerDKI }, { children: _jsx(BlankVenue4States, { locationIdentifier: location_identifier, title: "".concat(title, " venues") }) })));
};
