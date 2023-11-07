function makeCounter(n){
    class counter{
        n = 0;
        constructor(n) {
            this.n = n
        }
        count() {
            this.n += this.n;
            return this.n;
        }
        reset(){
            this.n = 0;
        }
        set(value){
            this.n = value;
        }
    }

    return new counter(n);
}

let counter = makeCounter(2);
console.log(counter.count());
counter.reset();
counter.set(5);
console.log(counter.count());
