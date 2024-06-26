import Image from "next/image";
import Container from "@/components/ui/container";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

import imag1 from "../images/pexels-1.jpg";

import { dataValue, noticeValue } from "../data/data";

const Services = () => {
  return (
    <>
      <Container>
        <section className="px-2 sm:px-4 md:px-6 lg:px-8 relative">
          <div className="object-center object-cover">
            <Image
              src={imag1}
              alt="img"
              className="object-center object-cover rounded-2xl"
            />
          </div>
          <div className="absolute w-full top-1 pl-1 sm:top-8 sm:pl-4 ">
            <h2 className="text-xs sm:text-2xl lg:text-3xl font-black mb-2 sm:mb-4">
              Welcome to Our Corporate Site
            </h2>
            <p className="text-[8px] leading-3 sm:text-xl w-64 lg:w-full font-medium">
              We provide the best services for your business needs.
            </p>
          </div>
          <div className="absolute w-full bottom-4 sm:bottom-1/3 text-center">
            <Button className="text-xs font-bold lg:text-lg shadow shadow-sky-400 bg-sky-600 hover:bg-sky-700">
              Learn More
            </Button>
          </div>
        </section>
        <section className="my-16 px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold my-12">Our Services</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-4 ">
            {dataValue.map((item, index) => (
              <div
                key={item.id}
                className={`cursor-pointer flex items-center md:flex-row p-4 rounded  border-b-4 border-sky-600 shadow-md shadow-sky-400 transition duration-300 hover:bg-sky-100 ${
                  index % 2 === 0
                    ? "flex-row-reverse border-r-4 md:border-r-0"
                    : "border-l-4 md:border-l-0"
                }`}
              >
                <div className="w-52">
                  <h4 className="text-1xl font-bold mb-2 lg:text-2xl">
                    {item.title}
                  </h4>
                  <Image
                    src={item.img}
                    alt={item.title}
                    className="aspect-square rounded-xl object-cover"
                    width={1000}
                    height={1000}
                  />
                </div>
                <p className="w-full text-center font-bold">{item.summary}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="my-16 px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold my-12">お知らせ</h3>
          <ScrollArea className="h-[350px] w-full rounded-md border p-4 border-b-4 border-sky-600 shadow-md shadow-sky-400">
            <div className="grid grid-cols-1 gap-y-4">
              {noticeValue.map((item) => (
                <div
                  key={item.id}
                  className="cursor-pointer rounded-md border p-4 gap-5 shadow-md transition duration-300 hover:bg-sky-100 "
                >
                  <p className="font-semibold">{item.title}</p>
                  <p className="font-medium text-gray-500">{item.summary}</p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </section>
      </Container>
    </>
  );
};

export default Services;
