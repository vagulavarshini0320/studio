import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

// Filter out the logo so it's not included in the placeholder images
export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages.filter(p => p.id !== 'logo');
