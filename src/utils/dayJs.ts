import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import UTCFormat from "dayjs/plugin/utc";
import TimeZone from "dayjs/plugin/timezone";
import MinMax from "dayjs/plugin/minMax";
import Duration from "dayjs/plugin/duration";
import RelativeTime from "dayjs/plugin/relativeTime";
import IsBetween from "dayjs/plugin/isBetween";

dayjs.extend(UTCFormat);
dayjs.extend(TimeZone);
dayjs.extend(customParseFormat);
dayjs.extend(LocalizedFormat);
dayjs.extend(MinMax);
dayjs.extend(Duration);
dayjs.extend(RelativeTime);
dayjs.extend(IsBetween);

// Set timezone
dayjs.tz.setDefault("Africa/Lagos");

export default dayjs;
