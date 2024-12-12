export function formatDate(dateTimeISO: Date | undefined) {
  if (!dateTimeISO) {
    return "an hour ago";
  }

  const date = new Date(dateTimeISO);

  // const weekdays = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  // ];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // const weekday = weekdays[date.getDay()];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  // return `${weekday}, ${month} ${day}, ${year}`;
  return `${month} ${day}, ${year}`;
}
