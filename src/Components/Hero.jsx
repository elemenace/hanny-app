

const Hero = () => {
  return (
    <div>
        <section className="flex flex-col items-center text-center py-20 px-6">
        <h2 className="text-5xl font-extrabold text-black mb-4">
          Welcome to Sweet Treats
        </h2>
        <p className="max-w-2xl text-lg text-black mb-6">
          Indulge in our heavenly cupcakes, lovingly crafted with premium ingredients to make every celebration sweeter!
        </p>
        <a
          href="#gallery"
          className="px-6 py-3 bg-white text-blue-500 rounded-full shadow hover:bg-blue-100"
        >
          See Our Creations
        </a>
      </section>

    </div>
  )
}

export default Hero