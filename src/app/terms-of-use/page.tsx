import Link from "next/link";

import { clientRoutes } from "@/constants/routes";

const applicationName = "GitHub Gists Clone";

const TermsOfUsePage = () => {
  return (
    <div>
      <h1 className="mb-4 text-5xl">Terms of Use</h1>

      <div className="flex flex-col space-y-2 text-base">
        <p>Welcome to {applicationName}!</p>

        <p>
          These Terms of Use govern your use of {applicationName} ("we," "our," or "us") and the
          services we provide on our website and through our application (collectively, the
          "Service"). By using the Service, you agree to these Terms of Use. If you do not agree to
          these Terms of Use, please do not use the Service.
        </p>

        <ol className="list-decimal pl-4">
          <li>
            <strong>User Account:</strong>

            <ul className="list-disc pl-4">
              <li>You must create an account to use certain features of the Service.</li>
              <li>
                You are responsible for maintaining the confidentiality of your account and password
                and for restricting access to your computer or device.
              </li>
              <li>You are responsible for all activities that occur under your account.</li>
            </ul>
          </li>

          <li>
            <strong>Content:</strong>

            <ul className="list-disc pl-4">
              <li>
                You are solely responsible for the content you create, upload, post, or share on the
                Service ("Content").
              </li>
              <li>
                By posting Content, you represent and warrant that you have the right to post the
                Content and to grant us the license to use the Content as described in these Terms
                of Use.
              </li>
            </ul>
          </li>

          <li>
            <strong>Privacy:</strong>

            <ul className="list-disc pl-4">
              <li>
                Your privacy is important to us. Please refer to our{" "}
                <Link
                  className="text-sky-600 inline-block group opacity-70 hover:opacity-100 transition-opacity"
                  href={clientRoutes.privacyPolicy}
                >
                  Privacy Policy
                </Link>{" "}
                for information on how we collect, use, and disclose your personal information.
              </li>
            </ul>
          </li>

          <li>
            <strong>Termination:</strong>

            <ul className="list-disc pl-4">
              <li>
                We may terminate or suspend your account and access to the Service at our sole
                discretion, without prior notice, for any reason or no reason.
              </li>
            </ul>
          </li>

          <li>
            <strong>Modifications:</strong>

            <ul className="list-disc pl-4">
              <li>
                We reserve the right, in our sole discretion, to modify or replace these Terms of
                Use at any time. If a revision is material, we will try to provide at least 30 days'
                notice prior to any new terms taking effect.
              </li>
            </ul>
          </li>

          <li>
            <strong>Limitation of Liability:</strong>

            <ul className="list-disc pl-4">
              <li>
                To the maximum extent permitted by applicable law, in no event shall{" "}
                {applicationName}, its affiliates, agents, directors, employees, suppliers, or
                licensors be liable for any indirect, punitive, incidental, special, consequential,
                or exemplary damages, including without limitation damages for loss of profits,
                goodwill, use, data, or other intangible losses, arising out of or relating to the
                use of, or inability to use, this Service.
              </li>
            </ul>
          </li>

          <li>
            <strong>Governing Law:</strong>

            <ul className="list-disc pl-4">
              <li>
                These Terms of Use are governed by and construed in accordance with the laws of
                British Columbia, Canada, without regard to its conflict of law principles.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default TermsOfUsePage;
