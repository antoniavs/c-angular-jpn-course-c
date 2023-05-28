import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
  private imageUrl: string | null = null;

  setImageUrl(url: string) {
    this.imageUrl = url;
  }

  getImageUrl(): string | null {
    return this.imageUrl;
  }
}

