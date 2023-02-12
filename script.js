var date = new Date();
var month = date.getMonth();

if (month >= 3 && month <= 5) {
    document.body.classList.add('spring');
} else if (month >= 6 && month <= 8) {
    document.body.classList.add('summer');
} else if (month >= 9 && month <= 11) {
    document.body.classList.add('autumn');
} else {
    document.body.classList.add('winter');
}