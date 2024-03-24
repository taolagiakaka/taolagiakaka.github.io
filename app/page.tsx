export default function Home() {
    return (
        <>
            <div className="h-screen bg-primary flex flex-col items-center justify-center">
                <div className="bg-white rounded-full p-2 shadow-sm mb-10">
                    <img
                        height={163}
                        width={162}
                        className="block rounded-full"
                        src="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/avatar-dep-105.jpg"
                        alt="Profile Picture"
                    />
                </div>
                <h2 className="uppercase font-semibold text-4xl mb-10 text-center">
                    Hello! I'm Nguyen Truong Gia -<br /> .NET Developer
                </h2>
                <p className="text-2xl mb-10">
                    Based in Ho Chi Minh City, Vietnam.
                </p>
                <button className="rounded-none bg-gray-800 text-white py-4 px-10 font-medium outline-none">
                    About Me
                </button>
            </div>
        </>
    );
}
