
const InfoSection = ({ title, items, description }) => {
  return (
    <div className="mb-9">
      {title && <h3 className="text-2xl font-bold mb-4 text-cyan-400 border-b-2 border-cyan-400/30 pb-2">{title}</h3>}

      {items && (
        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-start py-3 border-b border-white/10 gap-5 last:border-b-0"
            >
              <span className="font-semibold text-cyan-400 min-w-[120px] flex-shrink-0">{item.label}</span>
              <span className="text-white text-right flex-1">{item.value}</span>
            </div>
          ))}
        </div>
      )}

      {description && <p className="leading-relaxed text-slate-200 text-base">{description}</p>}
    </div>
  )
}

export default InfoSection
