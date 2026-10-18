const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = form.querySelector('input').value;
    const description = form.querySelector('textarea').value;

    alert(
        "Ticket Created Successfully!\n" +
        "Title: " + title + "\n" +
        "Description: " + description
    );

    form.reset();
});
