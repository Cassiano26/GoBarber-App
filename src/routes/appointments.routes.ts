import { Router } from 'express';
import { parseISO } from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentesRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentesRouter.get('/', (request, response) => {
  const allAppointments = appointmentsRepository.all();
  return response.json(allAppointments);
});

appointmentesRouter.post('/', (request, response) => {
  try {
    const { provider, date } = request.body;

    const parsedDate = parseISO(date);

    const CreatedAppointment = new CreateAppointmentService(
      appointmentsRepository,
    );

    const appointment = CreatedAppointment.execute({
      provider,
      date: parsedDate,
    });

    return response.json(appointment);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default appointmentesRouter;
