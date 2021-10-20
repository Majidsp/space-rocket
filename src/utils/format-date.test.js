import { formatDateTimeWithTimeZone } from "./format-date";

describe("Format Date/Time correctly", () => {
    test("Format date with considering time zone", () => {
        const formattedDate = formatDateTimeWithTimeZone(
            "2020-11-21T09:17:00-08:00",
            true
        );
        expect(formattedDate).toEqual("21 November 2020, 9:17:00 GMT-8");
    });
});
