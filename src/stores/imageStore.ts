// imageStore.ts
import { writable } from 'svelte/store';

interface Image {
	url: string;
}

export const images = writable<Image[]>([]);
export const galleryImages = writable<Image[]>([]);

export function addImage(image: Image) {
	images.update((currentImages) => [...currentImages, image]);
}

export function removeImage(image: Image) {
	images.update((currentImages) => currentImages.filter((img) => img.url !== image.url));
}

export function saveImageToGallery(image: Image) {
	galleryImages.update((currentGalleryImages) => [...currentGalleryImages, image]);
}
