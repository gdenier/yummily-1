import type { NextPage } from "next";
import Link from "next/link";
import { Navbar } from "../components/LandingPage/Navbar";
import routes from "../utils/data/routes";

const Home: NextPage = () => {
  return (
    <section className="bg-white dark:bg-gray-800">
      <Navbar />

      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
            Construisez votre livre de recette personnel
          </h1>
          <p className="mt-6 text-gray-500 dark:text-gray-300">
            Creer et partager toutes vos recettes le plus simplement possible.
          </p>
          <Link href={routes("signup")}>
            <a className="btn btn-primary mt-6">C&apos;est partis</a>
          </Link>
          <p className="mt-2 text-sm text-gray-400 ">
            C&apos;est totalement gratuit
          </p>
        </div>

        {/* <div className="flex justify-center mt-10">
          <div className="w-full h-64 bg-blue-600 rounded-xl md:w-4/5"></div>
        </div> */}
      </div>
    </section>
  );
};

export default Home;
