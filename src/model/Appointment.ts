import { uuid } from 'uuidv4';

interface AppointmentConstructor {
  provider: string;
  date: Date;
}

class Appointment {
  id: string;

  provider: string;

  date: Date;

  // Omit: ignora um atributo que não é reecebido externamente
  constructor({ provider, date }: Omit<Appointment, 'id'>) {
    this.id = uuid();
    this.provider = provider;
    this.date = date;
  }
}

export default Appointment;
