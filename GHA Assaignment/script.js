
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.toggle-icon');
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            icon.textContent = '+';
        } else {
            answer.style.display = 'block';
            icon.textContent = '-';
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const curriculumTitles = document.querySelectorAll('.curriculum-title');

    curriculumTitles.forEach(title => {
        title.addEventListener('click', function () {
            const content = this.nextElementSibling;

            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
            const icon = this.querySelector('.play-icon');
            if (content.style.display === 'block') {
                icon.textContent = '▼';
            } else {
                icon.textContent = '▶';
            }
        });
    });
});
