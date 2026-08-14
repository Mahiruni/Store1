import type { Metadata } from "next";

export const metadata: Metadata = { title: "Help & care", description: "Straightforward KINROW shipping, returns, fit, and product guidance." };

const questions = [
  ["Is KINROW suitable for beginners?", "Yes. Begin with the lightest resistance you can control. Move slowly and ask a qualified professional if you are returning after injury or managing a medical condition."],
  ["When will my order arrive?", "The planned service level is 1–2 business days for processing, followed by 7–12 business days for standard US delivery after dispatch. This must be verified before launch."],
  ["Can I return an opened product?", "The planned 30-day trial allows careful home use. All components must be returned, with no damage beyond normal evaluation."],
  ["How much space do I need?", "For most movements, allow enough room to lie on a mat with your arms extended. The equipment itself is designed for shelf, drawer, or upright storage."],
  ["Are results guaranteed?", "No. Tools can support a consistent routine, but outcomes depend on use, progression, recovery, and individual circumstances."],
];

export default function HelpPage() {
  return (
    <div className="help-page shell">
      <header className="page-hero"><div><p className="eyebrow">Help & care</p><h1>Clear answers,<br />before checkout.</h1></div><p>We’re building support around the same principle as the products: calm, precise, and useful.</p></header>
      <section className="help-cards"><article><span>01</span><h2>Orders</h2><p>Shipping, tracking, returns, or a change to an order.</p><a href="mailto:care@kinrow.co">care@kinrow.co</a></article><article><span>02</span><h2>Product guidance</h2><p>Starting resistance, setup, care, and replacement components.</p><a href="mailto:care@kinrow.co">Ask a product question</a></article><article><span>03</span><h2>Response time</h2><p>A human response within one business day, Monday through Friday.</p><strong>No support bots at launch.</strong></article></section>
      <section className="faq-section" id="faq"><div><p className="eyebrow">Frequently asked</p><h2>Before you begin.</h2></div><div>{questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>
    </div>
  );
}
