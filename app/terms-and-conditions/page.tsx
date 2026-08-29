import type { Metadata } from "next";
import { LegalLayout } from "../components/legal/LegalLayout";
import { LegalSection } from "../components/legal/LegalSection";
import type { TocItem } from "@/types/legal";

export const metadata: Metadata = {
  title: "Terms & Conditions | BlogSpace",
  description:
    "Review the terms and conditions governing the use of BlogSpace.",
  openGraph: {
    title: "Terms & Conditions | BlogSpace",
    description:
      "Review the terms and conditions governing the use of BlogSpace.",
    type: "website",
  },
};

const tocItems: TocItem[] = [
  { id: "acceptance-of-terms", title: "1. Acceptance of Terms" },
  { id: "about-BlogSpace", title: "2. About BlogSpace" },
  { id: "eligibility", title: "3. Eligibility" },
  { id: "public-blog-access", title: "4. Public Blog Access" },
  { id: "user-accounts", title: "5. User Accounts" },
  { id: "user-responsibilities", title: "6. User Responsibilities" },
  { id: "user-generated-content", title: "7. User-Generated Content" },
  { id: "blog-publishing", title: "8. Blog Publishing" },
  {
    id: "ai-generated-content",
    title: "9. AI-Generated and AI-Assisted Content",
  },
  { id: "acceptable-use", title: "10. Acceptable Use" },
  { id: "intellectual-property", title: "11. Intellectual Property" },
  { id: "third-party-services", title: "12. Third-Party Services" },
  { id: "availability-of-service", title: "13. Availability of the Service" },
  { id: "disclaimers", title: "14. Disclaimers" },
  { id: "limitation-of-liability", title: "15. Limitation of Liability" },
  { id: "account-suspension", title: "16. Account Suspension and Termination" },
  { id: "changes-to-service", title: "17. Changes to the Service" },
  { id: "changes-to-terms", title: "18. Changes to These Terms" },
  { id: "governing-law", title: "19. Governing Law" },
  { id: "contact-information", title: "20. Contact Information" },
];

