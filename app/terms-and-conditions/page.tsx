import { ComplianceSidebar } from "@/components/ComplianceSidebar";

export default function TermsAndConditionsPage() {
  return (
    <div className="pt-32 pb-24 max-w-6xl mx-auto px-4 min-h-[60vh] flex flex-col lg:flex-row gap-12">
      <div className="lg:w-3/4">
        <h1 className="text-4xl font-bold text-brand-navy mb-10">Terms & Conditions</h1>
      <div className="prose prose-lg text-brand-text-muted max-w-none">
        <p>Welcome to our website. By continuing to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Rivo Lending’s relationship with you regarding this website. If you disagree with any part of these terms, please do not use our website.</p>
        <p>The term ‘Rivo Lending’, ‘us’, or ‘we’ refers to the owner of the website, a business name of Sanskriti Holdings Pty Ltd. The term ‘you’ refers to the user or viewer of our website.</p>

        <h2>Content</h2>
        <p>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</p>

        <h2>Cookies and Unauthorized Use</h2>
        <p>This website uses cookies to monitor browsing preferences. If you allow cookies to be used, any personal information stored by us may be used as detailed in our Privacy Policy.</p>

        <h2>Warranty</h2>
        <p>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors, and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</p>

        <h2>Liability</h2>
        <p>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It is your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.</p>

        <h2>Ownership</h2>
        <p>All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.</p>

        <h2>Links to other websites</h2>
        <p>From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).</p>

        <h2>Use Licence</h2>
        <p>Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only. This is the grant of a licence, not a transfer of title, and under this licence you may not:</p>
        <ul>
            <li>Modify or copy the materials;</li>
            <li>Use the materials for any commercial purpose, or for any public display;</li>
            <li>Attempt to decompile or reverse engineer any software contained on our website;</li>
            <li>Remove any copyright or other proprietary notations from the materials; or</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
        </ul>
        <p>This licence shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time. Upon terminating your viewing of these materials or upon the termination of this licence, you must destroy any downloaded materials in your possession whether in electronic or printed format.</p>

        <h2>Governing law</h2>
        <p>Your use of this website and any dispute arising out of such use of the website is subject to the laws of Australia.</p>
      </div>
      </div>
      <div className="lg:w-1/4">
        <div className="sticky top-32">
          <ComplianceSidebar />
        </div>
      </div>
    </div>
  );
}
