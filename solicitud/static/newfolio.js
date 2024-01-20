document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.NFolio').addEventListener('click', function(event) {
        event.preventDefault();
        location.reload(true);
    });
});
