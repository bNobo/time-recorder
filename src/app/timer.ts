export class Timer {
    id?: number;
    duration: Date = new Date(0, 0, 0, 0, 0, 0);    
    startTime: number;
    private timer: NodeJS.Timer;
    
    constructor(private label:string) {

    }

    public start()
    {
        this.startTime = Date.now();

        this.timer = setInterval(() => this.duration = new Date(0, 0, 0, 0, 0, this.computeElapsedTime()), 1000);
    }

    public stop()
    {
        clearInterval(this.timer);
    }

    computeElapsedTime() : number {
        const elapsed = Date.now() - this.startTime;

        return elapsed / 1000;
    }
}