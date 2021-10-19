import { DateTime } from "luxon";

export function formatDate(timestamp) {
    return new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(timestamp));
}

export function formatDateTime(timestamp) {
    return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short",
    }).format(new Date(timestamp));
}

export function formatDateTimeWithTimeZone(timestamp, considerTimeZone) {
    const keepOffset = DateTime.fromISO(timestamp, {
        setZone: considerTimeZone,
    }).toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
    return keepOffset;
}
