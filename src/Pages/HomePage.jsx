import { Link } from "react-router"

const HomePage = () => {
    return (
    <div className="h-screen">
      <div className="min-h-screen flex flex-col items-center bg-cover bg-center text-gray-800"
      style={{
        backgroundImage: `url('/cupcake/bb2.jpg')`, // Updated path
      }}>
          <section className="flex flex-col items-center justify-center text-center p-20 px-6">
        <h2 className="text-5xl font-extrabold text-black mb-4 mt-20">
            Welcome to Sweet Treats
          </h2>
          <p className="max-w-2xl text-lg text-black mb-6">
            Indulge in our heavenly cupcakes, lovingly crafted with premium ingredients to make every celebration sweeter!
          </p>
          <Link
           to="/gallery"
            className="px-6 py-3 bg-white text-blue-500 rounded-full shadow hover:bg-blue-100"
          >
            See Our Creations
          </Link>
        </section>
  
      </div>
      </div>
    )
  }
  
  export default HomePage