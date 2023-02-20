import { DateTime } from './luxon.min.js';

const time = document.querySelector('time');

const currentTime = () => {
  time.innerText = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};

export default currentTime;