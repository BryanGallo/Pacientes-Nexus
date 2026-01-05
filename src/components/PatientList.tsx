import { usePatientStore } from "../store/store";
import PatientCard from "./PatientCard";

const PatientList = () => {
    const { patients } = usePatientStore();
    console.log(patients);

    return (
        <div>
            <h2 className="font-black text-3xl text-center">Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Administra tus {""}
                <span className="text-indigo-600 font-bold">
                    Pacientes y Citas
                </span>
            </p>
            {patients.length === 0 ? (
                <p className="text-center text-gray-600">
                    No hay pacientes
                </p>
            ) : (
                patients.map((patient) => (
                    <PatientCard key={patient.id} patient={patient} />
                ))
            )}
        </div>
    );
};

export default PatientList;
