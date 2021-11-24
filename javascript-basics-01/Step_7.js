function operations() {
    var result = 0;
    var shoe_size = document.getElementById('shoe_size').value;
    var year = document.getElementById('year').value;
    result = (shoe_size * 2 + 5) * 50 - year + 1766;
    alert('the result is ' + result);
}