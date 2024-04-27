import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
    return (
        <footer className="bg-gray-600">
            <div className="px-5 py-10">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                    <div className="sm:col-span-2">
                        <h4 className="text-2xl text-white">Redes Sociales</h4>
                        <h5 className="text-white py-2">
                            Los invitamos a visitarnos en nustreas Redes Sociales
                        </h5>
                        <div className="my-5">
                            <button className="text-black bg-white h-10 w-10 rounded-full mr-2 hover:text-white hover:bg-black">
                                <i className="fa-brands fa-x-twitter"></i>
                            </button>
                            <button className="text-blue-500 bg-white h-10 w-10 rounded-full mr-2 hover:text-white hover:bg-blue-500">
                                <i className="fab fa-facebook"></i>
                            </button>
                            <button className="bg-white text-pink-500 h-10 w-10 rounded-full mr-2 hover:text-white hover:bg-pink-500">
                                <i className="fab fa-instagram"></i>
                            </button>
                            <button className="bg-white text-red-500 h-10 w-10 rounded-full mr-2 hover:text-white hover:bg-red-500">
                                <i className="fab fa-youtube"></i>
                            </button>
                        </div>
                    </div>
                    <div>
                        <p className="text-white text-xl lg:text-left">Información de Contacto</p>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <p className="text-white">
                                <i className="fa-solid fa-location-dot mr-5"></i>Calle Principal, Ciudad, País
                            </p>
                            <p className="text-white">
                                <i className="fas fa-phone mr-3"></i>+00-000000000-00
                            </p>
                            <p className="text-white">
                                <i className="fas fa-envelope mr-3"></i>infocorreo@ejemplo.com.ar
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className="text-white text-xl lg:text-left">Enlaces Utiles</p>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <a href="#" className="text-white hover:underline hover:text-orange-300">Términos de Uso</a>
                            <a href="#" className="text-white hover:underline hover:text-orange-300">Políticas de Privacidad</a>
                            <a href="#" className="text-white hover:underline hover:text-orange-300">Preferencias de Cookies</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-gray-200" />
            <div className="bg-gray-700">
                <p className="text-white py-3">Copyright © Todos los derechos reservados - 2024</p>
            </div>
        </footer>
    )
}

export default Footer;