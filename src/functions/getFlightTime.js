import getTimeFromMins from './getTimeFromMins';

export default (date, mins) => {
  const duration = getTimeFromMins(mins);
  const departureTime = new Date(date).toLocaleTimeString('en-GB').split(':');
  const [departureHour, departureMins] = departureTime;
  const arrivalHour = (+departureHour + duration.hours) % 24;
  const arrivalMins = (+departureMins + duration.minutes) % 60;
  const formatNumber = (x) => (x < 10 ? `0${x}` : `${x}`);
  const result = {
    departureTime: `${departureHour}:${departureMins}`,
    arrivalTime: `${formatNumber(
      arrivalHour + Math.trunc((+departureMins + duration.minutes) / 60),
    )}:${formatNumber(arrivalMins)}`,
  };
  return result;
};
