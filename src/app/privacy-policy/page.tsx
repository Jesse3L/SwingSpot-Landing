import { Section } from "@/components/ui/Section";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-black pt-20">
            <Section id="privacy-policy">
                <div className="container mx-auto px-4 max-w-4xl text-white/80">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 font-heading uppercase text-center">
                        Privacy <span className="text-primary">Policy</span>
                    </h1>

                    <div className="prose prose-invert max-w-none space-y-8">
                        <div>
                            <p className="text-sm text-white/50">Last Updated: February 19, 2026</p>
                            <p>
                                At SwingSpot ("we", "us", or "our"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you visit our website or join our waitlist.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                            <p>
                                We may collect personal information that you voluntarily provide to us when you:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Join our waitlist</li>
                                <li>Fill out a contact form</li>
                                <li>Register for an account</li>
                                <li>Subscribe to our newsletter</li>
                            </ul>
                            <p className="mt-4">
                                The personal information we collect may include:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Name</li>
                                <li>Email address</li>
                                <li>Phone number</li>
                                <li>Membership preferences</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                            <p>
                                We use the information we collect to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Send you updates about our opening date and membership opportunities</li>
                                <li>Respond to your inquiries and support needs</li>
                                <li>Improve our website and services</li>
                                <li>Send you marketing communications (you can opt-out at any time)</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Disclosure of Your Information</h2>
                            <p>
                                We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except as described below:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    <strong>Service Providers:</strong> We may share information with third-party vendors (such as Zapier, Google Analytics) who perform services for us.
                                </li>
                                <li>
                                    <strong>Legal Requirements:</strong> We may disclose information if required to do so by law or in response to valid requests by public authorities.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Security of Your Information</h2>
                            <p>
                                We use administrative, technical, and physical security measures to help protect your personal information. However, please be aware that no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
                            <p>
                                If you have questions or comments about this Privacy Policy, please contact us at:
                            </p>
                            <p className="mt-4">
                                <strong>SwingSpot</strong><br />
                                224 N. Main Street<br />
                                Clovis, NM 88101<br />
                                Email: info@swingspot.com
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
