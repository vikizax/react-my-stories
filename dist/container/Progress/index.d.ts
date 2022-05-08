/// <reference types="react" />
interface IProgressProps {
    nextCallback?: (...args: any[]) => void;
    interval: number;
}
declare const Progress: ({ nextCallback, interval }: IProgressProps) => JSX.Element;
export default Progress;
