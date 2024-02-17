import Link from "next/link";
import Button from "../components/Button";
import BusinessDisplay from "../components/BusinessDisplay";
import LinkButton from "../components/LinkButton";
import Image from 'next/image'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-16">
            <Image
                className="absolute inset-1"
                src={"/favicon.ico"}
                alt={"PleaseFixMe Logo"}
                width={100}
                height={100}
            />
            <div className="min-w-full pl-10">
                <LinkButton href={"/"}>
                    Home
                </LinkButton>
                <h1 className="text-3xl py-5 text-center">
                    Manage a Business
                </h1>
                <div className="min-w-full flex flex-col items-center">
                    <div className="w-96">
                        <BusinessDisplay />
                    </div>
                </div>

            </div>
        </main>
    );
}
