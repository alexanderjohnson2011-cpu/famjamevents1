// ─────────────────────────────────────────────────────────────────────────────
// PRICING DATA — Edit this file in GitHub to update the calculator instantly.
// All prices shown are client-facing (markup already applied).
// ─────────────────────────────────────────────────────────────────────────────
window.PRICING_DATA = {

  venue: {
    hourly: {
      minHours: 3,
      maxHours: 12,
      tiers: [
        { min: 1,  max: 5,   ratePerHour: 65  },
        { min: 6,  max: 10,  ratePerHour: 85  },
        { min: 11, max: 15,  ratePerHour: 100 },
        { min: 16, max: 20,  ratePerHour: 110 },
        { min: 21, max: 30,  ratePerHour: 115 },
        { min: 31, max: 40,  ratePerHour: 125 },
        { min: 41, max: 50,  ratePerHour: 160 },
        { min: 51, max: 60,  ratePerHour: 200 },
        { min: 61, max: 70,  ratePerHour: 250 },
        { min: 71, max: 80,  ratePerHour: 300 },
        { min: 81, max: 90,  ratePerHour: 350 },
        { min: 91, max: 100, ratePerHour: 400 }
      ]
    },
    fullDay: {
      // Pricing based on 8-hr rate for each guest bucket
      under50: 1280,   // 41-50 guest tier × 8 hrs
      over50:  3200    // 91-100 guest tier × 8 hrs
    }
  },

  catering: {
    gourmet:      { pricePerPerson: 42, label: "Gourmet" },
    fingerFoods:  { pricePerPerson: 30, label: "Casual – Finger Foods" },
    kidParty:     { pricePerPerson: 30, label: "Casual – Kid Party Menu" },
    tacoTable:    { pricePerPerson: 30, label: "Casual – Taco Table" },
    grazingTable: { pricePerPerson: 36, label: "Grazing Table" }
  },

  bartender: {
    single:   { pricePerHour: 90,  label: "1 Bartender",  recommendedMaxGuests: 60 },
    double:   { pricePerHour: 144, label: "2 Bartenders", recommendedMinGuests: 61 },
    minHours: 3,
    note: "Alcohol NOT included. Bartender collaborates on cocktail menu and ordering list."
  },

  decor: {
    freshFlowers: { flatRate: 240, label: "Fresh Flowers – All Tables" },
    tablecloths:  { flatRate: 0,   label: "Tablecloths & Color-Matched Runners", included: true },
    backdrop:     { flatRate: 0,   label: "Glitter Backdrop + Birthday Sign",    included: true },
    neonSign:     { flatRate: 120, label: "Custom Neon Name Sign" }
  },

  balloons: {
    small:  { flatRate: 360,  label: "Small – Accent Package" },
    medium: { flatRate: 600,  label: "Medium – Full Arch" },
    large:  { flatRate: 960,  label: "Large – Full Arch + Accents Throughout" }
  },

  dj: {
    baseRate:       400,
    baseHours:      3,
    additionalRate: 100,
    label: "DJ"
  },

  photobooth: {
    flatRate: 300,
    label: "Photo Booth"
  },

  bounceHouse: {
    flatRate: 200,
    label: "Bounce House"
  },

  lifeguard: {
    pricePerHour: 42,
    minHours: 3,
    label: "Lifeguard"
  },

  bundlingDiscounts: {
    // Venue discounts unlocked when non-venue client spend meets threshold
    tiers: [
      { minNonVenueSpend: 500,  venueDiscountPct: 0.10, label: "10% venue discount" },
      { minNonVenueSpend: 1000, venueDiscountPct: 0.25, label: "25% venue discount" },
      { minNonVenueSpend: 2000, venueDiscountPct: 0.50, label: "50% venue discount" },
      { minNonVenueSpend: 3500, venueDiscountPct: 0.75, label: "75% venue discount" }
    ]
  },

  // ── Paste your Zapier Catch Hook URL here once you've set up your Zap ──
  zapierWebhookUrl: "YOUR_ZAPIER_WEBHOOK_URL_HERE"

};
