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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import styles from "./styles/popUpI21.module.css";
import { payStackFn } from "../../lib/paystack/paystack";
export var PopUp = function (_a) {
    var name = _a.name, price = _a.price, email = _a.email, setShowPayment = _a.setShowPayment;
    var _b = useState(1), noOfTickets = _b[0], setNoOfTickets = _b[1];
    // increment Max 10
    var handleIncrement = function () {
        if (noOfTickets < 10) {
            setNoOfTickets(function (prevNoOfTicket) { return prevNoOfTicket + 1; });
        }
    };
    // decrement Min 1
    var handleDecrement = function () {
        if (noOfTickets > 1) {
            setNoOfTickets(function (prevNoOfTicket) { return prevNoOfTicket - 1; });
        }
    };
    var totalPrice = price * noOfTickets;
    function handlePayment(e) {
        return __awaiter(this, void 0, void 0, function () {
            var formattedPrice, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        formattedPrice = totalPrice * 100;
                        return [4 /*yield*/, payStackFn({
                                email: email,
                                amount: formattedPrice.toString(),
                            })];
                    case 1:
                        res = _a.sent();
                        if (res) {
                            window.location.href = res.data.authorization_url;
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
    return (_jsxs("div", __assign({ className: styles.containerI21 }, { children: [_jsx("button", __assign({ onClick: function () { return setShowPayment(false); }, className: styles.closeBtn }, { children: "X" })), _jsx("img", { src: "/home/Rectangle 267.svg", alt: "fancy header" }), _jsxs("div", { children: [_jsxs("section", { children: [_jsxs("div", { children: [_jsxs("div", { children: [_jsx("h4", { children: "General Admission" }), _jsxs("div", __assign({ style: {
                                                    display: "flex",
                                                    columnGap: "1rem",
                                                    alignItems: "center",
                                                } }, { children: [_jsx("button", __assign({ className: "".concat(styles.greyBtn, " ").concat(styles.arithmeticBtn), onClick: handleDecrement }, { children: "-" })), _jsx("span", { children: noOfTickets < 10 ? "0" + noOfTickets : noOfTickets }), _jsx("button", __assign({ className: "".concat(styles.redBtn, " ").concat(styles.arithmeticBtn), onClick: handleIncrement }, { children: "+" }))] }))] }), _jsx("hr", {}), _jsxs("div", { children: [_jsx("h4", { children: "Free" }), _jsx("p", { children: "Saves ends on 2023" })] }), _jsx("hr", {})] }), _jsx("span", { children: _jsx("button", __assign({ onClick: handlePayment, className: "".concat(styles.redBtn, " ").concat(styles.buyBtn) }, { children: "Get Ticket" })) })] }), _jsxs("section", { children: [_jsxs("div", { children: [_jsx("h3", { children: name }), _jsx("p", __assign({ className: styles.orderSummary }, { children: _jsx("strong", { children: "Order Summary" }) }))] }), _jsx("hr", {}), _jsxs("div", { children: [_jsxs("div", { children: [_jsxs("p", __assign({ className: styles.virtualCard }, { children: [noOfTickets, "x Virtual card"] })), _jsx("p", { children: name })] }), _jsxs("div", { children: [_jsxs("p", { children: ["\u20A6", price.toLocaleString()] }), " "] })] }), _jsx("hr", {}), _jsxs("div", { children: [_jsx("div", { children: _jsx("p", { children: "Total" }) }), _jsxs("div", { children: [_jsxs("p", { children: ["\u20A6", totalPrice.toLocaleString()] }), " "] })] }), _jsx("hr", {})] })] })] })));
};
