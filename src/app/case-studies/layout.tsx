import Hero from "./_components/hero"

export const metadata = {
    title: "Xedrum",
    description: "Описание сайта",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div
                className="
                    bg-[url(/images/mobile-bg.png)] 
                    md:bg-[url(/images/background.png)] 
                    bg-top bg-no-repeat bg-cover 
                    rounded-b-2xl 
                    flex items-center
                     min-h-[580px]
                    "
            >
                <Hero />
            </div>
            <main className="flex-1">{children}</main>
        </>
    )
}
