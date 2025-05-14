// 1. Change text content dynamically
document.getElementById('changeTextButton').addEventListener('click', function() {
    document.getElementById('textContent').textContent = 'The text has been changed!';
});

// 2. Modify CSS styles via JavaScript
document.getElementById('changeStyleButton').addEventListener('click', function() {
    document.getElementById('styleExample').style.color = 'blue';
    document.getElementById('styleExample').style.fontSize = '20px';
});

// 3. Add or remove an element when a button is clicked
document.getElementById('toggleElementButton').addEventListener('click', function() {
    const element = document.getElementById('elementToToggle');
    element.classList.toggle('hidden');
});
