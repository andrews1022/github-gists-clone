const applicationName = "GitHub Gists Clone";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <h1 className="mb-4 text-5xl">Privacy Policy</h1>

      <div className="flex flex-col space-y-2 text-base">
        <p>
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and
          disclose your personal information when you use {applicationName} (the "Service").
        </p>

        <ol className="list-decimal pl-4">
          <li>
            <strong>Governing Law:</strong>

            <ul className="list-disc pl-4">
              <li>
                We collect information you provide directly to us, such as your name, email address,
                and GitHub credentials when you sign in using GitHub OAuth.
              </li>
              <li>
                We may also collect information about your use of the Service, such as the content
                you create and share.
              </li>
            </ul>
          </li>

          <li>
            <strong>How We Use Your Information:</strong>

            <ul className="list-disc pl-4">
              <li>
                We use the information we collect to provide, maintain, and improve the Service.
              </li>
              <li>We may use your email address to send you Service-related notices.</li>
              <li>We do not sell, trade, or rent your personal information to others.</li>
            </ul>
          </li>

          <li>
            <strong>Security:</strong>

            <ul className="list-disc pl-4">
              <li>
                We take reasonable measures to help protect personal information from loss, theft,
                misuse, and unauthorized access, disclosure, alteration, and destruction.
              </li>
            </ul>
          </li>

          <li>
            <strong>Third-Party Services:</strong>

            <ul className="list-disc pl-4">
              <li>
                The Service may contain links to third-party websites and services. We are not
                responsible for the practices employed by third-party websites or services linked to
                or from the Service.
              </li>
            </ul>
          </li>

          <li>
            <strong>Changes to this Privacy Policy:</strong>

            <ul className="list-disc pl-4">
              <li>
                We may revise this Privacy Policy from time to time. The most current version of the
                policy will govern our use of your information.
              </li>
            </ul>
          </li>

          <li>
            <strong>Contact Us:</strong>

            <ul className="list-disc pl-4">
              <li>
                If you have any questions about this Privacy Policy, please contact me on{" "}
                <a
                  href="https://twitter.com/andrew_devsrc"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-600 inline-block group opacity-70 hover:opacity-100 transition-opacity"
                >
                  Twitter
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-150 h-px bg-gray-400" />
                </a>
                .
              </li>
            </ul>
          </li>
        </ol>

        <p>
          By using the Service, you agree to the collection and use of your information in
          accordance with this Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
