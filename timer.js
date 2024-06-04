#! /usr/bin/env node
import inquirer from 'inquirer';
async function startTimer() {
    const { duration } = await inquirer.prompt({
        type: 'number',
        name: 'duration',
        message: 'Enter the duration of the countdown timer (in seconds):',
    });
    console.log('Countdown started!');
    let remainingTime = duration;
    const interval = setInterval(() => {
        remainingTime--;
        if (remainingTime === 0) {
            clearInterval(interval);
            console.log('Countdown finished!');
        }
        else {
            console.log(`Time remaining: ${remainingTime} seconds`);
        }
    }, 1000);
}
startTimer();
