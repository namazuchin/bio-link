var date = new Date();
var month = date.getMonth();

if (month >= 2 && month <= 4) {
    document.body.classList.add('spring');
} else if (month >= 5 && month <= 7) {
    document.body.classList.add('summer');
} else if (month >= 8 && month <= 10) {
    document.body.classList.add('autumn');
} else {
    document.body.classList.add('winter');
}
