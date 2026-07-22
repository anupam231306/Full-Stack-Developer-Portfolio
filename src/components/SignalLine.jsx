// SignalLine — the site's signature motif.
// A thin animated waveform that runs between sections, representing
// "signal" — code, craft, and continuity threading through the page.
export default function SignalLine({ flat = false }) {
  return (
    <div className="w-full flex justify-center py-2 select-none" aria-hidden="true">
      <svg
        width="220"
        height="24"
        viewBox="0 0 220 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={
            flat
              ? 'M0 12 H220'
              : 'M0 12 H70 L82 2 L94 22 L106 2 L118 22 L130 12 H220'
          }
          stroke="rgb(var(--color-gold))"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="400"
          className="animate-pulseLine"
          opacity="0.7"
        />
      </svg>
    </div>
  )
}
