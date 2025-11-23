let elapsed = 0;

const intervalId = setInterval(() => {
    console.log('Running.');
    elapsed += 2000;

    if (elapsed >= 10000) {
        clearInterval(intervalId);
        console.log('Timer stopped.');
    }
}, 2000);
