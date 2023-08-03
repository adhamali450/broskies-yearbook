const rangedRandom = (min, max) => Math.random() * (max - min) + min;

const rangedRandomInt = (min, max) => {
  const range = max - min + 1;
  return Math.floor(Math.random() * range) + min;
};

const arabicRegex = /[\u0600-\u06FF]/;
const englishRegex = /[A-Za-z]/;

/**

Determines the language of the given lyrics based on the occurrence of Arabic and English characters.
@param {string} lyrics - The lyrics text to analyze.
@returns {string} - Returns "ar" for Arabic if the Arabic character count is higher, or "en" for English otherwise.
*/
const getLang = (lyrics) => {
  let arabicCount = 0;
  let englishCount = 0;

  for (let i = 0; i < lyrics.length; i++) {
    if (arabicRegex.test(lyrics[i])) {
      arabicCount++;
    } else if (englishRegex.test(lyrics[i])) {
      englishCount++;
    }
  }

  return arabicCount > englishCount ? "ar" : "en";
};

const arNum = (number) => {
  const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

  return String(number).replace(/\d/g, (digit) => arabicNumbers[digit]);
};

const imageClickedHandler = (src, img, callback) => {
  const arr = src.map((pair) => pair[1]);
  const index = arr.indexOf(img);

  arr.splice(index, 1);
  arr.unshift(img);

  callback(arr);
};

export { rangedRandom, rangedRandomInt, getLang, arNum, imageClickedHandler };
