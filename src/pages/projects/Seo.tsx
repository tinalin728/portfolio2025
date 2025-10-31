// src/components/Seo.tsx
import { Helmet } from "react-helmet";

type SeoType = "website" | "article" | "profile";

type Props = {
  title?: string;
  description?: string;
  url?: string; // absolute URL
  image?: string; // absolute URL
  imageWidth?: string; // "1200"
  imageHeight?: string; // "630"
  type?: SeoType;
  siteName?: string;
  twitterCard?: "summary" | "summary_large_image";
  twitterSite?: string; // "@handle"
  twitterCreator?: string; // "@handle"
  noindex?: boolean;
  jsonLd?: Record<string, unknown>;
  titleTemplate?: string; // e.g. "%s | Tina Lin"
};

export function Seo({
  title = "Tina Lin",
  description = "Portfolio, UX, UI, and web development work.",
  url,
  image,
  imageWidth = "1200",
  imageHeight = "630",
  type = "website",
  siteName = "Tina Lin",
  twitterCard = "summary_large_image",
  twitterSite,
  twitterCreator,
  noindex = false,
  jsonLd,
  titleTemplate = "%s",
}: Props) {
  return (
    <Helmet defaultTitle="Tina Lin" titleTemplate={titleTemplate}>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      {url && <link rel="canonical" href={url} />}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
      {image && <meta property="og:image:width" content={imageWidth} />}
      {image && <meta property="og:image:height" content={imageHeight} />}

      <meta name="twitter:card" content={twitterCard} />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
      {twitterSite && <meta name="twitter:site" content={twitterSite} />}
      {twitterCreator && (
        <meta name="twitter:creator" content={twitterCreator} />
      )}

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
