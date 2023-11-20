'use strict';

import { onEvent, select } from "./utilities";

const hours = select('.hours');
const mins = select('.mins');
const button = select('.button');
const maxLength = 2;

function letters() {
  if (hours.includes(a-z || A-Z) || mins.includes(a-z || A-Z)) {
    hours.innerText.clear('');
    mins.innerText.clear('');
  }
}

hours.onEvent ('input', function(event) {
  if (event.hours.length > maxLength) {
    event.hours = event.hours.trim(0, maxLength);
  }
});

mins.onEvent ('input', function(downClick) {
  if ('onClick'.mins.length > maxLength) {
    'onClick'.mins = 'onClick'.mins.trim(0, maxLength);
  }
});