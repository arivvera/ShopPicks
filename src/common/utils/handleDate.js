
/**
 * Function to obtain descriptive time between string date and now
 * @param dateString: string to calculate
 * @returns time: string in format "a year/month/week/etc." ago
 * */
export const timeAgo = (dateString) => {
    const now = new Date();
    const date = new Date(dateString);
    const seconds = Math.floor((now - date) / 1000);
    let interval = Math.floor(seconds / 31536000); // Años
    if (interval >= 1) return `${interval} year${interval > 1 ? 's' : ''} ago`;
    interval = Math.floor(seconds / 2592000); // Meses
    if (interval >= 1) return `${interval} month${interval > 1 ? 's' : ''} ago`;
    interval = Math.floor(seconds / 86400); // Días
    if (interval >= 1) return `${interval} day${interval > 1 ? 's' : ''} ago`;
    interval = Math.floor(seconds / 3600); // Horas
    if (interval >= 1) return `${interval} hour${interval > 1 ? 's' : ''} ago`;
    interval = Math.floor(seconds / 60); // Minutos
    if (interval >= 1) return `${interval} minute${interval > 1 ? 's' : ''} ago`;
    return 'just now';
};
