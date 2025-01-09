export default function two_crystal_balls(breaks: boolean[]): number {
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));
    let i = 0;
    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }
    if (i < 1) {
        return 0;
    }
    const bound = i;
    i -= jmpAmount;
    for (; i <= bound && i < breaks.length; i++) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
}
