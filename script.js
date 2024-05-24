const texts = ["Python!", "Database!", "HTML Code!", "AI Tools!", "Web Designing!"];
let currentIndex = 0;
function updateText() {
    const textElement = document.getElementById('dynamic-text');
    currentIndex = (currentIndex + 1) % texts.length;
    textElement.textContent = texts[currentIndex];
}
setInterval(updateText, 1500);

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('whatsappButton').onclick = function() {
        window.location.href = "https://wa.me/919771149048";
    }

function sendEmail() {
    var email = 'rahulkumarmahto977@gmail.com';
    var subject = 'Subject of the email';
    var body = '';

    var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    window.location.href = mailtoLink;
}