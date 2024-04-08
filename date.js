const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

const generateNewTime = (time) => {
  return time < 10 ? "0" + time : time;
};
const newMinutes = generateNewTime(minutes);
const newSeconds = generateNewTime(seconds);
const newDay = generateNewTime(day);
const newMonth = generateNewTime(month);

const currentDate = `Date now: ${newDay} - ${newMonth} - ${year} ${hours}:${newMinutes}:${newSeconds}`;
