import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";

export default function NotFoundPage() {
  return (
    <Layout>
      <div className="section-padding min-h-[70vh] py-32 flex flex-col items-center justify-center text-center">
        <p className="text-sm uppercase tracking-widest text-studz-brand">404</p>
        <h1 className="mt-2 text-4xl font-bold text-gradient">Page not found</h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-md">
          The endpoint you opened does not exist or has moved. Use the link below to continue.
        </p>
        <Link to="/" className="mt-8 btn-accent !rounded-xl !px-7 !py-3">
          Back to home
        </Link>
      </div>
    </Layout>
  );
}
