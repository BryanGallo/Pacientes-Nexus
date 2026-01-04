export default function Error({ message }: { message: string }) {
    return <p className="text-white bg-red-500 p-2 rounded-md text-sm mt-2">{message}</p>;
}
