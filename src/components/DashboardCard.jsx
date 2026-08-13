function DashboardCard({ titulo, cantidad }) {
    return (
        <div className="bg-white rounded-xl shadow-md p-6">

            <h3 className="text-gray-500 text-lg">
                {titulo}
            </h3>

            <p className="text-4xl font-bold mt-4">
                {cantidad}
            </p>

        </div>
    );
}

export default DashboardCard;