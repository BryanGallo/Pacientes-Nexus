import { create } from "zustand";
import type { DraftPatient, Patient } from "../types";

type PatientState = {
    patients: Patient[];
    addPatient: (data: DraftPatient) => void;
};

export const usePatientStore = create<PatientState>((set) => ({
    patients: [],
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
}));
