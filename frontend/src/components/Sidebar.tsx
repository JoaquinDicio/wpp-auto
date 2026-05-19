export default function Sidebar() {
    return (
        <aside className="w-64 bg-gray-900 text-white p-6">
            <h1 className="text-xl font-semibold mb-8">Reminder App</h1>

            <nav className="flex flex-col gap-3">
                <a className="px-3 py-2 rounded hover:bg-gray-800 cursor-pointer">
                    Dashboard
                </a>

                <a className="px-3 py-2 rounded hover:bg-gray-800 cursor-pointer">
                    Clients
                </a>

                <a className="px-3 py-2 rounded hover:bg-gray-800 cursor-pointer">
                    Appointments
                </a>

                <a className="px-3 py-2 rounded hover:bg-gray-800 cursor-pointer">
                    Templates
                </a>
            </nav>
        </aside>
    )
}