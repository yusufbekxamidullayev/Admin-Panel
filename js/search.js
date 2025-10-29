const searchInput = document.querySelector('input[type="search"]');

searchInput.addEventListener('input', function () {
    const filter = searchInput.value.toLowerCase();
    const rows = document.querySelectorAll('#tbody tr');

    rows.forEach(row => {
        const text = row.textContent.toLowerCase();

        if (text.indexOf(filter) > -1) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});
