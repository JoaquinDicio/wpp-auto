import DashboardLayout from "../layout/DashboardLayout"
import StatCard from "../components/StatCard"

export default function Dashboard() {
    return (
        <DashboardLayout>

            <div className="grid grid-cols-4 gap-4 mb-6">

                <StatCard title="Appointments Today" value={12} />
                <StatCard title="Pending Messages" value={8} />
                <StatCard title="Sent Today" value={20} />
                <StatCard title="Failed Messages" value={1} />

            </div>

            <div className="bg-white p-6 rounded-lg border">
                Upcoming schedules table
            </div>

        </DashboardLayout>
    )
}