document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('casesChart').getContext('2d');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: [2019, 2020, 2021, 2022, 2023, 2024],
            datasets: [{
                label: 'Cases',
                data: [12778, 8058, 12348, 14118, 17265, 18719],
                borderColor: 'blue',
                backgroundColor: 'rgba(0, 0, 255, 0.1)',
                borderWidth: 2,
                pointRadius: 5,
                pointBackgroundColor: 'red',
                tension: 0.4,  // Makes the line curved
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Year'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Number of Cases'
                    }
                }
            }
        }
    });
});
function predict() {
    const C0 = parseFloat(document.getElementById('C0').value);
    const r = parseFloat(document.getElementById('r').value);
    const year = parseInt(document.getElementById('year').value);
    const initialYear = 2019;

    if (isNaN(C0) || isNaN(r) || isNaN(year)) {
        document.getElementById('result').innerText = 'Please enter valid numbers.';
        return;
    }

    const yearsElapsed = year - initialYear;
    const predictedCases = C0 * Math.exp(r * yearsElapsed);

    document.getElementById('result').innerText = `Predicted cases in ${year}: ${predictedCases.toFixed(2)}`;
}
document.addEventListener("DOMContentLoaded", function () {
    let posX = 0, posY = 0;
    let speedX = 0.2, speedY = 0.1; // Adjust speed for smooth movement

    function moveBackground() {
        posX += speedX;
        posY += speedY;
        document.body.style.backgroundPosition = `${posX}px ${posY}px`;
        requestAnimationFrame(moveBackground);
    }

    moveBackground();
});
