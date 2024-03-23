export default function Home() {
    return (
        <>
            <div className="h-screen bg-[#f5df4e] flex flex-col items-center justify-center">
                <div className="bg-white rounded-full p-2 mb-4 shadow-sm ">
                    <img
                        height={163}
                        width={162}
                        className="block rounded-full"
                        src="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/avatar-dep-105.jpg"
                        alt=""
                    />
                </div>
                <h2 className="uppercase font-semibold	text-4xl mb-10">
                    HELLO! I'M Gia - GRAPHIC DESIGNER, ILLUSTRATOR & ART
                    DIRECTOR.
                </h2>
                <p className="text-2xl mb-10">from in TPHCM, VietNam.</p>
                <button className="rounded-none bg-[#212529] text-white py-4 px-10 font-medium outline-none">
                    About Me
                </button>
            </div>
        </>
    );
}
