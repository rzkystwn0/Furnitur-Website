import Image from "next/image";

export default function () {
  return (
    <div className="border-b">
      <div className="flex container mx-auto items-center justify-between">
        <Image src="/logo.svg" height={100} width={100} />
        <div className="hidden md:block">
          <ul className="flex inter text-base font-medium">
            <li className="mx-8 cursor-pointer">Product</li>
            <li className="mx-8 cursor-pointer">Services</li>
            <li className="mx-8 cursor-pointer">Article</li>
            <li className="mx-8 cursor-pointer">About Us</li>
          </ul>
        </div>
        <div className="flex">
          <img className="sm:mx-6 mx-2 w-[30px] cursor-pointer" src="/bag.svg" />
          <img className="sm:mx-6 mx-2 w-[30px] cursor-pointer" src="/user.svg" />
        </div>
      </div>
    </div>
  );
}
