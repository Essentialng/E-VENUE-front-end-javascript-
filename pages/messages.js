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
import { useEffect, useState } from "react";
// import { useNavigation } from "react-router-dom";
import { ErrMsg } from "../components/global/errMsg";
import { ProfileNav } from "../components/profile/nav";
import stylesDetails from "../components/profile/styles/personalDetailsFY8.module.css";
import styles from "../components/profile/styles/profileMainJS4.module.css";
import stylesNav from "../components/profile/styles/profileNavZZZ.module.css";
import getProfileFn from "../lib/profile/getProfile";
import stylesMsgDetails from "./styles/messagesET4.module.css";
import getInboxFn from "../lib/chat/getInbox";
import { Link } from "react-router-dom";
import authWorkerFn from "../lib/users/authWorker";
export var ProfileMessages = function () {
    var _a = useState(), profileRes = _a[0], setProfileRes = _a[1];
    var _b = useState(), resInbox = _b[0], setResInbox = _b[1];
    var _c = useState(""), errMsg = _c[0], setErrMsg = _c[1];
    var _d = useState(), recipientName = _d[0], setRecipientName = _d[1];
    // const navigate = useNavigation();
    useEffect(function () {
        var recipient_id;
        try {
            getProfileFn({ setErrMsg: setErrMsg })
                .then(function (res) {
                res && setProfileRes(res);
            })
                .then(function () {
                getInboxFn({ setErrMsg: setErrMsg }).then(function (res) {
                    var _a;
                    res && setResInbox(res);
                    // .find will not work cos it returns only the first one it sees. 1st user in the list will always be returned
                    recipient_id = (_a = res === null || res === void 0 ? void 0 : res.finalResult[0].find(function (recipient) { return recipient.fk_recipient_id; })) === null || _a === void 0 ? void 0 : _a.fk_recipient_id;
                    console.log({ recipient_id: recipient_id });
                    if (recipient_id) {
                        console.log({ recipient_id: recipient_id });
                        authWorkerFn({
                            userId: recipient_id,
                            setErrMsg: setErrMsg,
                        }).then(function (res) {
                            console.log({ res: res });
                            setRecipientName(res);
                        });
                    }
                });
            });
        }
        catch (error) { }
    }, []);
    var firstName = recipientName === null || recipientName === void 0 ? void 0 : recipientName.result[0].first_name;
    console.log({ firstName: firstName });
    var inboxResContent = resInbox === null || resInbox === void 0 ? void 0 : resInbox.finalResult[0].map(function (inbox) { return (_jsxs("div", { children: [_jsx(Link, __assign({ to: "/chat/".concat(inbox.id, "/").concat(firstName) }, { children: inbox.message }), inbox.id), _jsx("hr", {})] })); });
    var totalInboxRes = resInbox === null || resInbox === void 0 ? void 0 : resInbox.finalResult[1].map(function (inbox, index) { return (_jsx("span", { children: inbox.result_count }, index)); });
    return (_jsx("div", __assign({ className: styles.containerJS4 }, { children: _jsxs("section", { children: [_jsx("nav", __assign({ className: stylesNav.containerZZZ }, { children: _jsx(ProfileNav, {}) })), errMsg ? (_jsx("div", __assign({ className: styles.errMsg }, { children: _jsx(ErrMsg, { errMsg: errMsg }) }))) : (profileRes === null || profileRes === void 0 ? void 0 : profileRes.profile.map(function (user) { return (_jsxs("article", { children: [_jsxs("section", __assign({ className: styles.header }, { children: [_jsx("div", { children: _jsxs("h2", { children: ["Hello, ", user.first_name] }) }), _jsxs("div", { children: [_jsx("div", { children: _jsx("img", { src: user.img, alt: "profile" }) }), _jsxs("div", { children: [_jsx("p", { children: user.first_name + " " + user.last_name }), _jsx("p", { children: user.email })] }), _jsx("div", { children: _jsx("img", { src: "/home/bell.svg", alt: "" }) })] })] })), _jsxs("section", __assign({ className: stylesDetails.containerFY8 }, { children: [_jsx("hr", {}), _jsxs("h3", { children: ["Inbox(", totalInboxRes, ")"] }), _jsx("hr", {}), _jsx("div", __assign({ className: "".concat(stylesMsgDetails.containerET4, " ").concat(stylesMsgDetails.btnArea), style: {
                                        display: "flex",
                                        justifyContent: "center",
                                        columnGap: "1rem",
                                    } }, { children: _jsxs("button", { children: ["Inbox(", totalInboxRes, ")"] }) }))] })), _jsx("div", __assign({ className: "".concat(stylesMsgDetails.containerET4, " ").concat(stylesMsgDetails.inbox) }, { children: inboxResContent }))] }, user.user_id)); }))] }) })));
};
