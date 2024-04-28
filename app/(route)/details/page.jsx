import React from "react";

const page = () => {
  return (
    <div className="mt-10">
      <div>
        <div className="relative flex items-center justify-center">
          <video
            className="w-1/2 rounded-lg"
            muted
            loop
            autoPlay
            src="https://media.istockphoto.com/id/1736669733/video/handsome-chinese-business-man-vlogging-from-selfie-pov.mp4?s=mp4-640x640-is&k=20&c=CfuegQHvjUDOdoSsJJXOOm-EB9DJQILsNHUQzVqctXs="
          />
          <video
            muted
            loop
            autoPlay
            className="w-[250px] absolute left-1/2 -translate-x-1/2 bottom-5 rounded-lg"
            src="https://media.istockphoto.com/id/1294633087/video/personal-perspective-of-a-mid-adult-doctor-doing-a-telemedicine-conference-call.mp4?s=mp4-640x640-is&k=20&c=xuwdUm1SesMk9sFxAJhVBcSiK7zQR8Z52MRhV2uKXV4="
          />
        </div>
      </div>

      <div className=" mx-auto max-w-4xl mt-10">
        <div className="text-5xl  font-bold">
          <div>Hacini N.M</div>
          <div className="px-4 py-1 bg-blue-500 text-slate-50 text-base font-normal w-fit rounded-full mt-2">
            Ophtamologue
          </div>
          <div className="p-2 border rounded-md mt-2">
            <div className="text-xl font-light">
              Dr. Hacini is a highly skilled and compassionate eye doctor,
              dedicated to providing exceptional eye care to his patients. With
              a wealth of knowledge and expertise in the field of ophthalmology,
              Dr. Hacini is well-versed in diagnosing and treating a wide range
              of eye conditions and disorders.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
