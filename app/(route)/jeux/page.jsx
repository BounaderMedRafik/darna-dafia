import React from "react";

const page = () => {
  return (
    <>
      <div className="text-3xl mt-10 mb-5 mx-auto max-w-2xl font-bold">
        Les Jeux
      </div>
      <div className="grid gap-4 max-w-2xl mx-auto mt-10">
        <div>
          <img
            className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
            src="https://plus.unsplash.com/premium_photo-1664104028636-c7a40c46f51d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="grid grid-cols-5 gap-4">
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1677671874468-2dfb9d94c948?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer"
              alt="gallery-image"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer"
              alt="gallery-image"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1585504198199-20277593b94f?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer"
              alt="gallery-image"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer"
              alt="gallery-image"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer"
              alt="gallery-image"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 max-w-2xl mt-5 mx-auto">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://plus.unsplash.com/premium_photo-1661715945939-3d0aaacac68c?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://images.unsplash.com/photo-1564049489314-60d154ff107d?q=80&w=2083&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://images.unsplash.com/photo-1611891487122-207579d67d98?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default page;
