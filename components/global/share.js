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
import styles from "./styles/share7D3.module.css";
import { WhatsappShareButton, WhatsappIcon, FacebookShareButton, FacebookIcon, TwitterShareButton, XIcon, LinkedinIcon, LinkedinShareButton, } from "react-share";
export var Share = function (_a) {
    var uRL = _a.uRL, title = _a.title, hashtag = _a.hashtag, summary = _a.summary, source = _a.source;
    return (_jsxs("div", __assign({ className: styles.conatiner7D3 }, { children: [_jsx("div", __assign({ className: "Demo__some-network" }, { children: _jsx(WhatsappShareButton, __assign({ url: uRL, title: "Attend, ".concat(title, "."), separator: ":: ", className: "Demo__some-network__share-button " }, { children: _jsx(WhatsappIcon, { size: 32, round: true }) })) })), _jsx("div", __assign({ className: "Demo__some-network" }, { children: _jsx(FacebookShareButton, __assign({ url: uRL, className: "Demo__some-network__share-button ", hashtag: hashtag }, { children: _jsx(FacebookIcon, { size: 32, round: true }) })) })), _jsx("div", __assign({ className: "Demo__some-network" }, { children: _jsx(TwitterShareButton, __assign({ url: uRL, title: "Attend, ".concat(title, "."), className: "Demo__some-network__share-button ", hashtags: [hashtag] }, { children: _jsx(XIcon, { size: 32, round: true }) })) })), _jsx("div", __assign({ className: "Demo__some-network" }, { children: _jsx(LinkedinShareButton, __assign({ url: uRL, className: "Demo__some-network__share-button ", summary: summary, source: source }, { children: _jsx(LinkedinIcon, { size: 32, round: true }) })) }))] })));
};
