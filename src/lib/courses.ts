import { COURSES_URL } from "@/constants/data";

/**
 * @remarks This function should result immediately as it fetches courses from public folder
 *
 * @returns list of courses
 */
export async function fetchCourses() {
  const response = await fetch(COURSES_URL, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const jsonData = response.json();
  return jsonData;
}
