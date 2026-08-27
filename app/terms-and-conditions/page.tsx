import type { Metadata } from 'next';
import { LegalLayout } from '../components/legal/LegalLayout';
import { LegalSection } from '../components/legal/LegalSection';
import type { TocItem } from '@/types/legal';

export const metadata: Metadata = {
  title: 'Terms & Conditions | MyBlogs',
  description: 'Review the terms and conditions governing the use of MyBlogs.',
  openGraph: {
    title: 'Terms & Conditions | MyBlogs',
    description: 'Review the terms and conditions governing the use of MyBlogs.',
    type: 'website',
  },
};

const tocItems: TocItem[] = [
  { id: 'acceptance-of-terms', title: '1. Acceptance of Terms' },
  { id: 'about-myblogs', title: '2. About MyBlogs' },
  { id: 'eligibility', title: '3. Eligibility' },
  { id: 'public-blog-access', title: '4. Public Blog Access' },
  { id: 'user-accounts', title: '5. User Accounts' },
  { id: 'user-responsibilities', title: '6. User Responsibilities' },
  { id: 'user-generated-content', title: '7. User-Generated Content' },
  { id: 'blog-publishing', title: '8. Blog Publishing' },
  { id: 'ai-generated-content', title: '9. AI-Generated and AI-Assisted Content' },
  { id: 'acceptable-use', title: '10. Acceptable Use' },
  { id: 'intellectual-property', title: '11. Intellectual Property' },
  { id: 'third-party-services', title: '12. Third-Party Services' },
  { id: 'availability-of-service', title: '13. Availability of the Service' },
  { id: 'disclaimers', title: '14. Disclaimers' },
  { id: 'limitation-of-liability', title: '15. Limitation of Liability' },
  { id: 'account-suspension', title: '16. Account Suspension and Termination' },
  { id: 'changes-to-service', title: '17. Changes to the Service' },
  { id: 'changes-to-terms', title: '18. Changes to These Terms' },
  { id: 'governing-law', title: '19. Governing Law' },
  { id: 'contact-information', title: '20. Contact Information' },
];

