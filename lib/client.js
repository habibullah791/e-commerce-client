import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: 'hwv5ou5o',
    dataset: 'production',
    apiVersion: '2022-10-18',
    useCdn: true,
    tocken: process.env.NEXT_PUBLIC_SANITY_TOCKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);