// import DotGrid from "./DotGrid"
import DotGrid from "./Background.jsx"

const GlobalBackground = () => {
  return (
    <div className="fixed bg-slate-600 inset-0 -z-10">
      <DotGrid
        dotSize={5}
        gap={15}
        baseColor="#10B981"     // green
        activeColor="#3B82F6"   // blue
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
    </div>
  )
}

export default GlobalBackground
