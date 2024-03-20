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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import styles from "./styles/inlineSuccessMsgUE5.module.css";
import { useEffect, useState } from "react";
export var InlineSuccessMsg = function (_a) {
    var successMsg = _a.successMsg;
    // state for the error message
    var _b = useState(successMsg), errorMessage = _b[0], setErrorMessage = _b[1]; // Initialize the error message state with the received error message
    // set time out for the error message to disappear after 5 seconds
    useEffect(function () {
        var timeout = setTimeout(function () {
            // Code to clear the error message here
            setErrorMessage(""); // Clear the error message after 5 seconds
        }, 20000);
        return function () {
            clearTimeout(timeout);
        };
    }, [successMsg]); // Update the error message state whenever a new error message is received
    return (_jsx(_Fragment, { children: errorMessage && (_jsx("div", __assign({ className: styles.containerUE5 }, { children: errorMessage })) // Display the error message from the state
        ) }));
};
