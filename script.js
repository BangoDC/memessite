function uploadMeme() {
    const fileInput = document.getElementById('file-input');
    const memesContainer = document.getElementById('memes-container');

    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const imageUrl = event.target.result;
            const memeElement = document.createElement('div');
            memeElement.classList.add('meme');
            memeElement.innerHTML = `<img src="${imageUrl}" alt="Meme">`;
            memesContainer.appendChild(memeElement);
        };
        reader.readAsDataURL(file);
    } else {
        alert('Please select a file.');
    }
}
