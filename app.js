// Log the number of hours you get each day of the week
const getSleepHours = (day) => {
  switch (day) {
    case 'Monday':
      return 8;
      break;
    case 'Tuesday':
      return 7;
      break;
    case 'Wednesday':
      return 6;
      break;
    case 'Thursday':
      return 5;
      break;
    case 'Friday':
      return 4;
      break;
    case 'Saturday':
      return 9;
      break;
    case 'Sunday':
      return 10;
      break;
  }
};
// console.log(getSleepHours('Wednesday'));

// Get the total hours of sleep per week
const getActualSleepHours = () =>
  getSleepHours('Monday') +
  getSleepHours('Tuesday') +
  getSleepHours('Wednesday') +
  getSleepHours('Thursday') +
  getSleepHours('Friday') +
  getSleepHours('Saturday') +
  getSleepHours('Sunday');
// console.log(getActualSleepHours());

// The ideal total of sleep per week
const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};
//console.log(getIdealSleepHours());
//console.log(getActualSleepHours());

// Calculate sleep debt
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log(
      'You got the perfect amount of sleep. Your total hours of sleep is: ' +
        actualSleepHours
    );
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      'You slept for' +
        (actualSleepHours - idealSleepHours) +
        'You got more sleep than needed.'
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      'You only slept for ' +
        (idealSleepHours - actualSleepHours) +
        ' You should get more sleep.'
    );
  } else {
    console.log('Error!');
  }
};
calculateSleepDebt();
