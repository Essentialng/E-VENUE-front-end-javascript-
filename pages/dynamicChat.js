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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { InlineErrMsg } from "../components/global/inlineErrMsg";
import getChatHistoryFn from "../lib/chat/getHistory";
import getProfileFn from "../lib/profile/getProfile";
import styles from "./styles/dynamicChatZ02.module.css";
function DynamicChat(_a) {
    var recipient_id = _a.recipient_id, first_name = _a.first_name;
    var _b = useState([]), messages = _b[0], setMessages = _b[1];
    var _c = useState(), msgHistory = _c[0], setMsgHistory = _c[1];
    var _d = useState(""), inputMessage = _d[0], setInputMessage = _d[1];
    var _e = useState(null), ws = _e[0], setWs = _e[1];
    var _f = useState(), resProfile = _f[0], setResProfile = _f[1];
    var _g = useState(""), errMsg = _g[0], setErrMsg = _g[1];
    console.log({ recipient_id: recipient_id });
    var websocket = new WebSocket("ws://localhost:4192");
    useEffect(function () {
        getProfileFn({ setErrMsg: setErrMsg })
            .then(function (res) {
            var _a;
            setResProfile(res);
            var user_id = (_a = res === null || res === void 0 ? void 0 : res.profile.find(function (user) { return user.user_id; })) === null || _a === void 0 ? void 0 : _a.user_id;
            if (!user_id) {
                throw new Error("Missing recipient_id");
            }
            return getChatHistoryFn({
                fk_sender_id: user_id,
                fk_recipient_id: Number(recipient_id),
                setErrMsg: setErrMsg,
            });
        })
            .then(function (res) {
            setMsgHistory(res);
        })
            .catch(function (error) {
            setErrMsg(error.message);
        });
    }, [recipient_id]);
    useEffect(function () {
        websocket.onmessage = function (event) {
            console.log({ event: event });
            var message = JSON.parse(event.data);
            console.log({ message: message });
            setMessages(function (prevMessages) { return __spreadArray(__spreadArray([], prevMessages, true), [message], false); });
        };
        setWs(websocket);
    }, []);
    var sendMessage = function (e) {
        var _a;
        e.preventDefault();
        if (ws && inputMessage.trim() !== "") {
            var user_id = (_a = resProfile === null || resProfile === void 0 ? void 0 : resProfile.profile.find(function (user) { return user.user_id; })) === null || _a === void 0 ? void 0 : _a.user_id;
            if (!user_id) {
                setErrMsg("Missing user_id");
                return;
            }
            var messageData = {
                senderId: user_id,
                message: inputMessage,
                recipientId: recipient_id,
            };
            ws.send(JSON.stringify(messageData));
            setInputMessage("");
        }
    };
    var mappedHistory = msgHistory === null || msgHistory === void 0 ? void 0 : msgHistory.result.map(function (message) {
        return (_jsxs(_Fragment, { children: [_jsx("div", { children: _jsx("p", { children: message.message }) }, message.id), _jsx("hr", {})] }));
    });
    return (_jsxs("div", __assign({ className: styles.containerZ02 }, { children: [_jsxs("h2", { children: ["Chat with ", first_name] }), _jsx("div", { children: mappedHistory }), _jsx("div", { children: messages.map(function (message, index) { return (_jsxs(_Fragment, { children: [_jsx("div", __assign({ className: message.recipientId === message.senderId.toString()
                                ? styles.sent
                                : styles.received }, { children: _jsx("p", { children: message.message }) }), index), _jsx("hr", {})] })); }) }), _jsxs("div", { children: [_jsx("input", { type: "text", placeholder: "Type your message...", value: inputMessage, onChange: function (e) { return setInputMessage(e.target.value); } }), _jsx("button", __assign({ onClick: sendMessage }, { children: "Send" }))] }), errMsg && _jsx(InlineErrMsg, { errMsg: errMsg })] })));
}
export default DynamicChat;
