function clear_fields() {
    var dialog = confirm("yes / no");
    if (dialog == true) {
        document.getElementById('name').value = '';
        document.getElementById('surname').value = '';
        document.getElementById('city').value = '';
    }
}