/* An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill. */

// My Solution: 

var floodFill = function (image, sr, sc, color, currentColor = image[sr][sc]) {
  if (
    sr < 0 ||
    sc < 0 ||
    sr >= image.length ||
    sc >= image[sr].length ||
    image[sr][sc] !== currentColor ||
    image[sr][sc] === color
  )
    return image;

  image[sr][sc] = color;

  floodFill(image, sr + 1, sc, color, currentColor);
  floodFill(image, sr - 1, sc, color, currentColor);
  floodFill(image, sr, sc + 1, color, currentColor);
  floodFill(image, sr, sc - 1, color, currentColor);
  return image;
};
