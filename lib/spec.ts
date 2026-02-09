export type NavItemKind = "logo" | "link" | "ctaSecondary" | "ctaPrimary";

export type StickyNav = {
  type: "StickyNav";
  sticky: boolean;
  items: Array<{ label: string; href: string; kind: NavItemKind }>;
};

export type HeroTwoColumn = {
  type: "HeroTwoColumn";
  lhs: {
    h1: string;
    subhead: string;
    bridgeLine?: string;
    primaryCTA: { label: string; action: "openJoinFlow" | string };
    secondaryCTA?: { label: string; action: "goToDonate" | string };
  };
  rhs: { media: { kind: "imageOrVideo" | string; assetId: string } };
};

export type AudienceToggle = {
  type: "AudienceToggle";
  label: string;
  tabs: string[];
  defaultTab: string;
  behavior: string;
};

export type Cards3WithImages = {
  id: string;
  type: "Cards3WithImages";
  title: string;
  intro?: string;
  cards: Array<{
    imageAssetId: string;
    headline: string;
    body: string;
  }>;
};

export type Stats3Boxes = {
  id: string;
  type: "Stats3Boxes";
  title: string;
  stats: Array<{ value: string; label: string }>;
};

export type LogoRow6 = {
  id: string;
  type: "LogoRow6";
  title: string;
  logos: Array<{ assetId: string; alt: string }>;
};

export type TestimonialsCarousel = {
  id: string;
  type: "TestimonialsCarousel";
  title: string;
  items: Array<{ mediaAssetId: string; quote: string; attribution: string }>;
};

export type TestimonialsCarouselAdminOnly = {
  id: string;
  type: "TestimonialsCarousel_AdminOnly";
  title: string;
  items: Array<{ mediaAssetId: string; quote: string; attribution: string }>;
};

export type HowItWorks6 = {
  id: string;
  type: "HowItWorks6";
  title: string;
  steps: Array<{ iconAssetId: string; title: string; body: string }>;
};

export type JoinUsEmailCapture = {
  type: "JoinUsEmailCapture";
  title: string;
  body: string;
  emailFieldPlaceholder: string;
  buttonLabel: string;
  onSubmit: {
    type: "OpenSelectorModalThenRedirect";
    modalTitle: string;
    options: Array<{ label: string; redirectUrl: string }>;
  };
};

export type DonateSection = {
  type: "DonateSection";
  title: string;
  body: string;
  ctaLabel: string;
  donately: { mode: "embed_or_redirect" | string; url: string };
};

export type Footer = {
  type: "Footer";
  relationshipLine: string;
  links: Array<{ label: string; href: string }>;
  social: Array<{ label: string; href: string }>;
};

export type ContentPage = {
  type: "ContentPage";
  title: string;
  sections: Array<{ id: string; title: string; body: string }>;
};

export type DonatePage = {
  type: "DonatePage";
  title: string;
  body: string;
  donately: { mode: "embed_or_redirect" | string; url: string };
};

export type SignupPage = {
  type: "SignupPage";
  title: string;
  body: string;
  joinFlowRef: string;
};

export type LegalPage = {
  type: "LegalPage";
  title: string;
  body: string;
};

export type ReuseSection = {
  id: string;
  type:
    | "TestimonialsCarousel"
    | "TestimonialsCarousel_AdminOnly"
    | "Cards3WithImages"
    | "Stats3Boxes"
    | "LogoRow6"
    | "HowItWorks6";
  title: string;
  reuseFromSegment: "Students" | "Schools";
  reuseSectionId: string;
};

export type SegmentSection =
  | Cards3WithImages
  | Stats3Boxes
  | LogoRow6
  | TestimonialsCarousel
  | TestimonialsCarouselAdminOnly
  | HowItWorks6
  | ReuseSection;

export type ResolvedSegmentSection =
  | Cards3WithImages
  | Stats3Boxes
  | LogoRow6
  | TestimonialsCarousel
  | TestimonialsCarouselAdminOnly
  | HowItWorks6;

export type SiteSpec = {
  meta: {
    projectName: string;
    domain: string;
    relationshipNote: string;
    primaryGoals: string[];
  };
  routing: {
    routes: Array<{ path: string; title: string }>;
  };
  globals: {
    nav: StickyNav;
    donateCTA: { label: string; href: string; placements: string[] };
    assets: { placeholders: boolean; notes: string };
  };
  content: {
    home: {
      toggle: AudienceToggle;
      hero: HeroTwoColumn;
      segments: Record<"Students" | "Schools", { sections: SegmentSection[] }>;
      joinUs: JoinUsEmailCapture;
      donateSection: DonateSection;
      footer: Footer;
    };
    about: ContentPage;
    donate: DonatePage;
    signup: SignupPage;
    privacyPolicy: LegalPage;
    termsOfService: LegalPage;
  };
};

export function resolveSegmentSections(
  spec: SiteSpec,
  segmentKey: "Students" | "Schools"
): ResolvedSegmentSection[] {
  const segment = spec.content.home.segments[segmentKey];
  return segment.sections.map((section) => {
    if ("reuseFromSegment" in section) {
      const source = spec.content.home.segments[section.reuseFromSegment].sections.find(
        (candidate) =>
          "id" in candidate && candidate.id === section.reuseSectionId
      );
      if (source && !("reuseFromSegment" in source)) {
        return {
          ...source,
          id: section.id,
          title: section.title ?? source.title
        };
      }
    }
    return section as ResolvedSegmentSection;
  });
}
