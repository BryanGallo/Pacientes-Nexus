import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { usePatientStore } from "../store/store";
import type { Patient } from "../types";
import Error from "../ui/Error";

export default function PatientForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        // setValue,
    } = useForm<Patient>();

    //* Cualquiera de las dos formas es correcta
    // const { addPatient } = usePatientStore();
    const addPatient = usePatientStore((state) => state.addPatient);
    const activePatient = usePatientStore((state) => state.activePatient);
    const patients = usePatientStore((state) => state.patients);
    const updatePatient = usePatientStore((state) => state.updatePatient);
    const clearActivePatient = usePatientStore(
        (state) => state.clearActivePatient,
    );

    useEffect(() => {
        if (activePatient) {
            const patient = patients.find(
                (patient) => patient.id === activePatient,
            );
            if (patient) {
                //? dispara una actualización interna por cada vez que lo llamas olo deberías usar setValue cuando quieras cambiar un campo específico sin afectar al resto del formulario.
                // setValue("name", patient.name);
                // setValue("caretaker", patient.caretaker);
                // setValue("email", patient.email);
                // setValue("date", patient.date);
                // setValue("symptoms", patient.symptoms);
                //* reset() es la forma correcta de hacerlo envia un objeto con los valores del paciente
                reset(patient);
            }
        } else {
            reset({
                name: "",
                caretaker: "",
                email: "",
                date: "",
                symptoms: "",
            });
        }
    }, [activePatient, patients, reset]);

    const registerPatient: SubmitHandler<Patient> = (data) => {
        if (activePatient) {
            updatePatient(data);
            toast.success("Paciente actualizado correctamente");
        } else {
            addPatient(data);
            toast.success("Paciente agregado correctamente");
        }
        reset();
    };

    return (
        <div className="mx-5">
            <h2 className="font-black text-3xl text-center">
                Seguimiento Pacientes
            </h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {""}
                <span className="text-indigo-600 font-bold">
                    {activePatient ? "Edítalos" : "Admistralos"}
                </span>
            </p>

            <form
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                onSubmit={handleSubmit(registerPatient)}
                noValidate
            >
                <div className="mb-5">
                    <label
                        htmlFor="name"
                        className="text-sm uppercase font-bold"
                    >
                        Paciente
                    </label>
                    <input
                        id="name"
                        className="w-full p-3  border border-gray-100"
                        type="text"
                        placeholder="Nombre del Paciente"
                        {...register("name", {
                            required: "El nombre es obligatorio",
                            minLength: {
                                value: 3,
                                message:
                                    "El nombre debe tener al menos 3 caracteres",
                            },
                        })}
                    />
                    {/* {errors.name ? (
                        <p className="text-red-500 text-sm">
                            {errors.name.message as string}
                        </p>
                    ) : null} */}
                    {errors.name ? (
                        <Error
                            message={errors.name.message?.toString() || ""}
                        />
                    ) : null}
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="caretaker"
                        className="text-sm uppercase font-bold"
                    >
                        Propietario
                    </label>
                    <input
                        id="caretaker"
                        className="w-full p-3  border border-gray-100"
                        type="text"
                        placeholder="Nombre del Propietario"
                        {...register("caretaker", {
                            required:
                                "El nombre del propietario es obligatorio",
                            minLength: {
                                value: 4,
                                message:
                                    "El nombre del propietario debe tener al menos 4 caracteres",
                            },
                        })}
                    />
                    {errors.caretaker ? (
                        <Error
                            message={errors.caretaker.message?.toString() || ""}
                        />
                    ) : null}
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="text-sm uppercase font-bold"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        className="w-full p-3  border border-gray-100"
                        type="email"
                        placeholder="Email de Registro"
                        {...register("email", {
                            required: "El email es obligatorio",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "El email no es válido",
                            },
                        })}
                    />
                    {errors.email ? (
                        <Error
                            message={errors.email.message?.toString() || ""}
                        />
                    ) : null}
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="date"
                        className="text-sm uppercase font-bold"
                    >
                        Fecha Alta
                    </label>
                    <input
                        id="date"
                        className="w-full p-3  border border-gray-100"
                        type="date"
                        {...register("date", {
                            required: "La fecha es obligatoria",
                            min: {
                                value: new Date().toISOString().split("T")[0],
                                message:
                                    "La fecha debe ser igual o mayor a la fecha actual",
                            },
                        })}
                    />
                    {errors.date ? (
                        <Error
                            message={errors.date.message?.toString() || ""}
                        />
                    ) : null}
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="symptoms"
                        className="text-sm uppercase font-bold"
                    >
                        Síntomas
                    </label>
                    <textarea
                        id="symptoms"
                        className="w-full p-3  border border-gray-100"
                        placeholder="Síntomas del paciente"
                        {...register("symptoms", {
                            required: "Los síntomas son obligatorios",
                        })}
                    ></textarea>
                    {errors.symptoms ? (
                        <Error
                            message={errors.symptoms.message?.toString() || ""}
                        />
                    ) : null}
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value={
                        activePatient
                            ? "Actualizar Paciente"
                            : "Guardar Paciente"
                    }
                />
                {activePatient && (
                    <button
                        type="button"
                        className="bg-red-600 w-full p-3 mt-5 text-white uppercase font-bold hover:bg-red-700 cursor-pointer transition-colors"
                        onClick={() => clearActivePatient()}
                    >
                        Limpiar formulario
                    </button>
                )}
            </form>
        </div>
    );
}
