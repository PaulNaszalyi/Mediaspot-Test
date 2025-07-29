export const secondsToTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return [
        hours > 0 ? `${hours}h` : '',
        minutes > 0 ? `${minutes}m` : '',
        secs > 0 ? `${secs}s` : ''
    ].filter(Boolean).join(' ') || '0s';
}

export const displayDate = (date: Date | string): string => {
    const d = new Date(date);
    return d.toLocaleString('fr-FR', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}
