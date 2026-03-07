import type { Patient } from "../types";
import { usePatientStore } from "../store/store";
import PatientCardItem from "./PatientCardItem";

const labels = {
    id: "ID",
    name: "Nombre",
    caretaker: "Propietario",
    email: "Email",
    date: "Fecha Alta",
    symptoms: "Síntomas",
} as const;

export default function PatientCard({ patient }: { patient: Patient }) {
    const { deletePatient, getActivePatient } = usePatientStore();

    return (
        <div className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
            {Object.entries(labels).map(([key, label]) => (
                <PatientCardItem
                    key={key}
                    label={label}
                    data={patient[key as keyof typeof labels]}
                />
            ))}

            <div className="flex justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => getActivePatient(patient.id)}
                >
                    Editar
                </button>

                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => deletePatient(patient.id)}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
}
