export interface Status {
    currentIndex: number;
    total: number;
    isLoading: boolean;
    isMounted: boolean;
    status: 'playing' | 'paused';
    fps: number;
}