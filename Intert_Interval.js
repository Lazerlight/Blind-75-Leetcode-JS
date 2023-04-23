/* You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion. */

// My Solution



var insert = function (intervals, newInterval) {
  let [newStart, newEnd] = newInterval;
  let left = [];
  let right = [];

  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];
    const [intStart, intEnd] = interval;

    if (intEnd < newStart) left.push(interval);
    else if (intStart > newEnd) right.push(interval);
    else {
      newStart = Math.min(newStart, intStart);
      newEnd = Math.max(newEnd, intEnd);
    }
  }

  return [...left, [newStart, newEnd], ...right];
};
