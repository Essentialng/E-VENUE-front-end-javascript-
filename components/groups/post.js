import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { AddPosts } from "./addPostForm";
import { GetPosts } from "./getPosts";
export var Posts = function (_a) {
    var group_id = _a.group_id;
    return (_jsxs(_Fragment, { children: [_jsx(AddPosts, { group_id: group_id }), _jsx(GetPosts, { group_id: group_id })] }));
};