export default function TermsAndConditionsPage() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      description="These Terms & Conditions define the rules, responsibilities, and operational parameters governing your access to and interaction with the MyBlogs platform."
      lastUpdated="August 27, 2026"
      tocItems={tocItems}
    >
      <LegalSection id="acceptance-of-terms" number={1} title="Acceptance of Terms">
        <p>
          By accessing, browsing, or using MyBlogs (the &quot;Service&quot;), you acknowledge that you have read, understood, and agree to be bound by these Terms &amp; Conditions. If you do not agree to these terms, please discontinue use of the platform immediately.
        </p>
      </LegalSection>

      <LegalSection id="about-myblogs" number={2} title="About MyBlogs">
        <p>
          MyBlogs is an independent software development showcase and content management platform built by an individual creator to demonstrate modern web engineering, Next.js architecture, AI-assisted content workflows, secure authentication, and cloud infrastructure integration.
        </p>
        <p>
          MyBlogs is an independent portfolio project and is not a registered corporation, limited liability company, or formal commercial enterprise.
        </p>
      </LegalSection>

      <LegalSection id="eligibility" number={3} title="Eligibility">
        <p>
          You must be at least 13 years of age (or the minimum age of digital consent required in your jurisdiction) to access and use the Service. By accessing MyBlogs, you represent and warrant that you meet this age requirement.
        </p>
      </LegalSection>

      <LegalSection id="public-blog-access" number={4} title="Public Blog Access">
        <p>
          Public visitors are granted a non-exclusive, revocable, non-transferable license to access and read publicly published blog articles for personal, non-commercial, and informational reading purposes.
        </p>
        <p>
          Reading public content does not require account creation, payment, or submission of personal credentials.
        </p>
      </LegalSection>

      <LegalSection id="user-accounts" number={5} title="User Accounts">
        <p>
          Account creation and administrative access on MyBlogs are designated for authorized content creators and administrators. If you register an account, you agree to provide accurate, current, and complete registration information.
        </p>
        <p>
          You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your authenticated session.
        </p>
      </LegalSection>

      <LegalSection id="user-responsibilities" number={6} title="User Responsibilities">
        <p>
          As an authenticated or public user of MyBlogs, you agree:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Not to compromise, disrupt, or probe the security of the application infrastructure or database.</li>
          <li>Not to attempt unauthorized access to administrative routes, other user accounts, or private API endpoints.</li>
          <li>To maintain secure, strong passwords and immediately notify the administrator of any unauthorized account activity.</li>
        </ul>
      </LegalSection>

      <LegalSection id="user-generated-content" number={7} title="User-Generated Content">
        <p>
          Registered authors retain ownership of original text, editorial compositions, and media submitted to MyBlogs. By publishing content through the platform, you grant MyBlogs a non-exclusive, worldwide, royalty-free license to store, format, index, and display your submitted content on the platform.
        </p>
        <p>
          You represent that you have all necessary rights, permissions, and licenses to publish any content you submit.
        </p>
      </LegalSection>

      <LegalSection id="blog-publishing" number={8} title="Blog Publishing">
        <p>
          MyBlogs reserves the right, but does not undertake an obligation, to review, edit, unpublish, or permanently delete any blog post, draft, or media asset at its sole discretion, including content deemed to violate these Terms, infringe upon third-party rights, or present security risks.
        </p>
      </LegalSection>

      <LegalSection id="ai-generated-content" number={9} title="AI-Generated and AI-Assisted Content">
        <p>
          MyBlogs includes features powered by large language models (such as the Gemini API) to assist authors with drafting, brainstorming, summarizing, and editing blog content. Regarding AI-generated outputs:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Inaccuracies and Hallucinations:</strong> AI outputs may contain factual inaccuracies, hallucinations, outdated information, or logical flaws. MyBlogs makes no representation that AI-generated content is accurate, exhaustive, or suitable for any critical purpose.
          </li>
          <li>
            <strong>Mandatory Human Review:</strong> Authors and administrators are strictly responsible for reviewing, fact-checking, editing, and verifying all AI-assisted drafts before publishing them publicly.
          </li>
          <li>
            <strong>No Guarantees of Originality or Safety:</strong> MyBlogs does NOT warrant that AI-generated content is entirely original, free from unintentional similarities to external works, legally compliant, or plagiarism-free. Authors assume full responsibility for content published under their accounts.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="acceptable-use" number={10} title="Acceptable Use">
        <p>
          You agree not to use MyBlogs to:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Publish or distribute unlawful, defamatory, harassing, abusive, fraudulent, or harmful material.</li>
          <li>Upload media containing malware, malicious scripts, or exploitative code.</li>
          <li>Execute automated scraping, denial-of-service (DoS) attacks, or excessive automated requests that degrade server performance.</li>
          <li>Impersonate any individual, creator, or entity.</li>
        </ul>
      </LegalSection>

      <LegalSection id="intellectual-property" number={11} title="Intellectual Property">
        <p>
          The MyBlogs application codebase, visual interface design, logos, user interface components, and technical architecture are the intellectual property of the project creator.
        </p>
        <p>
          Unless explicitly designated under open-source licenses for specific source repositories, you may not copy, reverse engineer, resell, or distribute the proprietary platform software or branding without prior written consent.
        </p>
      </LegalSection>

      <LegalSection id="third-party-services" number={12} title="Third-Party Services">
        <p>
          The Service integrates with third-party platforms including MongoDB Atlas, Cloudinary, Google OAuth 2.0, the Google Gmail API, and Gemini AI endpoints. Your interaction with features relying on these services is subject to their respective technical availability, rate limits, and terms of service. MyBlogs is not liable for service interruptions originating from third-party outages.
        </p>
      </LegalSection>

      <LegalSection id="availability-of-service" number={13} title="Availability of the Service">
        <p>
          Because MyBlogs is an independently operated demonstration and portfolio project, the Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. We do not guarantee uninterrupted uptime, 24/7 service availability, or perpetual data preservation. The platform may undergo maintenance, updates, or temporary downtime without prior notice.
        </p>
      </LegalSection>

      <LegalSection id="disclaimers" number={14} title="Disclaimers">
        <p className="uppercase text-xs tracking-wider text-zinc-500 dark:text-zinc-400">
          Disclaimer of Warranties
        </p>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, MYBLOGS AND ITS CREATOR EXPRESSLY DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
        </p>
        <p>
          NO ADVICE, INFORMATION, OR CODE SAMPLES PRESENTED ON THE PLATFORM SHALL CREATE ANY WARRANTY NOT EXPRESSLY STATED HEREIN.
        </p>
      </LegalSection>

      <LegalSection id="limitation-of-liability" number={15} title="Limitation of Liability">
        <p>
          TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE CREATOR OF MYBLOGS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF DATA, LOSS OF PROFITS, SERVICE INTERRUPTION, OR SYSTEM DAMAGE ARISING OUT OF OR IN CONNECTION WITH YOUR USE OR INABILITY TO USE THE SERVICE.
        </p>
      </LegalSection>

      <LegalSection id="account-suspension" number={16} title="Account Suspension and Termination">
        <p>
          We reserve the right to suspend or terminate any user account, restrict access to administrative functions, or remove published content immediately and without prior notice if we determine, in our sole discretion, that a user has violated these Terms, engaged in abusive behavior, or threatened platform security.
        </p>
      </LegalSection>

      <LegalSection id="changes-to-service" number={17} title="Changes to the Service">
        <p>
          We reserve the right to modify, replace, enhance, or discontinue any feature, endpoint, or component of MyBlogs at any time without liability.
        </p>
      </LegalSection>

      <LegalSection id="changes-to-terms" number={18} title="Changes to These Terms">
        <p>
          We may revise these Terms &amp; Conditions at our discretion. Any modifications will become effective immediately upon posting to this URL. Your continued use of MyBlogs following the posting of revised Terms constitutes your acceptance of the updated provisions.
        </p>
      </LegalSection>

      <LegalSection id="governing-law" number={19} title="Governing Law">
        <p>
          These Terms shall be interpreted and governed in accordance with general principles of law applicable to independent online software projects, without giving effect to any conflict of law principles. Any dispute arising under these Terms shall be resolved in a constructive, informal manner directly with the developer.
        </p>
      </LegalSection>

      <LegalSection id="contact-information" number={20} title="Contact Information">
        <p>
          If you have questions, feedback, or concerns regarding these Terms &amp; Conditions, please contact the developer directly:
        </p>
        <div className="mt-3 rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-xs dark:border-zinc-800 dark:bg-zinc-900/60">
          <p className="font-semibold text-zinc-900 dark:text-white">MyBlogs Project Maintainer</p>
          <p className="mt-1 text-zinc-600 dark:text-zinc-400">Ajay Chandel (Developer &amp; Platform Maintainer)</p>
          <p className="mt-1">
            Email:{' '}
            <a href="mailto:ajaychandel730@gmail.com" className="font-medium text-zinc-900 underline dark:text-white">
              ajaychandel730@gmail.com
            </a>
          </p>
        </div>
      </LegalSection>
    </LegalLayout>
  );
}