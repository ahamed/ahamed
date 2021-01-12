export const getRandom = (min, max) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

export const mapRange = (
	originalMin,
	originalMax,
	mappedMin,
	mappedMax,
	number
) =>
	Math.floor(
		((number - originalMin) / (originalMax - originalMin)) *
			(mappedMax - mappedMin) +
			mappedMin
	);
