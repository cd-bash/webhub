export function formatDate(dateString: string, separator: string = "/"): string {
    const [year, month, day] = dateString.split('-').map(Number);
    
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    return `${months[month - 1]} ${day} ${separator} ${year}`;
}