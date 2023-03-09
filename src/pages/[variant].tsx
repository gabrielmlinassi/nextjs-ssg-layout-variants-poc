import { GetStaticPaths, GetStaticProps } from "next";
import NextImage from "next/image";

import { useVariantsContext } from "@/contexts/VariantsContext";

import img1 from "public/img1.jpeg";
import img2 from "public/img2.jpeg";

export default function Home() {
  const { variant } = useVariantsContext();

  switch (variant) {
    case "a":
      return (
        <div>
          <h1>VARIANT A</h1>
          <NextImage src={img1} alt="" />
        </div>
      );
    case "b":
      return (
        <div>
          <h1>VARIANT B</h1>
          <NextImage src={img2} alt="" />
        </div>
      );
  }
}

type PageProps = {
  variant: "a" | "b";
};

export const getStaticPaths: GetStaticPaths<PageProps> = () => {
  return {
    paths: [{ params: { variant: "a" } }, { params: { variant: "b" } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<any, PageProps> = async ({
  params,
}) => {
  return {
    props: {
      initialVariant: params?.variant,
    },
  };
};
