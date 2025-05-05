document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const inputField = document.getElementById('inputWord');
    const resultOutput = document.getElementById('result');

    const generateHashtags = () => {
        const inputText = inputField.value.trim();
        
        if (!inputText) {
            resultOutput.textContent = "Please enter some text";
            return;
        }

        const hashtags = inputText.split(/\s+/)
            .filter(word => word.length > 0)
            .map(word => `#${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`);

        resultOutput.textContent = hashtags.join(' ') || "#" + inputText;
    };

    generateBtn.addEventListener('click', generateHashtags);
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') generateHashtags();
    });
});