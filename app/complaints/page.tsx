import { ComplianceSidebar } from "@/components/ComplianceSidebar";

export default function ComplaintsPage() {
  return (
    <div className="pt-32 pb-24 max-w-6xl mx-auto px-4 min-h-[60vh] flex flex-col lg:flex-row gap-12">
      <div className="lg:w-3/4">
        <h1 className="text-4xl font-bold text-brand-navy mb-10">Complaints & Dispute Resolution</h1>
      <div className="prose prose-lg text-brand-text-muted max-w-none">
        <p>At Rivo Lending, we are committed to providing the highest level of service. However, if something goes wrong or you are dissatisfied with our services, we want to hear from you so we can make things right.</p>
        
        <h2>How to Make a Complaint</h2>
        <p>If you have a complaint, please contact us first. You can reach out to us using the following details:</p>
        <ul>
          <li><strong>Phone:</strong> 0451 178 375</li>
          <li><strong>Email:</strong> info@rivolending.com.au</li>
          <li><strong>Business Name:</strong> Rivo Lending (Credit Representative No. 550551)</li>
        </ul>
        <p>Please provide as much information as possible about your complaint, including your contact details, so we can investigate the matter thoroughly.</p>
        
        <h2>Our Internal Dispute Resolution Process</h2>
        <p>Once we receive your complaint, we will:</p>
        <ol>
          <li>Acknowledge receipt of your complaint within 1 business day (or as soon as practicable).</li>
          <li>Investigate your concerns fairly and objectively.</li>
          <li>Provide you with a written response outlining the outcome of our investigation within 30 days.</li>
        </ol>
        <p>If we require more time to investigate your complaint, we will notify you of the delay and the reasons for it.</p>
        
        <h2>External Dispute Resolution</h2>
        <p>If you are not satisfied with our response or if your complaint is not resolved within 30 days, you have the right to escalate the matter to our external dispute resolution scheme, the Australian Financial Complaints Authority (AFCA).</p>
        <p>AFCA provides a free and independent dispute resolution service for consumers and small businesses.</p>
        
        <h3>AFCA Contact Details:</h3>
        <ul>
          <li><strong>Phone:</strong> 1800 931 678 (free call)</li>
          <li><strong>Email:</strong> info@afca.org.au</li>
          <li><strong>Website:</strong> www.afca.org.au</li>
          <li><strong>Mail:</strong> GPO Box 3, Melbourne VIC 3001</li>
        </ul>
        
        <p>Please note that you should try to resolve your complaint with us directly before contacting AFCA.</p>
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
