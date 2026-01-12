import type { Patient } from "../types";
import { usePatientStore } from "../store/store";

export default function PatientCard({ patient }: { patient: Patient }) {
    const { deletePatient } = usePatientStore();
    return (
        (
            <div className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                <h3 className="text-2xl font-bold">{patient.name}</h3>
                <p className="text-sm text-gray-500">{patient.email}</p>
                <p className="text-sm text-gray-500">
                    Cuidador: {patient.caretaker}
                </p>
                <p className="text-sm text-gray-500">
                    Fecha de Alta: {patient.date.toString()}
                </p>
                <p className="text-sm text-gray-500">
                    Síntomas: {patient.symptoms}
                </p>
                <p className="text-sm text-gray-500">Email: {patient.email}</p>
                <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={() => deletePatient(patient.id)}>Editar Paciente</button>
                <button type="button" className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={() => deletePatient(patient.id)}>Eliminar Paciente</button>
            </div>
        )
    );
}
