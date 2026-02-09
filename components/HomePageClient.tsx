"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type {
  AudienceToggle as AudienceToggleSpec,
  DonateSection as DonateSectionSpec,
  HeroTwoColumn as HeroTwoColumnSpec,
  JoinUsEmailCapture as JoinUsEmailCaptureSpec,
  ResolvedSegmentSection,
  SiteSpec
} from "@/lib/spec";
import { resolveSegmentSections } from "@/lib/spec";
import { AudienceToggle } from "@/components/AudienceToggle";
import { Cards3WithImages } from "@/components/Cards3WithImages";
import { DonateSection } from "@/components/DonateSection";
import { HeroTwoColumn } from "@/components/HeroTwoColumn";
import { HowItWorks6 } from "@/components/HowItWorks6";
import { JoinUsEmailCapture } from "@/components/JoinUsEmailCapture";
import { LogoRow6 } from "@/components/LogoRow6";
import { Stats3Boxes } from "@/components/Stats3Boxes";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { TestimonialsCarousel_AdminOnly } from "@/components/TestimonialsCarousel_AdminOnly";

type HomePageClientProps = {
  hero: HeroTwoColumnSpec;
  toggle: AudienceToggleSpec;
  segments: SiteSpec["content"]["home"]["segments"];
  joinUs: JoinUsEmailCaptureSpec;
  donateSection: DonateSectionSpec;
  donateHref: string;
};

function renderSection(section: ResolvedSegmentSection) {
  switch (section.type) {
    case "Cards3WithImages":
      return <Cards3WithImages key={section.id} data={section} />;
    case "Stats3Boxes":
      return <Stats3Boxes key={section.id} data={section} />;
    case "LogoRow6":
      return <LogoRow6 key={section.id} data={section} />;
    case "TestimonialsCarousel":
      return <TestimonialsCarousel key={section.id} data={section} />;
    case "TestimonialsCarousel_AdminOnly":
      return <TestimonialsCarousel_AdminOnly key={section.id} data={section} />;
    case "HowItWorks6":
      return <HowItWorks6 key={section.id} data={section} />;
    default:
      return null;
  }
}

function getInitialTab(toggle: AudienceToggleSpec) {
  return toggle.tabs.includes(toggle.defaultTab)
    ? toggle.defaultTab
    : toggle.tabs[0] ?? "Students";
}

export function HomePageClient({
  hero,
  toggle,
  segments,
  joinUs,
  donateSection,
  donateHref
}: HomePageClientProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(() => getInitialTab(toggle));

  const activeSections = useMemo(() => {
    if (!segments[activeTab as keyof typeof segments]) {
      return [] as ResolvedSegmentSection[];
    }
    return resolveSegmentSections(
      { content: { home: { segments } } } as SiteSpec,
      activeTab as "Students" | "Schools"
    );
  }, [activeTab, segments]);

  const getSectionBackground = (index: number) =>
    index % 2 === 0 ? "bg-teal-50" : "bg-white";

  const [firstSection, ...restSections] = activeSections;
  let sectionIndex = 0;
  const contentBlocks: JSX.Element[] = [];
  const pushBlock = (key: string, content: JSX.Element) => {
    contentBlocks.push(
      <div key={key} className={getSectionBackground(sectionIndex)}>
        {content}
      </div>
    );
    sectionIndex += 1;
  };

  pushBlock(
    "toggle-first",
    <>
      <AudienceToggle
        data={toggle}
        activeTab={activeTab}
        onChange={setActiveTab}
      />
      {firstSection ? renderSection(firstSection) : null}
    </>
  );

  restSections.forEach((section) => {
    pushBlock(section.id, renderSection(section) as JSX.Element);
  });

  pushBlock("join-us", <JoinUsEmailCapture data={joinUs} sectionId="join-us" />);
  pushBlock("donate", <DonateSection data={donateSection} />);

  return (
    <main>
      <HeroTwoColumn
        data={hero}
        onPrimaryAction={() => {
          const target = document.getElementById("join-us");
          target?.scrollIntoView({ behavior: "smooth" });
        }}
        onSecondaryAction={() => router.push(donateHref)}
      />
      {contentBlocks}
    </main>
  );
}
