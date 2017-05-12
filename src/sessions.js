'use strict';
module.exports = {
  'start': {
    label: 'PERFORM THE PRE-DIAGNOSTIC TROUBLESHOOTING PROCEDURE. Was the problem found and repaired?',
    answers: [
      { 'yes': 'question2' },
      { 'no': 'solution.1' },
    ]
  },
  'question2': {
    label: 'CHECK THE IAT SENSOR FOR AN INTERNAL SHORT. Did P0113 set with the IAT Sensor disconnected?',
    answers: [
      { 'yes': 'solution2' },
      { 'no': 'nosolution' },
    ]
  },
  'solution.1': {
    label: 'Solution. Pre-diagnostic troubleshooting procedure helped locate the problem.'
  },
  'solution2': {
    label: 'Solution. intake air temperature (IAT) sensor.'
  },
  'nosolution': {
    label: 'No Solutions found.'
  }

};