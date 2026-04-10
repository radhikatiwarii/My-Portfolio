function Background() {
  return (
    <>
      {/* Animated color blobs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none flex justify-center items-center filter blur-[100px] opacity-50">
        <div className="bg-yellow-500 w-[350px] h-[250px] rounded-full absolute"></div>
        <div className="bg-orange-500 w-[360px] h-[260px] rounded-full absolute"></div>
        <div className="bg-green-500 w-[370px] h-[270px] rounded-full absolute"></div>
        <div className="bg-purple-500 w-[380px] h-[280px] rounded-full absolute"></div>
        <div className="bg-blue-500 w-[390px] h-[290px] rounded-full absolute"></div>
        <div className="bg-pink-500 w-[400px] h-[300px] rounded-full absolute"></div>
      </div>

      {/* Corner blobs + grid */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 md:w-96 md:h-96 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20 hidden sm:block"></div>
          <div className="absolute -bottom-8 left-[-40%] md:left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20"></div>
          <div className="absolute -bottom-10 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 md:opacity-10 hidden sm:block"></div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
    </>
  );
}

export default Background;
