import { Link } from 'react-router-dom';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="bg-slate-800 text-white py-4">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div>
                    <Link to="/" className="hover:text-gray-300">
                        Home
                    </Link>
                </div>
                <div>
                    &copy; Nahar {currentYear}
                </div>
                <div>
                    <Link to="/about" className="hover:text-gray-300">
                        About Us
                    </Link>
                </div>
            </div>
        </div>
    );
}