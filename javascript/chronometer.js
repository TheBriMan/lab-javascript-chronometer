class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
    
      this.currentTime++;
     
    }, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
      return Math.floor(this.currentTime - (this.getMinutes() * 60));
  }
  twoDigitsNumber() { //ni idea
    //return this.getMinutes().toFixed([2]), this.getSeconds().toFixed([2]);
    //let minutes = this.getMinutes();
    //return ('0' + minutes).slice(-2);
    //return ('0' + this.currentTime).slice(-2)
    /*if (this.currentTime.length == 1) {
      this.currentTime = "0" + this.currentTime;
    }
    return this.currentTime.toString();*/
    if (this.getMinutes() < 10) {
      return "0" + this.getMinutes().toString();
    } else {
      return this.getMinutes().toString();
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() { //ni idea
    this.twoDigitsNumber(this.getMinutes());
    this.twoDigitsNumber(this.getSeconds(this.getMinutes));
  }
}
