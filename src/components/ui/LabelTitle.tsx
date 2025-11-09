export default function Logo() {
    return (
        <div className="flex flex-col items-center mb-6">
            <div className="bg-sky-700 text-white w-14 h-14 flex items-center justify-center rounded-md text-2xl font-bold">
                M
            </div>
            <h1 className="mt-4 text-2xl font-bold text-gray-800">MedEquip Pro</h1>
            <p className="text-gray-500 text-sm text-center">
                Sistema de administración de equipos biomédicos
            </p>
        </div>
    )
}