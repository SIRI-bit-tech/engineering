import React from "react";
import { PageHero } from "@/components/layout/PageHero";
import { SITE_NAME } from "@/constants/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description: "Our commitment to data integrity and privacy security.",
};

export default function PrivacyPage() {
  const lastUpdated = "April 13, 2026";

  return (
    <div className="flex flex-col">
      <PageHero
        badge="Integrity & Security"
        title="Privacy Policy"
        description="At VoltaEdge Engineering, data integrity is as critical as structural integrity. We are committed to protecting your privacy and securing your technical data."
        image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 pb-8 border-b border-primary/10">
              <p className="text-primary/40 font-mono text-sm uppercase tracking-widest">Last Updated: {lastUpdated}</p>
            </div>

            <div className="prose prose-lg max-w-none font-body text-primary/70 leading-relaxed space-y-12">
              <div>
                <h2 className="text-2xl font-trajan font-bold text-primary mb-6">1. Information We Collect</h2>
                <p>
                  VoltaEdge Engineering collects technical and professional information necessary to provide elite-tier engineering services. This categorical data collection includes:
                </p>
                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>Professional Identity:</strong> Full legal name, professional titles, organizational hierarchy, and verified engineering credentials.</li>
                  <li><strong>Contact Parameters:</strong> Corporate email addresses, verified phone numbers, physical office locations, and preferred encrypted communication channels.</li>
                  <li><strong>Technical Project Metadata:</strong> Site-specific schematics, load requirements, topological data, and non-classified operational constraints provided during the feasibility and design phases.</li>
                  <li><strong>Digital System Logs:</strong> Detailed interaction data, including IP addresses, system-level browser headers, and session-based analytics to monitor the security and performance of our proprietary technical portals.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-trajan font-bold text-primary mb-6">2. Cookies & Advanced Analytics</h2>
                <p>
                  To optimize our digital engineering environment, we utilize persistent and session-based cookies. These are used to:
                </p>
                <ul className="list-disc pl-6 space-y-4">
                  <li>Authorize and maintain secure sessions within our client portals.</li>
                  <li>Analyze traffic patterns to optimize the rendering of complex 3D BIM models.</li>
                  <li>Remember your technical preferences and regional engineering standards.</li>
                </ul>
                <p className="mt-4">
                  You may configure your browser to reject these cookies; however, this may degrade the performance of high-fidelity technical components.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-trajan font-bold text-primary mb-6">3. Utilization of Data</h2>
                <p>
                  We utilize your data with surgical precision for the following operational objectives:
                </p>
                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>Architectural Delivery:</strong> To design, simulate, and deploy high-performance energy infrastructure solutions tailored to your organization&apos;s specific consumption profiles.</li>
                  <li><strong>Compliance Mastery:</strong> To maintain rigorous adherence to global safety standards (NEC, IEEE, IEC) and local jurisdictional engineering regulations.</li>
                  <li><strong>Grid Support:</strong> To provide real-time technical troubleshooting and project performance updates via our automated alert systems.</li>
                  <li><strong>System Hardening:</strong> To continuously improve the security of our OT (Operational Technology) networks through AI-driven threat modeling.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-trajan font-bold text-primary mb-6">4. Third-Party Technical Integrations</h2>
                <p>
                  To deliver world-class infrastructure, we partner with specialized technical service providers. Your data may be processed by:
                </p>
                <ul className="list-disc pl-6 space-y-4">
                  <li>Secure cloud infrastructure providers (e.g., AWS, Microsoft Azure) for technical data housing.</li>
                  <li>Specialized engineering simulation software vendors for complex load analysis.</li>
                  <li>International shipping and logistics firms for the transport of hardware components.</li>
                </ul>
                <p className="mt-4">
                  All partners are contractually bound to maintain the same level of data absolute as VoltaEdge Engineering.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-trajan font-bold text-primary mb-6">5. Data Retention & Archiving</h2>
                <p>
                  Due to the long-term nature of energy infrastructure, we retain project metadata for the lifecycle of the installed asset (typically 20-30 years) to ensure ongoing technical support, safety audits, and modernization capabilities. Non-essential professional contact information is purged 5 years after the conclusion of active technical engagement unless otherwise required by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-trajan font-bold text-primary mb-6">6. Data Integrity & Protection</h2>
                <p>
                  Security is not an overlay; it is a structural requirement. We implement:
                </p>
                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>AES-256 Encryption:</strong> For all data at rest and in transit.</li>
                  <li><strong>Zero-Trust Architecture:</strong> Ensuring that every technical access request is fully authenticated and authorized.</li>
                  <li><strong>Hardware Security Modules (HSM):</strong> For the protection of sensitive cryptographic keys and project signatures.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-trajan font-bold text-primary mb-6">4. International Information Transfer</h2>
                <p>
                  As a global engineering firm, information may be transferred across international borders to support project requirements. We ensure that such transfers comply with international data protection laws, including GDPR, CCPA, and regional engineering confidentiality standards.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-trajan font-bold text-primary mb-6">5. Your Technical Rights</h2>
                <p>
                  You retain authority over your professional data. You have the right to request access to, correction of, or deletion of your personal information stored in our systems. For inquiries regarding data authority, contact our technical security council at <span className="text-ocean font-bold">security@voltaeedge.com</span>.
                </p>
              </div>

              <div className="mt-20 p-8 bg-primary/5 rounded-2xl border border-primary/10">
                <p className="italic text-primary/60 text-sm">
                  This document serves as the definitive statement of privacy for VoltaEdge Engineering. We reserve the right to refine these protocols as technical and regulatory landscapes evolve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
