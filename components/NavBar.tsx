import Link from "next/link";

const NavBar = () => {
    return (
        <>
            <div className="sticky z-50 top-0 inset-x-0 h-16 items-center border-b border-gray-200 bg-white shadow-sm">
                <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20 ">
                    <div className="flex h-16 items-center gap-8 justify-center font-semibold uppercase">
                        <div className="border-b-[3px] border-primary">
                            <Link href="#">Home</Link>
                        </div>
                        <div>
                            <Link href="#">About</Link>
                        </div>
                        <div>
                            <Link href="#">Services</Link>
                        </div>
                        <div>
                            <Link href="#">Resume</Link>
                        </div>
                        <div>
                            <Link href="#">FAQ</Link>
                        </div>
                        <div>
                            <Link href="#">Client</Link>
                        </div>
                        <div>
                            <Link href="#">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;
