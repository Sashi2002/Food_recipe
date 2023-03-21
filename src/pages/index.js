import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Recipe from '../../components/recipies';
import Semi from '../../components/semi';
import Non from '../../components/non';

export default function Home() {
  return (
    <>
      <Head>
        <title>Recipe</title>
      </Head>

      <main className="flex-col ">
        <Navbar />
        <div className="flex justify-around items-center my-16">
          <Recipe />
          <Semi />
          <Non />
        </div>
        <Footer />
      </main>
    </>
  );
}
