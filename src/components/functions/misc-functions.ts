export const calculateTimeLeft = (timestamp: number) => {
  const difference = timestamp * 1000 - Date.now();

  if (timestamp * 1000 < Date.now())
    return { completed: true, isLoading: false };

  if (difference > 0) {
    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
        2,
        '0'
      ),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
        2,
        '0'
      ),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
        2,
        '0'
      ),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
      completed: false,
      isLoading: false,
    };
  }

  return {
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    completed: true,
  };
};