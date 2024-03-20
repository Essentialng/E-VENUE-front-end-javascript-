export var formatDate = function (dateString) {
    var options = {
        weekday: "short",
        month: "short",
        day: "2-digit",
    };
    var date = new Date(dateString);
    return date.toLocaleString("en-US", options);
};
export var formatTime = function (dateString) {
    var options = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };
    var date = new Date(dateString);
    return date.toLocaleString("en-US", options);
};
