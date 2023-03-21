import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Recipe from '../../components/recipies';
import Share from '../../components/shared/share';
import { useState } from 'react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Recipe</title>
      </Head>

      <main className="flex-col ">
        <Navbar />
        <div>
          <Recipe />
        </div>
        <Footer />
      </main>
    </>
  );
}
