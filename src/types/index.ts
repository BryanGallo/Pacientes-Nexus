export type FormPatient = {
    id: string;
    name: string;
    caretaker: string;
    email: string;
    date: Date;
    symptoms: string;
};

export type Patient = Omit<FormPatient, "id">;