document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('display_content');
    const buttons = document.querySelectorAll('button');

    let string = "";
    const arr = Array.from(buttons);

    arr.forEach(button => {
        button.addEventListener('click', (e) => {
            const buttonText = e.target.innerHTML;
            if (buttonText === '=') {
                try {
                    string = eval(string);
                    input.value = string;
                } catch {
                    input.value = "Error";
                    string = "";
                }
            } else if (buttonText === 'DEL') {
                string = string.substring(0, string.length - 1);
                input.value = string;
            } else if (buttonText === 'AC') {
                string = "";
                input.value = string;
            } else {
                string += buttonText;
                input.value = string;
            }
        });
    });
});
