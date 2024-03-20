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
import { BlankVenue4StatesCat } from "./blankVenue4StateCat";
import styles from "./styles/viewByCategoryDKI.module.css";
export var ViewByCategoryV = function () {
    var category_identifier = useParams().category_identifier;
    console.log({ category_identifier: category_identifier });
    if (!category_identifier) {
        throw new Error("pass category view");
    }
    // capitalize title
    var title = category_identifier.charAt(0).toUpperCase() + category_identifier.slice(1);
    return (_jsx("article", __assign({ className: styles.containerDKI }, { children: _jsx(BlankVenue4StatesCat, { locationIdentifier: category_identifier, title: "".concat(title, " venues") }) })));
};
