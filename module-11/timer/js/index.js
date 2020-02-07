class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = targetDate.getTime();
    this.intervalId = 0;
    this.refs = {
      mainBlock: document.querySelector(this.selector),
      days: document.querySelector(`${this.selector} span[data-value="days"]`),
      hours: document.querySelector(
        `${this.selector} span[data-value="hours"]`
      ),
      mins: document.querySelector(`${this.selector} span[data-value="mins"]`),
      secs: document.querySelector(`${this.selector} span[data-value="secs"]`)
    };
  }

  timeCalculate(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  timeToPage({ days, hours, mins, secs }) {
    this.refs.days.textContent = days;
    this.refs.hours.textContent = hours;
    this.refs.mins.textContent = mins;
    this.refs.secs.textContent = secs;
  }

  timerReady() {
    const currentDate = Date.now();
    this.deltaTime = this.targetDate - currentDate;
    const calculatedTime = this.timeCalculate(this.deltaTime);
    this.timeToPage(calculatedTime);

    if (this.deltaTime <= 0) {
      this.deltaTime = 0;
      this.timeToPage(this.timeCalculate(this.deltaTime));
      clearInterval(this.intervalId);
    }
  }

  counter() {
    this.timerReady();

    this.intervalId = setInterval(() => {
      this.timerReady();
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

const timer = new CountdownTimer("#timer-1", new Date("Jan 1, 2021"));

timer.counter();
