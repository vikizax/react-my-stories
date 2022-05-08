/// <reference types="react" />
interface IProgressProps {
    nextCallback?: (...args: any[]) => void;
    previousCallback?: (...args: any[]) => void;
}
declare const Progress: ({ nextCallback, previousCallback }: IProgressProps) => JSX.Element;
export default Progress;
