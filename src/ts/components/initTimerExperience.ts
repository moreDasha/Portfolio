export const initTimerExperience = () => {
  const timer = document.querySelector('.js-timer-experience');

  if (!timer) return;

  const YEAR_DICTIONARY = ['год', 'года', 'лет'];
  const MONTH_DICTIONARY = ['месяц', 'месяца', 'месяцев'];
  const DAY_DICTIONARY = ['день', 'дня', 'дней'];

  const setWordForm = (number: number, dictionary: string[]) => {
    const ending2 = number % 100;

    if (ending2 > 10 && ending2 < 20) {
      return `${dictionary[2]}`;
    } else {
      const ending1 = ending2 % 10;
      if (ending1 === 1) {
        return `${dictionary[0]}`;
      } else if (ending1 > 0 && ending1 < 5) {
        return `${dictionary[1]}`;
      } else {
        return `${dictionary[2]}`;
      }
    }
  };

  const setDate = (input: Element | null, number: number, dictionary: string[]) => {
    if (input) {
      input.textContent = `${number}`;
      input.setAttribute('data-descr', setWordForm(number, dictionary));
    }
  };

  const setTime = (number: number) => {
    return number < 10 ? `0${number}` : `${number}`;
  };

  const inputYear = document.querySelector('.js-timer-year');
  const inputMonth = document.querySelector('.js-timer-month');
  const inputDay = document.querySelector('.js-timer-day');
  const inputTime = document.querySelector('.js-timer-time');

  const dateStart = new Date('2023-04-01T00:00:00');

  const updateExperience = () => {
    const dateCurrent = new Date();
    let years = Number(dateCurrent.getFullYear()) - Number(dateStart.getFullYear());
    let months = Number(dateCurrent.getMonth()) - Number(dateStart.getMonth());
    let days = Number(dateCurrent.getDate()) - Number(dateStart.getDate());
    let hours = Number(dateCurrent.getHours()) - Number(dateStart.getHours());
    let minutes = Number(dateCurrent.getMinutes()) - Number(dateStart.getMinutes());
    let seconds = Number(dateCurrent.getSeconds()) - Number(dateStart.getSeconds());

    if (seconds < 0) {
      minutes--;
      seconds += 60;
    }

    if (minutes < 0) {
      hours--;
      minutes += 60;
    }

    if (hours < 0) {
      days--;
      hours += 24;
    }

    if (days < 0) {
      months--;
      const prevMonthDays = new Date(dateCurrent.getFullYear(), dateCurrent.getMonth(), 0).getDate();
      days += prevMonthDays;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setDate(inputYear, years, YEAR_DICTIONARY);
    setDate(inputMonth, months, MONTH_DICTIONARY);
    setDate(inputDay, days, DAY_DICTIONARY);

    if (inputTime) {
      inputTime.textContent = `${setTime(hours)}ч : ${setTime(minutes)}м : ${setTime(seconds)}с`;
    }
  };

  updateExperience();
  setInterval(updateExperience, 1000);
};
