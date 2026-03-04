type PatientCardItemProps = {
    label: string;
    data: string;
};

const PatientCardItem = ({ label, data }: PatientCardItemProps) => {
    return (
        <p className="font-bold mb-3 text-gray-700 uppercase">
            {label}: {""}
            <span className="font-normal normal-case">{data}</span>
        </p>
    );
};

export default PatientCardItem;
