import { jsx as _jsx } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
import DynamicChat from "./dynamicChat";
export var DynamicChatWrapper = function () {
    var _a = useParams(), recipient_id = _a.recipient_id, first_name = _a.first_name;
    console.log({ recipient_id: recipient_id, first_name: first_name });
    if (!recipient_id || !first_name) {
        throw new Error("Missing recipient_id or first_name");
    }
    return (_jsx("div", { children: _jsx(DynamicChat, { recipient_id: recipient_id, first_name: first_name }) }));
};
