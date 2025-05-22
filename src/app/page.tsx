import Header from "@/components/Header";
import PromoBanner from "@/components/PromoBanner";
import CountdownTimer from "@/components/CountdownTimer";
import RechargeForm from "@/components/RechargeForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <div className="bg-slate-100 flex-1">
        <PromoBanner />
        <CountdownTimer />

        <div className="py-10 px-5">
          <RechargeForm />
        </div>
      </div>

      <Footer />
    </main>
  );
}
