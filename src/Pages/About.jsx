import { Link } from "react-router";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto mt-20">
      <section id="about" className="w-full bg-white py-16 h-screen">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-blue-500 mb-6">About Us</h3>
          <p className="max-w-2xl mx-auto text-lg text-black-600 mb-8">
            At Sweet Treats, we craft irresistible cupcakes bursting with flavor and charm. Every bite is a celebration
            of sweetness, made to delight your taste buds and brighten your day!
          </p>
          <Link
            to="/"
            className="px-6 py-3 bg-white text-blue-500 rounded-full shadow hover:bg-blue-100"
          >
           Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
