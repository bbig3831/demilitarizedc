// Set milliseconds per day constant
const _MS_PER_DAY = 1000 * 60 * 60 *24

// Days since date function
function calculateDaysDiff(startDate) {
  // Get today's date
  const today = new Date();
  const utcToday = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  const utcStartDate = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());

  return Math.floor((utcToday - utcStartDate) / _MS_PER_DAY)
}

// Date differences
// January 6th
const jan6 = new Date('2021-01-06T05:00:00+00:00'),
  jan6Diff = calculateDaysDiff(jan6),
  // January 20th - Inauguration
  jan20 = new Date('2021-01-20T05:00:00+00:00'),
  jan20Diff = calculateDaysDiff(jan20)
  // February 9th - Impeachment trail begins
  feb9 = new Date('2021-02-09T05:00:00+00:00'),
  feb9Diff = calculateDaysDiff(feb9)
  // March 4th - Congress stops work
  mar4 = new Date('2021-03-04T05:00:00+00:00'),
  mar4Diff = calculateDaysDiff(mar4)
;

// Set date differences in HTML page
document.getElementById('january-6').textContent = jan6Diff.toString();
document.getElementById('january-20').textContent = jan20Diff.toString();
document.getElementById('february-9').textContent = feb9Diff.toString();
document.getElementById('march-4').textContent = mar4Diff.toString();