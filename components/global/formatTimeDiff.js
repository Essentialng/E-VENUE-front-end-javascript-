export default function formatTimestampAgo(minutesAgo) {
    if (minutesAgo < 60) {
        return "".concat(minutesAgo, "m");
    }
    else if (minutesAgo < 1440) {
        return "".concat(Math.floor(minutesAgo / 60), "h");
    }
    else if (minutesAgo < 10080) {
        return "".concat(Math.floor(minutesAgo / 1440), "d");
    }
    else if (minutesAgo < 43800) {
        return "".concat(Math.floor(minutesAgo / 10080), "w");
    }
    else {
        return "".concat(Math.floor(minutesAgo / 43800), "y");
    }
}
export function formatTimestampDiff(dateString) {
    var date = new Date(dateString);
    var minutesAgo = Math.floor((Date.now() - date.getTime()) / (1000 * 60));
    if (minutesAgo < 60) {
        return "".concat(minutesAgo, "m");
    }
    else if (minutesAgo < 1440) {
        return "".concat(Math.floor(minutesAgo / 60), "h");
    }
    else if (minutesAgo < 10080) {
        return "".concat(Math.floor(minutesAgo / 1440), "d");
    }
    else if (minutesAgo < 43800) {
        return "".concat(Math.floor(minutesAgo / 10080), "w");
    }
    else {
        return "".concat(Math.floor(minutesAgo / 43800), "y");
    }
}
