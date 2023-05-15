import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

const DATA_TIME_FORMAT = "YYYY-MM-DD HH:mm:ss";

export function switching(utcTime: string, format: string = DATA_TIME_FORMAT) {
  return dayjs.utc(utcTime).format(format);
}
