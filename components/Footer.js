import Image from "next/image";

export default function Footer() {
  return (
    <div className="container sm:flex px-4">
      <div className="sm:w-6/12">
        <img src="/logo.svg" className="w-28 mb-2" />
        <p className="sm:text-xl pl-2 text-black/60 inter sm:w-8/12">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      </div>
      <div className="sm:w-6/12 flex justify-center my-8">
        
          <ul className="inter mx-auto">
            <li className="font-bold">Product</li>
            <li className="text-black/60">New Arrivals</li>
            <li className="text-black/60">Best Selling</li>
            <li className="text-black/60">Home Decor</li>
            <li className="text-black/60">Kitchen Set</li>
          </ul>
        

        
          <ul className="inter mx-auto">
            <li className="font-bold">Services</li>
            <li className="text-black/60">Catalog</li>
            <li className="text-black/60">Blog</li>
            <li className="text-black/60">FaQ</li>
            <li className="text-black/60">Pricing</li>
          </ul>
        

        
          <ul className="inter mx-auto">
            <li className="font-bold">Follow Us</li>
            <li className="text-black/60">Facebook</li>
            <li className="text-black/60">Instagram</li>
            <li className="text-black/60">Twitter</li>
          </ul>
        
      </div>
    </div>
  );
}
