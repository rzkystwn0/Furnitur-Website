import Image from "next/image";

export default function Benefits() {
  return (
    <div className="container sm:py-0 mx-auto px-2 my-24 ">
      <div className="sm:flex">
        <div className="sm:w-6/12 sm:mb-0 mb-4">
          <p className="text-[#FFB23F] text-md inter">Benefits</p>
          <p className="inter text-4xl sm:w-6/12 font-bold">Benefits when using our services</p>
        </div>
        <div className="sm:w-6/12 flex sm:flex-row-reverse">
          <p className="text-black/60 inter text-md w-10/12">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only
          </p>
        </div>
      </div>
      <div className="sm:flex justify-between mt-12 sm:mt-24">
        <div className="sm:w-4/12">
          <Image src="/b-1.svg" width={65} height={65} />
          <p className="inter text-2xl font-bold my-2">Many Choices</p>
          <p className="inter text-base text-black/60 w-10/12">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
        <div className="sm:w-4/12">
          <Image src="/b-2.svg" width={65} height={65} />
          <p className="inter text-2xl font-bold my-2">Many Choices</p>
          <p className="inter text-base text-black/60 w-10/12">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
        <div className="sm:w-4/12">
          <Image src="/b-3.svg" width={65} height={65} />
          <p className="inter text-2xl font-bold my-2">Many Choices</p>
          <p className="inter text-base text-black/60 w-10/12">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
      </div>
    </div>
  );
}
