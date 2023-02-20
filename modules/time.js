import { DateTime } from '../node_modules/luxon/src/luxon.js';

const time = document.querySelector('time');

const currentTime = () => {
  time.innerText = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};

export default currentTime;