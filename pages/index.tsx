import { useFirstPrismicDocument } from "@prismicio/react";
// import axios from "axios";
import { client } from "../prismic";

interface Props {
  text: string;
  content: any;
}

const Index = ({ text, content }: Props) => {
  const [document] = useFirstPrismicDocument();

  return (
    <>
      <h1>You're running React on the Edge!</h1>
      <h1>{document?.data?.title} - prismic (client request)</h1>
      <h1>{content?.data?.description} - prismic (getEdgeProps request)</h1>
      <p>{text}</p>
      <img src="/image/pexels.jpg" alt="pexels"/>
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

  const text = "getEdgeProps, minutes " + minutes;

  // TODO: not working axios in getEdgeProps
  // const todos = await axios.get(
  //   'https://jsonplaceholder.typicode.com/todos/1'
  // );

  const content = await client.getByUID("main_page", "main_page");

  return {
    props: {
      text,
      content
    } as Props,
  };
}