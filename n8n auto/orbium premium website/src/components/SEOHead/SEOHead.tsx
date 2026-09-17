import React, { useEffect } from 'react';

export interface SEOHeadProps {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description = 'ORBIUM - Premium digital experiences.',
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
}) => {
  useEffect(() => {
    // Save original tags to restore on unmount if needed, though typically React Helmet handles this better
    // Here we'll do simple DOM manipulation
    document.title = `${title} | ORBIUM`;

    const setMetaTag = (attr: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('name', 'description', description);
    
    // Open Graph
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', ogImage);
    if (canonical) {
      setMetaTag('property', 'og:url', canonical);
    }

    // Twitter
    setMetaTag('name', 'twitter:card', twitterCard);
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);

    // Canonical link
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    return () => {
      // Optional: clean up specific tags if we want to reset them
    };
  }, [title, description, canonical, ogImage, ogType, twitterCard]);

  return null; // This component doesn't render any visible UI
};
