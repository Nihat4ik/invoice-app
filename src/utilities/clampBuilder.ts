/**
 * Calculates and return css clamp property .
 * @param minWidthPixel Parameter that represents min width of container.
 * @param maxWidthPixel Parameter that represents max width of container.
 * @param minFontSize Parameter that contains min value of clamped value.
 * @param maxFontSize Parameter that contains max value of clamped value.
 */
const clampBuilder = (
  minWidthPixel: number,
  maxWidthPixel: number,
  minFontSize: number,
  maxFontSize: number
): string => {
  const minWidth = minWidthPixel / 10;
  const maxWidth = maxWidthPixel / 10;
  const multiplier = (maxFontSize - minFontSize) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * multiplier + minFontSize;

  return `clamp( ${minFontSize}rem, ${yAxisIntersection}rem + ${
    multiplier * 100
  }vw, ${maxFontSize}rem )`;
};

export default clampBuilder;
