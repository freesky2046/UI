import HomeNavigationMenu from "../HomeNavigation"
import Footer from "../Footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-muted dark:bg-neutral-900">
      <HomeNavigationMenu />
      <div className="container mx-auto max-w-3xl px-4 py-16 md:px-6">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          Last updated: July 20, 2026
        </p>
        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8 text-gray-800 dark:text-gray-200">
          <section>
            <h2 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-3">1. Information We Collect</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              When you use AI Listing, we may collect the following types of information:
            </p>
            <ul className="mt-2 space-y-2 text-sm text-gray-600 dark:text-gray-400 list-disc pl-5">
              <li><strong>Account Information:</strong> Name, email address, and password when you create an account.</li>
              <li><strong>Usage Data:</strong> Product information you enter, generated listing content, and interaction history with our platform.</li>
              <li><strong>Payment Information:</strong> Billing details processed through our secure payment provider. We do not store full credit card numbers.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, and pages visited for analytics and security purposes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-3">2. How We Use Your Information</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              We use the information we collect to provide, maintain, and improve our services:
            </p>
            <ul className="mt-2 space-y-2 text-sm text-gray-600 dark:text-gray-400 list-disc pl-5">
              <li>Process your account registration and authenticate your identity.</li>
              <li>Generate and deliver AI-powered Amazon listing content based on your inputs.</li>
              <li>Process payments and manage your subscription.</li>
              <li>Send important account notices, updates, and support communications.</li>
              <li>Analyze usage patterns to improve our AI models and user experience.</li>
              <li>Detect and prevent fraud, abuse, and security incidents.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-3">3. Data Sharing & Disclosure</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              We do not sell your personal information. We may share data only:
            </p>
            <ul className="mt-2 space-y-2 text-sm text-gray-600 dark:text-gray-400 list-disc pl-5">
              <li><strong>With Service Providers:</strong> Trusted third parties who help us operate our platform (hosting, payment processing, analytics).</li>
              <li><strong>For Legal Reasons:</strong> When required by law, court order, or to protect our rights and users.</li>
              <li><strong>With Your Consent:</strong> Any additional sharing only occurs with your explicit permission.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-3">4. Data Security</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              We implement industry-standard security measures including encryption at rest and in transit, regular security audits, and strict access controls. While we strive to protect your data, no method of electronic transmission or storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-3">5. Your Rights</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Depending on your location, you may have rights including:
            </p>
            <ul className="mt-2 space-y-2 text-sm text-gray-600 dark:text-gray-400 list-disc pl-5">
              <li>Access and receive a copy of your personal data.</li>
              <li>Request correction or deletion of your data.</li>
              <li>Object to or restrict certain processing activities.</li>
              <li>Data portability — receive your data in a structured format.</li>
              <li>Withdraw consent at any time where processing is consent-based.</li>
            </ul>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              To exercise these rights, contact us at privacy@ailisting.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-3">6. Contact Us</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              If you have questions about this Privacy Policy, please reach out at:
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Email: privacy@ailisting.com
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
