import { TocItem } from "@/types/legal";
import type { Metadata } from "next";
import { LegalLayout } from "../components/legal/LegalLayout";
import { LegalSection } from "../components/legal/LegalSection";

export const metadata: Metadata = {
  title: "Privacy Policy | BlogSpace",
  description:
    "Learn how BlogSpace collects, uses, and protects information when you use the platform.",
  openGraph: {
    title: "Privacy Policy | BlogSpace",
    description:
      "Learn how BlogSpace collects, uses, and protects information when you use the platform.",
    type: "website",
  },
};

const tocItems: TocItem[] = [
  { id: "introduction", title: "1. Introduction" },
  { id: "public-blog-access", title: "2. Public Blog Access" },
  { id: "information-we-collect", title: "3. Information We Collect" },
  { id: "information-you-provide", title: "4. Information You Provide" },
  { id: "registered-accounts", title: "5. Registered Accounts" },
  {
    id: "account-and-auth-info",
    title: "6. Account and Authentication Information",
  },
  { id: "blog-and-content-data", title: "7. Blog and Content Data" },
  { id: "how-we-use-information", title: "8. How We Use Information" },
  { id: "password-reset-and-otp", title: "9. Password Reset and OTP Emails" },
  { id: "ai-assisted-generation", title: "10. AI-Assisted Content Generation" },
  {
    id: "google-gmail-api-data",
    title: "11. Google Gmail API and Account Data",
  },
  { id: "how-gmail-data-is-used", title: "12. How Gmail Data Is Used" },
  { id: "data-storage-and-security", title: "13. Data Storage and Security" },
  { id: "third-party-services", title: "14. Third-Party Services" },
  {
    id: "cookies-and-similar-tech",
    title: "15. Cookies and Similar Technologies",
  },
  { id: "data-retention", title: "16. Data Retention" },
  { id: "data-deletion", title: "17. Data Deletion" },
  { id: "your-rights-and-choices", title: "18. Your Rights and Choices" },
  { id: "childrens-privacy", title: "19. Children’s Privacy" },
  { id: "changes-to-policy", title: "20. Changes to This Privacy Policy" },
  { id: "contact-us", title: "21. Contact Us" },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      description="This Privacy Policy outlines how BlogSpace processes, stores, and protects personal and technical data across public and authenticated areas of the application."
      lastUpdated="August 27, 2026"
      tocItems={tocItems}
    >
      <LegalSection id="introduction" number={1} title="Introduction">
        <p>
          Welcome to BlogSpace. BlogSpace is an independent, portfolio-driven
          web application designed to demonstrate modern full-stack web
          engineering, content management architecture, artificial intelligence
          integration, and secure transactional automation.
        </p>
        <p>
          This Privacy Policy explains how data is collected, processed, and
          safeguarded when you visit our website, interact with published
          articles, register an administrative or author account, or engage with
          our platform features. Because BlogSpace is operated as an independent
          portfolio project, we place an emphasis on operational transparency,
          clear architectural disclosures, and data minimization.
        </p>
      </LegalSection>

      <LegalSection
        id="public-blog-access"
        number={2}
        title="Public Blog Access"
      >
        <p>
          Public visitors can browse, search, and read all publicly published
          blog posts without creating an account, logging in, or providing any
          personal identification information (such as your name, email address,
          or phone number).
        </p>
        <p>
          You can read public blog posts on MyBlogs without creating an account
          or sharing your name or email. Our web host only records temporary
          technical details (like your devices connection address and the time
          of your visit) strictly to load the page on your screen and keep the
          site working properly.
        </p>
      </LegalSection>

      <LegalSection
        id="information-we-collect"
        number={3}
        title="Information We Collect"
      >
        <div className="space-y-6 text-default-600 leading-7">
          <p>
            MyBlogs collects information that is necessary to provide and
            operate the features of the application. The information we may
            collect includes:
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong className="font-semibold text-foreground">
                Account Information:
              </strong>{" "}
              When you create an account, we may collect information such as
              your name, email address, and password credentials. Passwords are
              stored as secure password hashes and are not stored in plain text.
            </li>

            <li>
              <strong className="font-semibold text-foreground">
                Blog and Content Data:
              </strong>{" "}
              We may collect content you provide through the platform, including
              blog posts, drafts, images, categories, tags, and other
              information used to create, manage, and publish blogs.
            </li>

            <li>
              <strong className="font-semibold text-foreground">
                Password Reset Information:
              </strong>{" "}
              When you request a password reset, we use your registered email
              address to send a temporary one-time password (OTP) for account
              verification.
            </li>

            <li>
              <strong className="font-semibold text-foreground">
                IP Address and Rate-Limiting Information:
              </strong>{" "} 
              We may process and temporarily store your IP address in Redis to
              implement rate limiting, prevent abuse, and protect the
              application from excessive or automated requests.
            </li>
          </ul>
        </div>
      </LegalSection>

      <LegalSection
        id="information-you-provide"
        number={4}
        title="Information You Provide"
      >
        <p>
          When you interact with interactive areas of BlogSpace, you voluntarily
          provide specific information depending on the context:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Contact Inquiries:</strong> When reaching out via email, you
            provide your name, email address, and message content.
          </li>
          <li>
            <strong>Editorial Inputs:</strong> Prompts, topic keywords, draft
            revisions, and media assets supplied when composing or managing blog
            publications.
          </li>
          <li>
            <strong>Authentication Inputs:</strong> Email address and password
            credentials entered during registration, sign-in, or credential
            recovery workflows.
          </li>
        </ul>
      </LegalSection>

      <LegalSection
        id="registered-accounts"
        number={5}
        title="Registered Accounts"
      >
        <p>
          Account creation on BlogSpace is reserved for authorized authors,
          administrators, and registered platform users who draft, edit, manage,
          or publish content.
        </p>
        <p>
          When an account is established, we collect your name, email address,
          and account credentials. Registered user email addresses are utilized
          exclusively for account management, authentication verification,
          administrative notifications, and security-critical operations such as
          one-time password (OTP) verification.
        </p>
      </LegalSection>

      <LegalSection
        id="account-and-auth-info"
        number={6}
        title="Account and Authentication Information"
      >
        <p>
          Authentication security is implemented following industry-standard
          server-side practices.{" "}
          <strong>Passwords are never stored in plain text.</strong>
        </p>
        <p>
          All password credentials submitted during registration or password
          updates are cryptographically hashed on the server using secure,
          one-way cryptographic hashing algorithms before being stored in the
          database. Authentication sessions are managed using secure session
          tokens handled through NextAuth.
        </p>
      </LegalSection>

      <LegalSection
        id="blog-and-content-data"
        number={7}
        title="Blog and Content Data"
      >
        <p>
          When authenticated users create or edit blog posts, BlogSpace stores
          the associated editorial data in our database (MongoDB Atlas). This
          includes article titles, content bodies (Markdown or rich text
          formats), author attribution, publication status (draft or published),
          categorization tags, creation dates, and revision timestamps.
        </p>
        <p>
          Images and media uploaded to accompany blog posts are transmitted to
          and stored within Cloudinary media storage.
        </p>
      </LegalSection>

      <LegalSection
        id="how-we-use-information"
        number={8}
        title="How We Use Information"
      >
        <p>
          We use the information collected solely for operational, functional,
          and security purposes:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>To serve and render public blog posts to web visitors.</li>
          <li>
            To authenticate registered authors and maintain authorized
            administrative sessions.
          </li>
          <li>
            To generate and deliver transactional security emails (such as
            password-reset OTPs).
          </li>
          <li>
            To process AI-assisted content drafting and topic generation
            requests.
          </li>
          <li>
            To safeguard the integrity of the application against unauthorized
            access and abusive behavior.
          </li>
        </ul>
      </LegalSection>

      <LegalSection
        id="password-reset-and-otp"
        number={9}
        title="Password Reset and OTP Emails"
      >
        <p>When a registered user initiates a password reset request:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>
            The BlogSpace backend generates a temporary, cryptographically
            random One-Time Password (OTP).
          </li>
          <li>
            The OTP is associated with the user account record in the database
            alongside a strict, short-lived expiration timestamp.
          </li>
          <li>
            The OTP is dispatched directly to the user’s registered email
            address using the Google Gmail API.
          </li>
          <li>
            Upon entry by the user, the OTP is validated. Once validated or
            expired, the OTP is invalidated and cannot be reused.
          </li>
        </ol>
      </LegalSection>

      <LegalSection
        id="ai-assisted-generation"
        number={10}
        title="AI-Assisted Content Generation"
      >
        <p>
          BlogSpace integrates artificial intelligence capabilities (via Gemini
          / Google AI APIs) to assist authors in generating blog topics,
          drafting outlines, summarizing text, and automating editorial
          workflows.
        </p>
        <p>
          When an author requests AI assistance, the prompt text, topic ideas,
          or draft snippets are transmitted server-side to the AI API endpoint.
          Prompts are used solely to produce the requested text response. AI
          outputs are returned to the author for mandatory review,
          fact-checking, and editorial approval before publication.
        </p>
      </LegalSection>

      <LegalSection
        id="google-gmail-api-data"
        number={11}
        title="Google Gmail API and Google Account Data"
      >
        <p>
          BlogSpace utilizes Google OAuth 2.0 authorization and the Google Gmail
          API specifically to dispatch transactional application emails (such as
          password reset OTPs, blog workflow notifications, and system alerts).
        </p>
        <p>
          The application requests and utilizes exclusively the following
          limited OAuth scope:
        </p>
        <div className="my-2 rounded border border-zinc-200 bg-zinc-50 p-3 font-mono text-xs text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
          https://www.googleapis.com/auth/gmail.send
        </div>
        <p>
          This permission is strictly scoped to allow the application server to
          compose and dispatch outgoing emails on behalf of the application’s
          designated administrative email sender.
        </p>
      </LegalSection>

      <LegalSection
        id="how-gmail-data-is-used"
        number={12}
        title="How Gmail Data Is Used"
      >
        <p>To maintain absolute clarity regarding Google user and API data:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            BlogSpace <strong>DOES NOT</strong> read, scan, index, or access
            your Gmail inbox or personal email messages.
          </li>
          <li>
            BlogSpace <strong>DOES NOT</strong> modify, delete, or organize
            existing email messages or folders.
          </li>
          <li>
            BlogSpace <strong>DOES NOT</strong> access Google Contacts, Google
            Drive, Google Calendar, or any other Google service.
          </li>
          <li>
            All OAuth tokens, client credentials, and refresh tokens are stored
            securely in server-side environment variables and are never exposed
            to client browsers.
          </li>
        </ul>
      </LegalSection>

      <LegalSection
        id="data-storage-and-security"
        number={13}
        title="Data Storage and Security"
      >
        <p>
          Data storage and transmission security measures implemented across
          BlogSpace include:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Database Hosting:</strong> Primary operational data is
            stored in managed cloud databases provided by MongoDB Atlas with
            TLS-encrypted connections.
          </li>
          <li>
            <strong>Media Assets:</strong> Image assets are hosted securely via
            Cloudinary CDN infrastructure.
          </li>
          <li>
            <strong>Credential Hashing:</strong> Passwords are protected using
            one-way cryptographic hashing algorithms.
          </li>
          <li>
            <strong>Transport Security:</strong> All client-server traffic is
            encrypted using Transport Layer Security (HTTPS/TLS).
          </li>
        </ul>
      </LegalSection>

      <LegalSection
        id="third-party-services"
        number={14}
        title="Third-Party Services"
      >
        <p>
          BlogSpace relies on a select group of third-party cloud infrastructure
          providers to fulfill core platform functionality:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>MongoDB / MongoDB Atlas:</strong> Structured database
            storage for account metadata, articles, and audit records.
          </li>
          <li>
            <strong>Cloudinary:</strong> Media hosting and image optimization
            storage.
          </li>
          <li>
            <strong>Google Gmail API / Google OAuth 2.0:</strong> Outgoing
            transactional email delivery and service authorization.
          </li>
          <li>
            <strong>Gemini / Google AI APIs:</strong> Large language model
            inference for editorial drafting and ideation.
          </li>
          <li>
            <strong>NextAuth:</strong> Authentication framework and session
            management.
          </li>
        </ul>
      </LegalSection>

      <LegalSection
        id="cookies-and-similar-tech"
        number={15}
        title="Cookies and Similar Technologies"
      >
        <p>
          BlogSpace uses essential, secure, HTTP-only session cookies strictly
          necessary to maintain authentication state for logged-in users. We do
          not use third-party advertising cookies or cross-site tracking pixels.
        </p>
        <p>
          Public visitors reading blogs do not receive tracking cookies for ad
          targeting.
        </p>
      </LegalSection>

      <LegalSection id="data-retention" number={16} title="Data Retention">
        <p>
          We retain personal information for the period necessary to deliver
          application services:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Registered Accounts:</strong> Maintained for the operational
            lifespan of the account or until deleted by the user or
            administrator.
          </li>
          <li>
            <strong>Blog Content:</strong> Maintained until edited or deleted by
            an authorized author or administrator.
          </li>
          <li>
            <strong>Password-Reset OTPs:</strong> Automatically invalidated upon
            expiration (typically within 5 minutes) and purged from
            active validation routines.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="data-deletion" number={17} title="Data Deletion">
        <p>
          Registered users have the right to request the deletion of their
          personal account data, authored blog drafts, and contact history.
        </p>
        <p>
          To request account or content deletion, submit a direct inquiry to{" "}
          <a
            href="mailto:ajaychandel730@gmail.com"
            className="font-medium text-zinc-900 underline dark:text-white"
          >
            ajaychandel730@gmail.com
          </a>
          . Upon verification, the requested records will be permanently removed
          from active databases.
        </p>
      </LegalSection>

      <LegalSection
        id="your-rights-and-choices"
        number={18}
        title="Your Rights and Choices"
      >
        <p>
          Depending on your jurisdiction, you have choices regarding the
          information processed by BlogSpace:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Access and Review:</strong> You may request confirmation of
            the personal data associated with your registered email.
          </li>
          <li>
            <strong>Rectification:</strong> You may request correction of
            inaccurate profile or account details.
          </li>
          <li>
            <strong>Account Erasure:</strong> You may request full removal of
            your registered credentials and associated data.
          </li>
        </ul>
      </LegalSection>

      <LegalSection
        id="childrens-privacy"
        number={19}
        title="Children’s Privacy"
      >
        <p>
          BlogSpace is a general-audience technical showcase and blogging
          platform not directed at children under the age of 13 (or 16 where
          applicable by regional law). We do not knowingly collect personal
          information from children. If you become aware that a child has
          provided us with personal information, please contact us immediately
          for removal.
        </p>
      </LegalSection>

      <LegalSection
        id="changes-to-policy"
        number={20}
        title="Changes to This Privacy Policy"
      >
        <p>
          We may periodically update this Privacy Policy to reflect
          modifications to application architecture, integration of new
          features, or refinements in data management practices. Any revisions
          will be posted directly to this page with an updated &quot;Last
          Updated&quot; date.
        </p>
      </LegalSection>

      <LegalSection id="contact-us" number={21} title="Contact Us">
        <p>
          If you have questions, feedback, or data management requests regarding
          this Privacy Policy or the technical implementation of BlogSpace,
          please reach out directly:
        </p>
        <div className="mt-3 rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-xs dark:border-zinc-800 dark:bg-zinc-900/60">
          <p className="font-semibold text-zinc-900 dark:text-white">
            BlogSpace Project Maintainer
          </p>
          <p className="mt-1 text-zinc-600 dark:text-zinc-400">
            Ajay Chandel (Independent Creator / Developer)
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
