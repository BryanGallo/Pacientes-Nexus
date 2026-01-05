import { useForm, type SubmitHandler } from "react-hook-form";
import Error from "../ui/Error";
import type { Patient } from "../types";
import { usePatientStore } from "../store/store";

export default function PatientForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Patient>();

    //* Cualquiera de las dos formas es correcta
    // const { addPatient } = usePatientStore();
    const addPatient = usePatientStore((state) => state.addPatient);

    const registerPatient: SubmitHandler<Patient> = (data) => {
        console.log(data);
        addPatient(data);
        reset();
    };

    return (
        <div className="mx-5">
            <h2 className="font-black text-3xl text-center">
                Seguimiento Pacientes
            </h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {""}
                <span className="text-indigo-600 font-bold">Administralos</span>
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
                    value="Guardar Paciente"
                />
            </form>
        </div>
    );
}
