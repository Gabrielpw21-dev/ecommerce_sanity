import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import * as Process from "process";

export const client = sanityClient({
    projectId: '7433fg8z',
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);