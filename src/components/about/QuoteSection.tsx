export default function QuoteSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <blockquote className="text-2xl font-medium text-gray-900 italic">
          "If you can't show through an audit trail how you arrived at the numbers on your balance sheet, that is a significant internal control failure."
        </blockquote>
        <p className="mt-4 text-lg font-semibold text-brand-secondary">Robert Cobb</p>
        <p className="text-gray-500">Auditor</p>
      </div>
    </section>
  );
}
