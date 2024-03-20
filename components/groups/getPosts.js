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
import { useEffect, useState } from "react";
import getPostsFn from "../../lib/groups/getPosts";
import { PostCard } from "./postCard";
import { InlineErrMsg } from "../global/inlineErrMsg";
import styles from "./styles/getPostCBU.module.css";
export var GetPosts = function (_a) {
    var group_id = _a.group_id;
    var _b = useState(), resPost = _b[0], setResPost = _b[1];
    var _c = useState(""), errMsg = _c[0], setErrMsg = _c[1];
    useEffect(function () {
        getPostsFn({ group_id: group_id, setErrMsg: setErrMsg }).then(function (res) {
            res && setResPost(res);
        });
    }, [group_id]);
    var content = resPost === null || resPost === void 0 ? void 0 : resPost.result.map(function (post) { return (_jsx(PostCard, __assign({}, post, { group_post_id: post.id, group_id: group_id }), post.id)); });
    return (_jsx("div", { children: errMsg ? (_jsx(InlineErrMsg, { errMsg: errMsg })) : (_jsx("div", __assign({ className: styles.containerCBU }, { children: content }))) }));
};
