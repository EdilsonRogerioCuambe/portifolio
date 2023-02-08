import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: "3aqimbwq",
    dataset: 'production',
    useCdn: true,
    apiVersion: '2022-02-01',
    ignoreBrowserTokenWarning: true,
    token: "skKmlzQPueL1bY3wCLN9ZxYtMuTZCZzN2HeN8ZyKqJNMpE5KwpiCpUrNKQdluO61w7jEOGqJ1cNcqMuBjkaXBKqBDwHyorj4eUsLNyF56YRl3Q0HWqSsLZGaSUVZdCss8OKnzP2Moa2N0KxfORevZ8iqlemMNjlMENQ1oapVGSVZWG2WZ51V",
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
    return builder.image(source);
}