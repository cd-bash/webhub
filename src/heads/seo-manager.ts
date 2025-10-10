export interface PageMeta {
  title: string;                // The page's main title (used for <title> and meta tags)
  description: string;          // Short summary of the page (used for meta description)
  keywords?: string[];          // (Optional) Array of keywords for the meta keywords tag
  ogTitle?: string;             // (Optional) Open Graph title (for social sharing); defaults to title if not set
  ogDescription?: string;       // (Optional) Open Graph description; defaults to description if not set
  ogImage?: string;             // (Optional) Open Graph image URL (for social sharing previews)
  ogType?: 'website' | 'article'; // (Optional) Open Graph type, e.g., 'website' or 'article'
  canonicalUrl?: string;        // (Optional) Canonical URL for the page (to avoid duplicate content issues)
  publishedTime?: string;       // (Optional) Publication date (ISO string), used for articles
  modifiedTime?: string;        // (Optional) Last modified date (ISO string), used for articles
  author?: string;              // (Optional) Author name, used for articles
}

export class SEOManager {
  private static instance: SEOManager;
  private baseTitle = 'cd-labs';
  private baseDomain = 'https://charlesdoucet.com';

  private constructor() {}

  static getInstance(): SEOManager {
    if (!SEOManager.instance) {
      SEOManager.instance = new SEOManager();
    }
    return SEOManager.instance;
  }

  updatePageMeta(meta: PageMeta): void {
    // Update title
    document.title = meta.title.includes(this.baseTitle) ? meta.title : `${meta.title} | ${this.baseTitle}`;
    
    // Update or create meta tags
    this.setMetaTag('description', meta.description);
    
    if (meta.keywords && meta.keywords.length > 0) {
      this.setMetaTag('keywords', meta.keywords.join(', '));
    }

    // Open Graph tags
    this.setMetaProperty('og:title', meta.ogTitle || meta.title);
    this.setMetaProperty('og:description', meta.ogDescription || meta.description);
    this.setMetaProperty('og:type', meta.ogType || 'website');
    this.setMetaProperty('og:url', meta.canonicalUrl || window.location.href);
    this.setMetaProperty('og:site_name', this.baseTitle);
    
    if (meta.ogImage) {
      this.setMetaProperty('og:image', this.resolveImageUrl(meta.ogImage));
      this.setMetaProperty('og:image:alt', meta.ogTitle || meta.title);
    }

    // Twitter Card tags
    this.setMetaName('twitter:card', 'summary_large_image');
    this.setMetaName('twitter:title', meta.ogTitle || meta.title);
    this.setMetaName('twitter:description', meta.ogDescription || meta.description);
    
    if (meta.ogImage) {
      this.setMetaName('twitter:image', this.resolveImageUrl(meta.ogImage));
    }

    // Article-specific tags
    if (meta.ogType === 'article') {
      if (meta.publishedTime) {
        this.setMetaProperty('article:published_time', meta.publishedTime);
      }
      if (meta.modifiedTime) {
        this.setMetaProperty('article:modified_time', meta.modifiedTime);
      }
      if (meta.author) {
        this.setMetaProperty('article:author', meta.author);
      }
    }

    // Canonical URL
    this.setCanonicalUrl(meta.canonicalUrl || window.location.href);

    // JSON-LD structured data
    this.updateStructuredData(meta);
  }

  private setMetaTag(name: string, content: string): void {
    let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
    if (!element) {
      element = document.createElement('meta');
      element.name = name;
      document.head.appendChild(element);
    }
    element.content = content;
  }

  private setMetaProperty(property: string, content: string): void {
    let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('property', property);
      document.head.appendChild(element);
    }
    element.content = content;
  }

  private setMetaName(name: string, content: string): void {
    let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
    if (!element) {
      element = document.createElement('meta');
      element.name = name;
      document.head.appendChild(element);
    }
    element.content = content;
  }

  private setCanonicalUrl(url: string): void {
    let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!element) {
      element = document.createElement('link');
      element.rel = 'canonical';
      document.head.appendChild(element);
    }
    element.href = url;
  }

  private resolveImageUrl(imageUrl: string): string {
    if (imageUrl.startsWith('http')) {
      return imageUrl;
    }
    return `${this.baseDomain}${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`;
  }

  private updateStructuredData(meta: PageMeta): void {
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    let structuredData: any;

    if (meta.ogType === 'article') {
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": meta.title,
        "description": meta.description,
        "author": {
          "@type": "Person",
          "name": meta.author || "CD"
        },
        "publisher": {
          "@type": "Organization",
          "name": this.baseTitle,
          "url": this.baseDomain
        },
        "url": meta.canonicalUrl || window.location.href,
        "datePublished": meta.publishedTime,
        "dateModified": meta.modifiedTime || meta.publishedTime
      };

      if (meta.ogImage) {
        structuredData.image = this.resolveImageUrl(meta.ogImage);
      }
    } else {
      structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": meta.title,
        "description": meta.description,
        "url": meta.canonicalUrl || window.location.href,
        "publisher": {
          "@type": "Organization",
          "name": this.baseTitle,
          "url": this.baseDomain
        }
      };
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }
}

// Export singleton instance
export const seoManager = SEOManager.getInstance();