const BASE_URL = "/suchedule-plus" as const;
const DATA_URL = `${BASE_URL}/data` as const;
const COURSES_URL = `${DATA_URL}/courses.json` as const;

export { BASE_URL, COURSES_URL };
