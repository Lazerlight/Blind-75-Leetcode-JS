/* Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise. */

// My Solution

var MyQueue = function () {
  this.stack = [];
};

MyQueue.prototype.push = function (x) {
  this.stack.push(x);
};

MyQueue.prototype.pop = function () {
  var popEl = this.stack.reverse().pop();
  this.stack.reverse();
  return popEl;
};

MyQueue.prototype.peek = function () {
  return this.stack[0];
};

MyQueue.prototype.empty = function () {
  return this.stack.length == 0;
};
