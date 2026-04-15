import React from "react";
import { PageHero } from "@/components/layout/PageHero";
import { SITE_NAME } from "@/constants/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Terms of Service | ${SITE_NAME}`,
  description: "Defined protocols and legal frameworks for our engineering services.",
};

export default function TermsPage() {
  const lastUpdated = "April 13, 2026";

  return (
    <div className="flex flex-col">
      <PageHero
        badge="Legal Framework"
        title="Terms of Service"
        description="Establishing the technical and legal protocols that govern our elite engineering services and digital interfaces."
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 pb-8 border-b border-primary/10">
              <p className="text-primary/40 font-mono text-sm uppercase tracking-widest">Last Updated: {lastUpdated}</p>
            </div>

            <div className="prose prose-lg max-w-none font-body text-primary/70 leading-relaxed space-y-12">
              <div>
                <h2 className="text-2xl font-trajan font-bold text-primary mb-6">1. Acceptance of Protocols</h2>
                <p>
                  By accessing the VoltaEdge Engineering digital platform or engaging our multi-disciplinary technical services, you acknowledge and agree to adhere to these Terms of Service. These protocols constitute a legally binding infrastructure agreement between you (the Client, User, or Organization) and VoltaEdge Engineering.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-trajan font-bold text-primary mb-6">2. Client Obligations & Data Accuracy</h2>
                <p>
                  To ensure engineering precision, the Client is responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-4">
                  <li>Providing absolute and accurate site data, load requirements, and environmental constraints.</li>
                  <li>Ensuring that all provided technical documentation is free from third-party IP infringements.</li>
                  <li>Maintaining the security of authorized access credentials to our project management portals.</li>
                </ul>
                <p className="mt-4">
                  VoltaEdge Engineering is not liable for structural or electrical failures resulting from inaccurate or omitted data provided by the Client.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-trajan font-bold text-primary mb-6">3. Technical Intellectual Property</h2>
                <p>
                  All engineering designs, 3D BIM models, high-voltage schematics, digital twin architectures, and proprietary software algorithms developed by VoltaEdge remain the exclusive intellectual property of VoltaEdge Engineering.
                </p>
                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>Limited License:</strong> Clients are granted a non-exclusive, non-transferable license to utilize the delivered designs solely for the operation and maintenance of the specific project site defined in the contract.</li>
                  <li><strong>Prohibitions:</strong> Deep-linking, scraping, or reverse-engineering our digital assets or proprietary automation logic is strictly prohibited and will be met with immediate legal action.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-trajan font-bold text-primary mb-6">4. Scope of Technical Liability</h2>
                <p>
                  VoltaEdge Engineering operates under the highest global standards (IEEE, NFPA, ISO). However, our liability is strictly limited:
                </p>
                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>Professional Service:</strong> Liability is limited to the direct fees paid for the professional engineering services involved in the specific failure event.</li>
                  <li><strong>Third-Party Components:</strong> We do not warrant third-party hardware (transformers, switchgear, solar panels) beyond the original manufacturer&apos;s warranty.</li>
                  <li><strong>Operational Failures:</strong> We are not liable for business interruption, lost profits, or data loss resulting from power outages or equipment failure beyond our direct design scope.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-trajan font-bold text-primary mb-6">5. Force Majeure & Grid Instability</h2>
                <p>
                  VoltaEdge Engineering shall not be held liable for delays or failures in performance resulting from &quot;Act of God&quot; events, including but not limited to: Category 4+ hurricanes, regional grid collapses, global supply chain disruptions, or cyber-warfare targeting national energy infrastructure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-trajan font-bold text-primary mb-6">6. Confidentiality & Non-Disclosure</h2>
                <p>
                  Both parties agree to treat all project-specific information, financial data, and technical trade secrets as &quot;Classified Industrial Data.&quot; This obligation extends for a period of 10 years following the conclusion of the technical partnership.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-trajan font-bold text-primary mb-6">7. Dispute Resolution & Arbitration</h2>
                <p>
                  Any technical or legal disputes arising from these terms shall be resolved through binding arbitration in Houston, Texas, administered by the American Arbitration Association (AAA) under its Commercial Arbitration Rules.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-trajan font-bold text-primary mb-6">5. Ethical Conduct & Safety</h2>
                <p>
                  We reserve the right to terminate any project engagement if safety protocols are disregarded or if ethical standards are compromised. Safety is an absolute requirement in all VoltaEdge operations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-trajan font-bold text-primary mb-6">6. Governing Jurisdictions</h2>
                <p>
                  These terms are governed by the laws and engineering regulations of the state of Texas, USA, and applicable international maritime and energy laws for global infrastructure projects.
                </p>
              </div>

              <div className="mt-20 p-8 bg-primary/2 rounded-2xl border border-dashed border-primary/20 text-center">
                <p className="text-primary/60 text-sm">
                  For detailed project-specific legal frameworks, please refer to your Master Service Agreement (MSA).
                </p>
                <p className="text-primary/60 text-sm mt-4 font-bold">
                  Contact Legal: legal@voltaeedge.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
