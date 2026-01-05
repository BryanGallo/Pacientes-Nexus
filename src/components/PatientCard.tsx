import type { Patient } from "../types";

export default function PatientCard({ patient }: { patient: Patient }) {
    return (
        console.log(patient),
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
            </div>
        )
    );
}
