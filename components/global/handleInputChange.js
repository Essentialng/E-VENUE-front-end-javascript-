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
export var handleInputChange = function (e, setFormDetails) {
    var _a = e.target, name = _a.name, value = _a.value, type = _a.type;
    console.log("".concat(name, ": ").concat(value));
    if (type === "file") {
        var fileList_1 = e.target.files;
        if (fileList_1) {
            setFormDetails(function (prevFormData) {
                var _a;
                return (__assign(__assign({}, prevFormData), (_a = {}, _a[name] = fileList_1, _a)));
            });
        }
    }
    else {
        setFormDetails(function (prevFormData) {
            var _a;
            return (__assign(__assign({}, prevFormData), (_a = {}, _a[name] = value, _a)));
        });
    }
};
