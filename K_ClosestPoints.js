/* Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in). */

// My Solution

var kClosest = function (points, k) {
  points.sort((x, y) => x[0] ** 2 + x[1] ** 2 - (y[0] ** 2 + y[1] ** 2));
  return points.slice(0, k);
};
