import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { DraftPatient, Patient } from "../types";

type PatientState = {
    patients: Patient[];
    addPatient: (data: DraftPatient) => void;
    deletePatient: (id: Patient["id"]) => void;
    activePatient: Patient["id"];
    getActivePatient: (id: Patient["id"]) => void;
    updatePatient: (data: DraftPatient) => void;
    clearActivePatient: () => void;
};

export const usePatientStore = create<PatientState>()(
    devtools(
        persist(
            (set) => ({
                patients: [],
                activePatient: "",
                addPatient: (data: DraftPatient) => {
                    const newPatient: Patient = {
                        ...data,
                        //* Genera un ID aleatorio usando el api
                        //* https://developer.mozilla.org/es/docs/Web/API/Crypto/randomUUID
                        id: crypto.randomUUID(),
                    };
                    set((state) => ({
                        patients: [...state.patients, newPatient],
                    }));
                },
                deletePatient: (id) => {
                    set((state) => ({
                        patients: state.patients.filter(
                            (patient) => patient.id !== id,
                        ),
                    }));
                },
                getActivePatient: (id) => {
                    set(() => ({
                        activePatient: id,
                    }));
                },
                updatePatient: (data) => {
                    set((state) => ({
                        patients: state.patients.map((patient) =>
                            patient.id === state.activePatient
                                ? { id: state.activePatient, ...data }
                                : patient,
                        ),
                        activePatient: "",
                    }));
                },
                clearActivePatient: () => {
                    set(() => ({
                        activePatient: "",
                    }));
                },
            }),
            {
                name: "patient-storage",
                //? Por defecto es localStorage, pero se puede cambiar a sessionStorage
                // storage: createJSONStorage(() => sessionStorage),
            },
        ),
    ),
);
