import { SiteImage } from "@/components/SiteImage";

export default async function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Raju's Story Section */}
      <section className="bg-[var(--color-surface)] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-[var(--color-primary)]">
            Raju's Story
          </h1>
          <div className="prose prose-lg max-w-none text-[var(--color-text)]">
            <p className="text-lg leading-relaxed mb-4">
            OneProsper’s Founder and CEO, Raju Agarwal, was raised in Canada, but his family has deep roots in India. During his many visits to the country, both as a child and an adult, he has gained a deep understanding of what life in India is like. 
            While Raju was studying at Boston University, he visited Jaipur in Rajasthan, India. There were many children on the street, and one girl stood out: she was school-aged and holding a baby. When Raju asked the girl why she wasn’t in school, she said she would love to go to school, but couldn’t because she had to look after her little brother while her mother worked.

Upon reflecting on this encounter, Raju realized that these girls, who are growing up in extreme poverty and limited by deeply-ingrained gender roles, have the same aspirations as girls in Canada and the United States — but not the same opportunities. Their barriers to education are more complex than simply whether or not their families can afford tuition.
            </p>
            <p className="text-lg leading-relaxed mb-4">
            After graduating, Raju worked at PricewaterhouseCoopers and then Bank of America, but he felt unfulfilled. He read Leaving Microsoft to Change the World by John Wood, which inspired him to take action. Raju founded OneProsper so that he could use his business acumen and resources to help women and girls in need.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-[var(--color-surface-muted)] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-[var(--color-primary)]">
            Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {/* Team Member 1 */}
            <div className="bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-2xl p-6 text-center hover:bg-[var(--color-accent-soft)] transition duration-300">
              <div className="w-32 h-32 rounded-full bg-[var(--color-accent-soft)] mx-auto relative overflow-hidden">
                <SiteImage
                  assetId="team_raju_agarwal"
                  alt="Raju Agarwal"
                  fill
                  objectFit="cover"
                />
              </div>
              <h3 className="font-semibold mt-4 text-[var(--color-text)]">Raju Agarwal</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Founder & CEO</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-2xl p-6 text-center hover:bg-[var(--color-accent-soft)] transition duration-300">
              <div className="w-32 h-32 rounded-full bg-[var(--color-accent-soft)] mx-auto relative overflow-hidden">
                <SiteImage
                  assetId="team_emily_neapolitan"
                  alt="Emily Neapolitan"
                  fill
                  objectFit="cover"
                />
              </div>
              <h3 className="font-semibold mt-4 text-[var(--color-text)]">Emily Neapolitan</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Director of English Learning Buddy Program</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-2xl p-6 text-center hover:bg-[var(--color-accent-soft)] transition duration-300">
              <div className="w-32 h-32 rounded-full bg-[var(--color-accent-soft)] mx-auto relative overflow-hidden">
                <SiteImage
                  assetId="team_lily_von_behren"
                  alt="Lily von Behren"
                  fill
                  objectFit="cover"
                />
              </div>
              <h3 className="font-semibold mt-4 text-[var(--color-text)]">Lily von Behren</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Program Manager - English Learning Buddy Program</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content & Community Section */}
      <section className="bg-[var(--color-surface)] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-[var(--color-primary)]">
            Content & Community
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--color-text)]">
            <p className="text-lg leading-relaxed mb-4">
              Our community is built on the foundation of shared learning, mutual respect, and a commitment 
              to empowering women and girls through education. We bring together Buddies from high schools 
              across the U.S. and Canada with learners in India, creating meaningful connections that 
              transcend borders.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Through our structured programs, we provide comprehensive learning materials, lesson plans, 
              and ongoing support to ensure both mentors and learners succeed. Our community celebrates 
              diversity, fosters cultural understanding, and creates lasting friendships that continue 
              beyond the program.
            </p>
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="bg-[var(--color-surface-muted)] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-[var(--color-primary)]">
            Board of Directors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {/* Director 1 */}
            <div className="bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-2xl p-6 text-center hover:bg-[var(--color-accent-soft)] transition duration-300">
              <div className="w-32 h-32 rounded-full bg-[var(--color-accent-soft)] mx-auto relative overflow-hidden">
                <SiteImage
                  assetId="board_raju_agarwal"
                  alt="Raju Agarwal"
                  fill
                  objectFit="cover"
                />
              </div>
              <h3 className="font-semibold mt-4 text-[var(--color-text)]">Raju Agarwal</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Founder & CEO, Director</p>
            </div>

            {/* Director 2 */}
            <div className="bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-2xl p-6 text-center hover:bg-[var(--color-accent-soft)] transition duration-300">
              <div className="w-32 h-32 rounded-full bg-[var(--color-accent-soft)] mx-auto relative overflow-hidden">
                <SiteImage
                  assetId="board_ishan_gupta"
                  alt="Ishan Gupta"
                  fill
                  objectFit="cover"
                />
              </div>
              <h3 className="font-semibold mt-4 text-[var(--color-text)]">Ishan Gupta</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Director</p>
            </div>

            {/* Director 3 */}
            <div className="bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-2xl p-6 text-center hover:bg-[var(--color-accent-soft)] transition duration-300">
              <div className="w-32 h-32 rounded-full bg-[var(--color-accent-soft)] mx-auto relative overflow-hidden">
                <SiteImage
                  assetId="board_ved_sinha"
                  alt="Ved Sinha"
                  fill
                  objectFit="cover"
                />
              </div>
              <h3 className="font-semibold mt-4 text-[var(--color-text)]">Ved Sinha</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="bg-[var(--color-surface)] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-[var(--color-primary)]">
            Advisory Board
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {/* Advisor 1 */}
            <div className="bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-2xl p-6 text-center hover:bg-[var(--color-accent-soft)] transition duration-300">
              <div className="w-32 h-32 rounded-full bg-[var(--color-accent-soft)] mx-auto relative overflow-hidden">
                <SiteImage
                  assetId="advisor_stephen_pratt"
                  alt="Stephen Pratt"
                  fill
                  objectFit="cover"
                />
              </div>
              <h3 className="font-semibold mt-4 text-[var(--color-text)]">Stephen Pratt</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Advisor</p>
            </div>

            {/* Advisor 2 */}
            <div className="bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-2xl p-6 text-center hover:bg-[var(--color-accent-soft)] transition duration-300">
              <div className="w-32 h-32 rounded-full bg-[var(--color-accent-soft)] mx-auto relative overflow-hidden">
                <SiteImage
                  assetId="advisor_pawan_deshpande"
                  alt="Pawan Deshpande"
                  fill
                  objectFit="cover"
                />
              </div>
              <h3 className="font-semibold mt-4 text-[var(--color-text)]">Pawan Deshpande</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Advisor</p>
            </div>

            {/* Advisor 3 */}
            <div className="bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-2xl p-6 text-center hover:bg-[var(--color-accent-soft)] transition duration-300">
              <div className="w-32 h-32 rounded-full bg-[var(--color-accent-soft)] mx-auto relative overflow-hidden">
                <SiteImage
                  assetId="advisor_anushka_joshi"
                  alt="Anushka Joshi"
                  fill
                  objectFit="cover"
                />
              </div>
              <h3 className="font-semibold mt-4 text-[var(--color-text)]">Anushka Joshi</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Advisor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Thanks Section */}
      <section className="bg-[var(--color-surface-muted)] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-[var(--color-primary)]">
            Special Thanks
          </h2>
          <div className="prose prose-lg max-w-none text-center text-[var(--color-text)]">
            <p className="text-lg leading-relaxed mb-4">
              We are grateful for our partners and volunteers who support our programs in India, 
              including{" "}
              <a 
                href="https://gravis.org.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
              >
                GRAVIS
              </a>
              {" "}and{" "}
              <a 
                href="https://photographerswithoutborders.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
              >
                Photographers Without Borders
              </a>
              .
            </p>
            <p className="text-lg leading-relaxed">
              Their dedication and support make our mission possible, and we are honored to work 
              alongside them in empowering women and girls through education and opportunity.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