export default function TermsAndConditionsPage() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      description="These Terms & Conditions define the rules, responsibilities, and operational parameters governing your access to and interaction with the BlogSpace platform."
      lastUpdated="August 27, 2026"
      tocItems={tocItems}
    >
      <LegalSection
        id="acceptance-of-terms"
        number={1}
        title="Acceptance of Terms"
      >
        <p>
          By accessing, browsing or using BlogSpace the Service, you acknowledge
          that you have read, understood, and agree to be bound by these Terms
          &amp; Conditions. If you do not agree to these terms, please
          discontinue use of the platform immediately.
        </p>
      </LegalSection>

      <LegalSection id="about-BlogSpace" number={2} title="About BlogSpace">
        <p>
          BlogSpace is an independent software development showcase and content
          management platform built by an individual creator to demonstrate
          modern web engineering, Next.js architecture, AI-assisted content
          workflows, secure authentication, and cloud infrastructure
          integration.
        </p>
        <p>
          BlogSpace is an independent portfolio project and is not a registered
          corporation, limited liability company, or formal commercial
          enterprise.
        </p>
      </LegalSection>

      <LegalSection id="eligibility" number={3} title="Eligibility">
        <p>
          You must be at least 13 years of age (or the minimum age of digital
          consent required in your jurisdiction) to access and use the Service.
          By accessing BlogSpace, you represent and warrant that you meet this
          age requirement.
        </p>
      </LegalSection>

      <LegalSection
        id="public-blog-access"
        number={4}
        title="Public Blog Access"
      >
        <p>
          You are welcome to freely read any public article on BlogSpace for
          your personal use. You do not need an account, a subscription, or any
          payment to read our public posts. You may not resell or use this
          content for commercial purposes.
        </p>
      </LegalSection>

      <LegalSection id="user-accounts" number={5} title="User Accounts">
        <p>
          Account creation and administrative access on BlogSpace are designated
          for authorized content creators and administrators. If you register an
          account, you agree to provide accurate, current, and complete
          registration information.
        </p>
        <p>
          You are solely responsible for maintaining the confidentiality of your
          account credentials and for all activities that occur under your
          authenticated session.
        </p>
      </LegalSection>

      <LegalSection
        id="user-responsibilities"
        number={6}
        title="User Responsibilities"
      >
        <p>As an authenticated or public user of BlogSpace, you agree:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Not to compromise, disrupt, or probe the security of the application
            infrastructure or database.
          </li>
          <li>
            Not to attempt unauthorized access to administrative routes, other
            user accounts, or private API endpoints.
          </li>
          <li>
            You agree to maintain a strong, secure password and immediately
            notify the administrator of any unauthorized activity or security
            breach on your account.
          </li>
        </ul>
      </LegalSection>

      <LegalSection
        id="user-generated-content"
        number={7}
        title="User-Generated Content"
      >
        <p>
          Registered authors retain ownership of original text, editorial
          compositions, and media submitted to BlogSpace. By publishing content
          through the platform, you grant BlogSpace a non-exclusive, worldwide,
          royalty-free license to store, format, index, and display your
          submitted content on the platform.
        </p>
        <p>
          You represent that you have all necessary rights, permissions, and
          licenses to publish any content you submit.
        </p>
      </LegalSection>

      <LegalSection id="blog-publishing" number={8} title="Blog Publishing">
        <p>
          While we do not review every single post, we reserve the right to
          edit, hide or remove any blog article, draft or image at any time
          especially if it breaks our rules, copies someone else's work or
          causes a security risk.
        </p>
      </LegalSection>

      <LegalSection
        id="ai-generated-content"
        number={9}
        title="AI-Generated and AI-Assisted Content"
      >
        <p>
          BlogSpace includes features powered by large language models (such as
          the Gemini API) to assist authors with drafting, brainstorming,
          summarizing, and editing blog content. Regarding AI-generated outputs:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Inaccuracies and Hallucinations:</strong> AI outputs may
            contain factual inaccuracies, hallucinations, outdated information,
            or logical flaws. BlogSpace makes no representation that
            AI-generated content is accurate, exhaustive, or suitable for any
            critical purpose.
          </li>
          <li>
            <strong>Mandatory Human Review:</strong> Authors and administrators
            are strictly responsible for reviewing, fact-checking, editing, and
            verifying all AI-assisted drafts before publishing them publicly.
          </li>
          <li>
            <strong>No Guarantees of Originality or Safety:</strong> BlogSpace
            does NOT warrant that AI-generated content is entirely original,
            free from unintentional similarities to external works, legally
            compliant or plagiarism-free. Authors assume full responsibility for
            content published under their accounts.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="acceptable-use" number={10} title="Acceptable Use">
        <p>You agree not to use BlogSpace to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Publish or distribute unlawful, defamatory, harassing, abusive,
            fraudulent or harmful material.
          </li>
          <li>
            Upload media containing malware, malicious scripts or exploitative
            code.
          </li>
          <li>
            Execute automated scraping, denial-of-service (DoS) attacks, or
            excessive automated requests that degrade server performance.
          </li>
          <li>Impersonate any individual, creator or entity.</li>
        </ul>
      </LegalSection>

      <LegalSection
        id="intellectual-property"
        number={11}
        title="Intellectual Property"
      >
        <p>
          The BlogSpace application codebase, visual interface design, logos,
          user interface components, and technical architecture are the
          intellectual property of the project creator.
        </p>
        <p>
          Unless explicitly designated under open-source licenses for specific
          source repositories, you may not copy, reverse engineer, resell or
          distribute the proprietary platform software or branding without prior
          written consent.
        </p>
      </LegalSection>

      <LegalSection
        id="third-party-services"
        number={12}
        title="Third-Party Services"
      >
        <p>
          The Service integrates with third-party platforms including MongoDB
          Atlas, Cloudinary, Google OAuth 2.0, the Google Gmail API, and Gemini
          AI endpoints. Your interaction with features relying on these services
          is subject to their respective technical availability, rate limits,
          and terms of service. BlogSpace is not liable for service
          interruptions originating from third-party outages.
        </p>
      </LegalSection>

      <LegalSection
        id="availability-of-service"
        number={13}
        title="Availability of the Service"
      >
        <p>
          Because BlogSpace is an independently operated demonstration and
          portfolio project, the Service is provided on an &quot;AS IS&quot; and
          &quot;AS AVAILABLE&quot; basis. We do not guarantee uninterrupted
          uptime, 24/7 service availability, or perpetual data preservation. The
          platform may undergo maintenance, updates, or temporary downtime
          without prior notice.
        </p>
      </LegalSection>

      <LegalSection id="disclaimers" number={14} title="Disclaimers">
        <p>
          We provide BlogSpace without any formal promises or guarantees. We
          cannot promise that the site will always run without errors, fit your
          specific project needs or that every tutorial, tip or code snippet
          shared here is 100% foolproof. Use the information, content and code
          samples on this platform at your own discretion and risk.
        </p>
      </LegalSection>

      <LegalSection
        id="limitation-of-liability"
        number={15}
        title="Limitation of Liability"
      >
        <p>
          As an independent developer project the creator of BlogSpace is not
          legally responsible for any losses or damages that happen while using
          this site. This includes issues like lost drafts or data and lost
          business profits, site downtime or technical errors on your device.
          You use the platform at your own risk.
        </p>
      </LegalSection>

      <LegalSection
        id="account-suspension"
        number={16}
        title="Account Suspension and Termination"
      >
        <p>
          We reserve the right to suspend or terminate any user account,
          restrict access to administrative functions or remove published
          content immediately and without prior notice if we determine in our
          sole discretion that a user has violated these Terms engaged in
          abusive behavior or threatened platform security.
        </p>
      </LegalSection>

      <LegalSection
        id="changes-to-service"
        number={17}
        title="Changes to the Service"
      >
        <p>
          We reserve the right to modify, replace, enhance or discontinue any
          feature, endpoint or component of BlogSpace at any time without
          liability.
        </p>
      </LegalSection>

      <LegalSection
        id="changes-to-terms"
        number={18}
        title="Changes to These Terms"
      >
        <p>
          We may revise these Terms &amp; Conditions at our discretion. Any
          modifications will become effective immediately upon posting to this
          URL. Your continued use of BlogSpace following the posting of revised
          Terms constitutes your acceptance of the updated provisions.
        </p>
      </LegalSection>

      <LegalSection id="governing-law-disputes" number={19} title="Governing Law & Disputes">
        <p>
          If any issue, concern or disagreement arises regarding these Terms or
          your use of BlogSpace, you agree to contact the developer directly so we
          can resolve the problem informally, fairly and constructively.
        </p>
      </LegalSection>

      <LegalSection
        id="contact-information"
        number={20}
        title="Contact Information"
      >
        <p>
          If you have questions, feedback, or concerns regarding these Terms
          &amp; Conditions, please contact the developer directly:
        </p>
        <div className="mt-3 rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-xs dark:border-zinc-800 dark:bg-zinc-900/60">
          <p className="font-semibold text-zinc-900 dark:text-white">
            BlogSpace Project Maintainer
          </p>
          <p className="mt-1 text-zinc-600 dark:text-zinc-400">
            Ajay Chandel (Developer &amp; Platform Maintainer)
          </p>
          <p className="mt-1">
            Email:{" "}
            <a
              href="mailto:ajaychandel730@gmail.com"
              className="font-medium text-zinc-900 underline dark:text-white"
            >
              ajaychandel730@gmail.com
            </a>
          </p>
        </div>
      </LegalSection>
    </LegalLayout>
  );
}
