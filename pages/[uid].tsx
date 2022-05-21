interface Props {
  text: string;
}

const ServerSide = ({ text }: Props) => {

  return (
    <>
      <h1>You're running React on the Edge, dynamic page /[uid]!</h1>
      <p>{text}</p>
    </>
  );
}

export default ServerSide;

export async function getEdgeProps({ params }) {
  const minutes = new Date().getMinutes();

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolve Promise")
    }, 3000);
  })

  const text = "getEdgeProps, text " + minutes + ", params " + params.uid;

  return {
    props: {
      text,
    } as Props,
  };
}