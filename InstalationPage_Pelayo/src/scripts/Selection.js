function toggleSelection(element) {
    var isSelected = element.classList.contains('selected');
    var options = document.querySelectorAll('.option');
    options.forEach(function (option) {
        option.classList.remove('selected');
    });

    if (!isSelected) {
        element.classList.add('selected');
    }
}
