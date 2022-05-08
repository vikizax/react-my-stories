import { atom } from 'recoil';
import { DEFAULT_INTERVAL } from '../../constant';
import { Timer } from '../../model/timer.model';

export const timerInitialState: Timer = {
    interval: DEFAULT_INTERVAL,
    timeTracker: 0,
}

const timerAtom = atom<Timer>({
    key: 'timer',
    default: timerInitialState,
})

export default timerAtom;