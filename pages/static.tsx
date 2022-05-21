interface Props {
  text: string;
}

const Static = ({ text }: Props) => {
  return (
    <>
      <h1>You're running React on the Edge!</h1>
      <p>{`text: ${text}`}</p>
    </>
  );
}

export default Static;

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