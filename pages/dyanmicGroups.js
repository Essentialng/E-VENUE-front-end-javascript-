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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getOneGroupFn from "../lib/groups/res4GetOne";
import styles from "./styles/dynamicGroupKD0.module.css";
import { Posts } from "../components/groups/post";
import getProfileFn from "../lib/profile/getProfile";
import { GroupsList } from "../components/groups/groupsList";
import { GetMembers } from "../components/groups/getMembers";
import joinGroupFn from "../lib/groups/joinGroup";
import leaveGroupFn from "../lib/groups/leaveGroup";
import { InlineErrMsg } from "../components/global/inlineErrMsg";
export var DyanmicGroups = function () {
    var _a, _b, _c;
    var _d = useState({
        result: [],
    }), resGroups = _d[0], setResGroups = _d[1];
    var _e = useState(true), showPosts = _e[0], setShowPosts = _e[1];
    var _f = useState(""), successMsg = _f[0], setSuccessMsg = _f[1];
    var _g = useState({
        profile: [],
    }), resProfile = _g[0], setResProfile = _g[1];
    var _h = useState(""), errMsg = _h[0], setErrMsg = _h[1];
    var group_id = useParams().group_id;
    if (!group_id) {
        throw new Error("Missing group_id");
    }
    useEffect(function () {
        try {
            getOneGroupFn({ group_id: group_id, setErrMsg: setErrMsg })
                .then(function (res) {
                res && setResGroups(res);
            })
                .then(function () {
                getProfileFn({ setErrMsg: setErrMsg }).then(function (res) {
                    res && setResProfile(res);
                });
            });
        }
        catch (error) { }
    }, [group_id]);
    function handleShowMembers(e) {
        e.preventDefault();
        setShowPosts(false);
    }
    function handleShowPosts(e) {
        e.preventDefault();
        setShowPosts(true);
    }
    var userImg = (_a = resProfile.profile.find(function (user) { return user.img; })) === null || _a === void 0 ? void 0 : _a.img;
    var userFirstname = (_b = resProfile.profile.find(function (user) { return user.first_name; })) === null || _b === void 0 ? void 0 : _b.first_name;
    var isMember = (_c = resGroups.result.find(function (user) { return user.user_has_joined; })) === null || _c === void 0 ? void 0 : _c.user_has_joined;
    var _j = useState(isMember ? 1 : 0), userJoined = _j[0], setUserJoined = _j[1];
    var handleMembershipToggle = function () { return __awaiter(void 0, void 0, void 0, function () {
        var newMemberState, response, newLikeState, error_1, newLikeState;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    newMemberState = userJoined === 1 ? 0 : 1;
                    setUserJoined(newMemberState);
                    return [4 /*yield*/, (newMemberState === 1
                            ? joinGroupFn
                            : leaveGroupFn)({ group_id: group_id, setErrMsg: setErrMsg })];
                case 1:
                    response = _a.sent();
                    if (response === null || response === void 0 ? void 0 : response.message.includes("success")) {
                        setSuccessMsg(response.message);
                    }
                    else {
                        newLikeState = userJoined === 1 ? 0 : 1;
                        setUserJoined(newLikeState); // Revert UI on failure
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    newLikeState = userJoined === 1 ? 0 : 1;
                    setUserJoined(newLikeState);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (_jsx(_Fragment, { children: resGroups.result.map(function (group) { return (_jsxs("div", __assign({ className: styles.containerKD0 }, { children: [_jsx("div", { children: _jsx("img", { src: group.logo, alt: group.name }) }), _jsxs("div", { children: [_jsxs("div", { children: [_jsx("button", __assign({ onClick: handleShowPosts, className: showPosts ? "" : styles.inactive }, { children: "Post" })), _jsx("button", __assign({ onClick: handleShowMembers, className: showPosts ? styles.inactive : "" }, { children: "Members" }))] }), _jsx("div", { children: _jsx("span", __assign({ onClick: handleMembershipToggle }, { children: userJoined ? _jsx("button", { children: "Leave" }) : _jsx("button", { children: "Join" }) })) })] }), _jsxs("section", { children: [_jsx("div", { children: showPosts ? (_jsxs("div", { children: [_jsx("section", { children: userImg && (_jsx("img", { src: userImg, alt: userFirstname !== null && userFirstname !== void 0 ? userFirstname : "User", className: styles.userImg })) }), _jsx("div", { children: _jsx(Posts, { group_id: group_id }) })] })) : (_jsx("div", { children: _jsx(GetMembers, { group_id: group_id }) })) }), _jsxs("div", { children: [_jsxs("div", { children: [_jsx("h3", { children: "About Group" }), _jsx("p", { children: group.about })] }), _jsxs("div", { children: [_jsx("h3", { children: "Other Groups" }), _jsx("div", { children: _jsx(GroupsList, { startNo: 0, endNo: 4 }) })] })] })] }), errMsg && _jsx(InlineErrMsg, { errMsg: errMsg })] }), group.id)); }) }));
};
