import {useFirstPrismicDocument} from "@prismicio/react";

const Index = () => {
    const [document] = useFirstPrismicDocument();
    console.log(document);

    return (
        <>
            <h1>You're running React on the Edge!</h1>
            <h1>{document?.data?.title} - prismic</h1>
        </>
    );
}

export default Index;