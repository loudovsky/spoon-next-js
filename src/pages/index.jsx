import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/container/Layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <h1>Accueil</h1>
    </Layout>
  );
}
