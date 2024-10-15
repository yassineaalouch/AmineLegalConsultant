import { FaGavel, FaFileContract, FaBalanceScale } from 'react-icons/fa';

function Services() {
  return (
      <section className="mb-12">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">
          Services Juridiques Proposés
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300">
            <FaGavel className="text-black text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-black mb-2">Conseil Juridique</h3>
            <p className="text-gray-600">
              Bénéficiez de conseils juridiques personnalisés pour vos questions et litiges.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300">
            <FaFileContract className="text-black text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-black mb-2">Rédaction de Documents</h3>
            <p className="text-gray-600">
              Rédaction et révision de documents légaux tels que les contrats et accords.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300">
            <FaBalanceScale className="text-black text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-black mb-2">Assistance en Litige</h3>
            <p className="text-gray-600">
              Assistance pour la préparation de vos dossiers juridiques et contentieux.
            </p>
          </div>
        </div>
      </section>
  )
}

export default Services
