interface LogoProps {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`${className}`}>
      {/* Logo #14 - Bold Sans avec 2 lignes (+10%) */}
      <div className="text-center leading-none">
        <div className="font-sans text-[1.96rem] font-bold tracking-[0.15em] leading-none mb-0.5">
          ECR
        </div>
        <div className="font-sans text-[0.586rem] font-bold uppercase tracking-widest leading-none">
          Étude Conception
        </div>
        <div className="font-sans text-[0.586rem] font-bold uppercase tracking-widest leading-none">
          Réalisations
        </div>
      </div>
    </div>
  )
}

