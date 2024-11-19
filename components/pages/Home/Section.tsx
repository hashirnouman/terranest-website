import Image from "next/image";

const Section = () => {
  return (
    <section className="text-white">
     
      <Image
        src="/images/dining.jpeg"
        width={1100}
        height={435}
        alt="bg"
        className=""
      />
    </section>
  );
};

export default Section;
