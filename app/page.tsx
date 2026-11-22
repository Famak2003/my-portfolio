import Hero from "./components/Hero";
import Specialties from "./components/home/Specialties";
import SelectedWork from "./components/work/SelectedWork";
import Columns from "./components/home/Columns";

export default function Page() {
    return (
        <main className=" flex h-fit min-h-[100dvh] w-full flex-col items-center ">
            <Hero />
            <Specialties />
            <SelectedWork />
            <Columns />
        </main>
    );
}
