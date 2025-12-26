import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
    "$4.88M → Average breach cost saved",
    "$2.2M → AI-automation saving per incident",
    "77% → Faster recovery with IR plan",
    "50× → ROI of phishing training",
    "351% → Recorded Future intel ROI",
    "$300K/hr → Downtime cost avoided",
    "80% → Attacks blocked by EDR",
    "95% → Human-error breaches cut via training",
    "25% → Cloud spend saved by secure rightsizing",
    "209% → Brand-risk reduction ROI",
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
