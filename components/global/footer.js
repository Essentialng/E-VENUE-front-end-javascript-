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
import { Link } from "react-router-dom";
import styles from "./styles/footerMR6.module.css";
var Footer = function () {
    return (_jsxs("div", __assign({ className: styles.footerMR6 }, { children: [_jsxs("div", { children: [_jsx("h6", { children: "About" }), _jsx("p", { children: "Lorem ipsum dolor sit amet consectetur. Ullamcorper bibendum diam sapien faucibus. Dolor in nibh malesuada pharetra aenean eu rhoncus. Non tortor sagittis metus vitae nunc. Varius congue faucibus lacus pharetra nisl risus. Bibendum integer fringilla id ante fusce varius eget." }), _jsx(Link, __assign({ to: "/about" }, { children: "Learn more" })), " "] }), _jsxs("div", { children: [_jsx("h6", { children: "Company" }), _jsx("p", { children: _jsx(Link, __assign({ to: "/about" }, { children: "About" })) }), _jsx("p", { children: _jsx(Link, __assign({ to: "/contact" }, { children: "Contact" })) }), _jsx("p", { children: _jsx(Link, __assign({ to: "/terms" }, { children: "Terms" })) }), _jsx("p", { children: _jsx(Link, __assign({ to: "/privacy" }, { children: "Privacy" })) }), _jsx("p", { children: _jsx(Link, __assign({ to: "/about" }, { children: "About" })) }), _jsx("p", { children: _jsx(Link, __assign({ to: "/contact" }, { children: "Contact" })) }), _jsx("p", { children: _jsx(Link, __assign({ to: "/terms" }, { children: "Terms" })) }), _jsx("p", { children: _jsx(Link, __assign({ to: "/privacy" }, { children: "Privacy" })) }), _jsx("p", { children: _jsx(Link, __assign({ to: "/privacy" }, { children: "Privacy" })) })] }), _jsxs("div", { children: [_jsx("p", { children: _jsx(Link, __assign({ to: "/contact" }, { children: "Contact" })) }), _jsx("p", { children: _jsx(Link, __assign({ to: "/terms" }, { children: "Terms" })) }), _jsx("p", { children: _jsx(Link, __assign({ to: "/privacy" }, { children: "Privacy" })) }), _jsx("p", { children: _jsx(Link, __assign({ to: "/privacy" }, { children: "Privacy" })) })] }), _jsxs("div", { children: [_jsx("h6", { children: "Follow" }), _jsxs("div", { children: [_jsx(Link, __assign({ to: "/contact" }, { children: _jsx("img", { src: "/home/ic_baseline-facebook.svg", alt: "facebook" }) })), _jsx(Link, __assign({ to: "/contact" }, { children: _jsx("img", { src: "/home/Vector.svg", alt: "ig" }) })), _jsx(Link, __assign({ to: "/contact" }, { children: _jsx("img", { src: "/home/mdi_linkedin.svg", alt: "linkedin" }) })), _jsx(Link, __assign({ to: "/contact" }, { children: _jsx("img", { src: "/home/ph_x-fill.svg", alt: "x" }) }))] })] })] })));
};
export default Footer;
