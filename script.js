class CountdownTimer {
    constructor({ selector, targetDate }) {
      this.selector = selector;
      this.targetDate = targetDate;
  
      this.refs = {
        days: document.querySelector(`.days`),
        hours: document.querySelector(`.hours`),
        mins: document.querySelector(`.mins`),
        secs: document.querySelector(`.secs`),
      };
  
      this.start();
    }
  
    start() {
      this.intervalId = setInterval(() => {
        const currentTime = new Date();
        const time = this.targetDate - currentTime;
  
        if (time <= 0) {
          clearInterval(this.intervalId);
          this.updateTimer(0, 0, 0, 0);
        } else {
          const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
          const hours = this.pad(
            Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          );
          const mins = this.pad(
            Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
          );
          const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  
          this.updateTimer(days, hours, mins, secs);
        }
      }, 1000);
    }
  
    updateTimer(days, hours, mins, secs) {
      this.refs.days.textContent = days;
      this.refs.hours.textContent = hours;
      this.refs.mins.textContent = mins;
      this.refs.secs.textContent = secs;
    }
  
    pad(value) {
      return String(value).padStart(2, '0');
    }
  }
  
  new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2023 12:00:00'),
  });
  