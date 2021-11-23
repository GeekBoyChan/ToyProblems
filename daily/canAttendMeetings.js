/*
Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.

Examples
Input: intervals = [[0,30],[5,10],[15,20]]
Output: false

Input: intervals = [[7,10],[2,4]]
Output: true
*/

var canAttendMeetings = function (intervals) {
  let sortedIntervals = intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  let lastIntervalRef = sortedIntervals[0];

  for (let i = 1; i < sortedIntervals.length; i++) {
    let currentInterval = sortedIntervals[i];
    if (lastIntervalRef[1] > currentInterval[0]) {
      return false;
    }
    lastIntervalRef = currentInterval;
  }
  return true;
};
