import PatientForm from "./components/PatientForm";
import PatientList from "./components/PatientList";

function App() {
    return (
        <>
            <div className="container mx-auto bg-red-100 p-4 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center md:w-2/3 mx-auto">
                    Seguimiento de pacientes{" "}
                    <span className="text-blue-500">Nexus</span>
                </h1>
            </div>
            <div className="m-12 md:flex">
                <div className="md:w-2/5">
                    <PatientForm />
                </div>
                <div className="md:w-3/5">
                    <PatientList />
                </div>
            </div>
        </>
    );
}

export default App;
