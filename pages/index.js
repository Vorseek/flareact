import { useFirstPrismicDocument } from "@prismicio/react";

export default function Index() {
  const [document] = useFirstPrismicDocument();

  return <h1>You're running React on the Edge!</h1>;
}
