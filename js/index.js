const makeRect = (length, width) => {
    for (let i = 1; i <= length; i++) {
        if (i === 1 || i === length) {
            let toWrite = '';

            for (let j = 1; j <= width; j++) {
                toWrite += '*';
            }

            console.log(toWrite);
        } else {
            let toWrite = '*';

            for (let j = 2; j < width; j++) {
                toWrite += ' ';
            }

            toWrite += '*';

            console.log(toWrite);
        }
    }
};

// makeRect(5, 6);

const mainContainer = document.querySelector('.main__container');

// const allContainers = document.querySelectorAll('.main__container');
//
// console.log(allContainers);

console.log(mainContainer.classList.contains('main__container'));

const newDiv = document.createElement('div');

const textContent = document.createTextNode('My text node');

newDiv.appendChild(textContent);

// mainContainer.appendChild(newDiv);
document.body.insertBefore(newDiv, mainContainer);

console.log(newDiv);

const toggler = document.querySelector('.container-toggler');

toggler.addEventListener('click', function () {
    const isContainerActive = mainContainer.classList.contains('active');

    if (isContainerActive) {
        mainContainer.classList.remove('active');
        this.innerText = 'Activate container';
    } else {
        mainContainer.classList.add('active');
        this.innerText = 'Deactivate container';
    }
});

const toggler2 = document.getElementById('toggler');

// console.log(toggler.style);

// toggler.addEventListener('click', () => {
//     console.log(this, ' from arrow function');
//
//     if(mainContainer.classList.contains('active')) {
//         mainContainer.classList.remove('active');
//     } else {
//         mainContainer.classList.add('active');
//     }
// });

const weightInput = document.getElementsByName('weight')[0];

const heightInput = document.getElementsByName('height')[0];

const testerBtn = document.querySelector('#tester');

testerBtn.addEventListener('click', function () {
    const weight = weightInput.value;
    const height = heightInput.value;

    if (!weight || !height) {
        alert('Please, enter values correctly');
    } else {
        const bmi = (weight / (Math.pow(height, 2))).toFixed(1);

        if (bmi < 18.5) {
            alert(`Ye emele gel, your BMI is about: ${bmi}`);
        } else if (bmi > 18.5 && bmi < 24.9) {
            alert(`You are about fit, your BMI is about: ${bmi}`);
        } else if (bmi > 25 && bmi < 29.9) {
            weightInput.style.borderColor = 'orangered';
            alert('Bir az ozune qulaq as');
        } else {
            weightInput.style.borderColor = 'red';
            alert('Hekime get');
        }
    }
});


