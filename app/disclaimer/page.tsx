import { ComplianceSidebar } from "@/components/ComplianceSidebar";

export default function DisclaimerPage() {
  return (
    <div className="pt-32 pb-24 max-w-6xl mx-auto px-4 min-h-[60vh] flex flex-col lg:flex-row gap-12">
      <div className="lg:w-3/4">
        <h1 className="text-4xl font-bold text-brand-navy mb-10">Website Disclaimer</h1>
      <div className="prose prose-lg text-brand-text-muted max-w-none">
        <h2>Disclaimer and Liability Limitation</h2>
        <p>The content of the website rivolending.com.au includes text, software, graphics, and advertisements provided by Rivo Lending, its affiliates, third parties, and its independent contractors. While Rivo Lending takes reasonable steps to ensure that the information on its website is correct, it makes no representations that the content will be complete, accurate, reliable, suitable, or up to date, and that your access to the website will be free from interruption or errors.</p>
        
        <p>Rivo Lending does not accept any responsibility or liability for any actions taken as a result of, or in reliance on, information on its website. In addition, Rivo Lending reserves the right to change information on its website at any time and without notice in its absolute discretion.</p>

        <p>Rivo Lending does not warrant or guarantee that its website or web services will be available uninterrupted or free from errors or viruses and accepts no liability for any loss or damage suffered by any user. Users use the Rivo Lending website entirely at their own risk.</p>

        <p>If you believe any information on the Rivo Lending website is inaccurate, out of date, or misleading, please bring it to our attention by emailing info@rivolending.com.au.</p>

        <h2>Exclusions</h2>
        <p>To the extent allowable by law, Rivo Lending and its affiliates exclude:</p>
        <ul>
            <li>All warranties, circumstances, and terms implied by regulation, general law, or worldwide convention including, without restriction, any and all implied warranties with respect to merchantability, suitability of purpose, title, and non-infringement; and</li>
            <li>Liability to you or any person in respect of any loss or damage arising out of or in connection with any use of the website or the information provided through the website. This includes all liability in respect of consequential, incidental, indirect, extraordinary, punitive, or exemplary damages (such as loss of profits, loss or corruption of data, and loss of goodwill) even if it has been advised of the likelihood of such loss or damage.</li>
        </ul>
        <p>Where the law implies any phrase in relation to your use of the website or any understanding arising out of your accessing the website, and that law prohibits the exclusion of that phrase, then that phrase is included. However, to the amount permitted by law, Rivo Lending and its affiliates limit their liability for a breach of such phrase to the resupply of services.</p>

        <h2>Intellectual Property</h2>
        <p>All trademarks displayed on this website are trademarks of their respective owners. Nothing contained on the website should be construed as granting any licence or right to use any trademark displayed on the website without the express written permission of Rivo Lending or the relevant third-party owner.</p>

        <h2>Copyright</h2>
        <p>The copyright in the content is owned by Rivo Lending, its suppliers, and/or licensors unless specifically indicated otherwise on the website. The content is protected by Australian and international copyright and trademark laws and is supplied for information use only.</p>
        <p>Except as explicitly provided for above and separately from any fair dealing permitted under the Copyright Act 1968, Rivo Lending grants visitors to the website a licence to download, display, print, and reproduce this material for private use or within your organisation, for non-commercial purposes only.</p>
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
