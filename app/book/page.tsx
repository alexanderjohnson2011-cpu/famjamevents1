import { BookingForm } from '@/components/BookingForm';

interface BookPageProps {
  searchParams: Record<string, string | string[] | undefined>;
}

export default function BookPage({ searchParams }: BookPageProps) {
  const pick = (key: string) => {
    const value = searchParams[key];
    return Array.isArray(value) ? value[0] : value;
  };

  const estimate = {
    serviceType: pick('serviceType'),
    hours: pick('hours'),
    basePrice: pick('basePrice'),
    extraHours: pick('extraHours'),
    totalPrice: pick('totalPrice'),
    pageSource: pick('pageSource'),
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl md:text-6xl font-black text-vice-ink mb-4">Book Your Event</h1>
          <p className="text-xl text-vice-muted max-w-3xl mx-auto">
            Request your date below. Booking is quote/confirm-first — no payment is collected on this form.
          </p>
        </div>
        <BookingForm initialEstimate={estimate} />
      </div>
    </section>
  );
}
