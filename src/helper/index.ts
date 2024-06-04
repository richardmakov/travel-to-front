import dayjs from "dayjs";

export function formatDate(date: dayjs.Dayjs | null): string {
  if (!date) return '';

  return dayjs(date).format('YYYY-MM-DD');
}


export function formatDateTime(datetime: string) {
  const formatDeparture = (datetime: string): string => {
    const dt = new Date(datetime);
    /* const formattedDate = dt.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }); */

    const formattedTime = dt.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit'
    });

    return `${formattedTime}`;
  };

  return formatDeparture(datetime)
}

export function formatDateAndTime(datetime: string | undefined) {
  if (datetime) {
    const formatDeparture = (datetime: string): string => {
      const dt = new Date(datetime);
      const formattedDate = dt.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });

      const formattedTime = dt.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit'
      });

      return `${formattedTime} - ${formattedDate}`;
    };

    return formatDeparture(datetime)
  }

}

export default formatDateTime;