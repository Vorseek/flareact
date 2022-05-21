import { useFirstPrismicDocument } from "@prismicio/react";

interface Props {
  text: string;
}

const Index = ({ text }: Props) => {
  const [document] = useFirstPrismicDocument();
  console.log(document);

  return (
    <>
      <h1>You're running React on the Edge!</h1>
      <h1>{document?.data?.title} - prismic</h1>
      <p>{text}</p>
    </>
  );
}

export default Index;

export async function getEdgeProps() {
  const minutes = new Date().getMinutes();

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolve Promise")
    }, 3000);
  })

  const text = "getEdgeProps, text " + minutes;

  return {
    props: {
      text,
    } as Props,
  };
}