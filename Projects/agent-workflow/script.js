document.getElementById('start-btn').addEventListener('click', function() {
    const steps = ['user-input', 'mercury-analysis', 'codex-execution', 'github-sync'];
    let index = 0;

    this.disabled = true;

    function activateStep() {
        if (index < steps.length) {
            document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
            document.getElementById(steps[index]).classList.add('active');
            index++;
            setTimeout(activateStep, 1000);
        } else {
            document.getElementById('start-btn').disabled = false;
        }
    }

    activateStep();
});
