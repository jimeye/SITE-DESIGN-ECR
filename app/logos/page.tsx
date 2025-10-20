import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Propositions de Logos ECR',
  description: '20 propositions de logos pour ECR - Étude Conception Réalisations',
}

export default function LogosPage() {
  const logos = [
    {
      id: 1,
      name: 'Moderne Minimaliste',
      style: 'font-sans font-light tracking-[0.3em]',
      subtitle: 'font-sans text-xs tracking-widest uppercase opacity-60',
      shadow: '',
      twoLines: true,
    },
    {
      id: 2,
      name: 'Serif Élégant',
      style: 'font-serif font-light tracking-wider',
      subtitle: 'font-serif text-xs tracking-wide italic opacity-70',
      shadow: '',
      twoLines: true,
    },
    {
      id: 3,
      name: 'Bold & Strong',
      style: 'font-sans font-black tracking-tight',
      subtitle: 'font-sans text-xs tracking-wider font-light',
      shadow: '',
      twoLines: true,
    },
    {
      id: 4,
      name: 'Condensé Pro',
      style: 'font-sans font-bold tracking-tighter',
      subtitle: 'font-sans text-xs tracking-normal font-light',
      shadow: '',
      twoLines: true,
    },
    {
      id: 5,
      name: 'Classique Serif',
      style: 'font-serif font-normal tracking-wide',
      subtitle: 'font-serif text-xs tracking-widest uppercase font-light',
      shadow: '',
      twoLines: true,
    },
    {
      id: 6,
      name: 'Ultra Light',
      style: 'font-sans font-extralight tracking-[0.4em]',
      subtitle: 'font-sans text-xs tracking-[0.3em] font-extralight uppercase',
      shadow: '',
      twoLines: true,
    },
    {
      id: 7,
      name: 'Medium Classic',
      style: 'font-sans font-medium tracking-wide',
      subtitle: 'font-sans text-xs tracking-widest uppercase opacity-50',
      shadow: '',
      twoLines: true,
    },
    {
      id: 8,
      name: 'Serif Bold',
      style: 'font-serif font-semibold tracking-normal',
      subtitle: 'font-serif text-xs tracking-wide font-light',
      shadow: '',
      twoLines: true,
    },
    {
      id: 9,
      name: 'Spacing Large',
      style: 'font-sans font-light tracking-[0.5em]',
      subtitle: 'font-sans text-xs tracking-[0.2em] opacity-60 uppercase',
      shadow: '',
      twoLines: true,
    },
    {
      id: 10,
      name: 'Compact Heavy',
      style: 'font-sans font-extrabold tracking-tight',
      subtitle: 'font-sans text-xs tracking-wider font-extralight',
      shadow: '',
      twoLines: true,
    },
    {
      id: 11,
      name: 'Refined Serif',
      style: 'font-serif font-light tracking-[0.2em]',
      subtitle: 'font-serif text-xs tracking-widest uppercase font-extralight opacity-70',
      shadow: '',
      twoLines: true,
    },
    {
      id: 12,
      name: 'Sans Regular',
      style: 'font-sans font-normal tracking-wide',
      subtitle: 'font-sans text-xs tracking-[0.25em] uppercase font-light',
      shadow: '',
      twoLines: true,
    },
    {
      id: 13,
      name: 'Serif Thin',
      style: 'font-serif font-extralight tracking-[0.3em]',
      subtitle: 'font-serif text-xs tracking-wide italic opacity-60',
      shadow: '',
      twoLines: true,
    },
    {
      id: 14,
      name: 'Bold Sans',
      style: 'font-sans font-bold tracking-[0.15em]',
      subtitle: 'font-sans text-xs tracking-widest uppercase font-thin',
      shadow: '',
      twoLines: true,
    },
    {
      id: 15,
      name: 'Elegant Serif',
      style: 'font-serif font-normal tracking-wider',
      subtitle: 'font-serif text-xs tracking-[0.3em] uppercase font-light opacity-50',
      shadow: '',
      twoLines: true,
    },
    {
      id: 16,
      name: 'Modern Tight',
      style: 'font-sans font-semibold tracking-tight',
      subtitle: 'font-sans text-xs tracking-wide font-light opacity-70',
      shadow: '',
      twoLines: true,
    },
    {
      id: 17,
      name: 'Wide Spacing',
      style: 'font-sans font-light tracking-[0.6em]',
      subtitle: 'font-sans text-xs tracking-[0.4em] uppercase font-extralight',
      shadow: '',
      twoLines: true,
    },
    {
      id: 18,
      name: 'Serif Medium',
      style: 'font-serif font-medium tracking-[0.1em]',
      subtitle: 'font-serif text-xs tracking-widest uppercase font-light',
      shadow: '',
      twoLines: true,
    },
    {
      id: 19,
      name: 'Ultra Bold',
      style: 'font-sans font-black tracking-wide',
      subtitle: 'font-sans text-xs tracking-[0.2em] font-extralight uppercase',
      shadow: '',
      twoLines: true,
    },
    {
      id: 20,
      name: 'Refined Light',
      style: 'font-serif font-extralight tracking-[0.35em]',
      subtitle: 'font-serif text-xs tracking-[0.25em] uppercase font-thin opacity-60',
      shadow: '',
      twoLines: true,
    },
    {
      id: 21,
      name: '3D Effet Profondeur',
      style: 'font-sans font-bold tracking-[0.3em]',
      subtitle: 'font-sans text-xs tracking-widest uppercase',
      shadow: '[text-shadow:_4px_4px_8px_rgb(0_0_0_/_40%)]',
      twoLines: true,
    },
    {
      id: 22,
      name: '3D Ombre Douce',
      style: 'font-serif font-semibold tracking-wider',
      subtitle: 'font-serif text-xs tracking-wide',
      shadow: '[text-shadow:_3px_3px_12px_rgb(0_0_0_/_50%)]',
      twoLines: true,
    },
    {
      id: 23,
      name: '3D Bold Impact',
      style: 'font-sans font-black tracking-tight',
      subtitle: 'font-sans text-xs tracking-wider font-light',
      shadow: '[text-shadow:_5px_5px_15px_rgb(0_0_0_/_60%),_2px_2px_5px_rgb(0_0_0_/_40%)]',
      twoLines: true,
    },
    {
      id: 24,
      name: '3D Ombre Marquée',
      style: 'font-sans font-bold tracking-tighter',
      subtitle: 'font-sans text-xs tracking-normal font-light',
      shadow: '[text-shadow:_6px_6px_0px_rgb(212_197_169),_8px_8px_15px_rgb(0_0_0_/_50%)]',
      twoLines: true,
    },
    {
      id: 25,
      name: '3D Serif Depth',
      style: 'font-serif font-bold tracking-wide',
      subtitle: 'font-serif text-xs tracking-widest uppercase font-light',
      shadow: '[text-shadow:_4px_4px_10px_rgb(0_0_0_/_55%)]',
      twoLines: true,
    },
    {
      id: 26,
      name: '2D Décalé Beige',
      style: 'font-sans font-bold tracking-[0.4em]',
      subtitle: 'font-sans text-xs tracking-[0.3em] font-light uppercase',
      shadow: '[text-shadow:_3px_3px_0px_rgb(212_197_169)]',
      twoLines: true,
    },
    {
      id: 27,
      name: '3D Multi-Couches',
      style: 'font-sans font-extrabold tracking-wide',
      subtitle: 'font-sans text-xs tracking-widest uppercase',
      shadow: '[text-shadow:_2px_2px_0px_rgb(212_197_169),_4px_4px_0px_rgb(192_174_142),_6px_6px_12px_rgb(0_0_0_/_40%)]',
      twoLines: true,
    },
    {
      id: 28,
      name: '3D Ombre Forte',
      style: 'font-serif font-black tracking-normal',
      subtitle: 'font-serif text-xs tracking-wide font-light',
      shadow: '[text-shadow:_5px_5px_20px_rgb(0_0_0_/_70%)]',
      twoLines: true,
    },
    {
      id: 29,
      name: '2D Flat Décalé',
      style: 'font-sans font-bold tracking-[0.5em]',
      subtitle: 'font-sans text-xs tracking-[0.2em] uppercase',
      shadow: '[text-shadow:_4px_4px_0px_rgb(10_10_10)]',
      twoLines: true,
    },
    {
      id: 30,
      name: '3D Ultra Depth',
      style: 'font-sans font-black tracking-tight',
      subtitle: 'font-sans text-xs tracking-wider font-extralight',
      shadow: '[text-shadow:_1px_1px_0px_rgb(232_220_196),_3px_3px_0px_rgb(212_197_169),_5px_5px_0px_rgb(192_174_142),_7px_7px_20px_rgb(0_0_0_/_60%)]',
      twoLines: true,
    },
    {
      id: 31,
      name: '2 Lignes - Light',
      style: 'font-sans font-light tracking-[0.3em]',
      subtitle: 'font-sans text-xs tracking-widest uppercase',
      shadow: '',
      twoLines: true,
    },
    {
      id: 32,
      name: '2 Lignes - Serif',
      style: 'font-serif font-light tracking-wider',
      subtitle: 'font-serif text-xs tracking-wide uppercase',
      shadow: '',
      twoLines: true,
    },
    {
      id: 33,
      name: '2 Lignes - Bold',
      style: 'font-sans font-bold tracking-[0.2em]',
      subtitle: 'font-sans text-xs tracking-widest uppercase',
      shadow: '',
      twoLines: true,
    },
    {
      id: 34,
      name: '2 Lignes - 3D Shadow',
      style: 'font-sans font-bold tracking-[0.25em]',
      subtitle: 'font-sans text-xs tracking-[0.2em] uppercase',
      shadow: '[text-shadow:_4px_4px_8px_rgb(0_0_0_/_40%)]',
      twoLines: true,
    },
    {
      id: 35,
      name: '2 Lignes - 3D Profond',
      style: 'font-sans font-extrabold tracking-wide',
      subtitle: 'font-sans text-xs tracking-widest uppercase',
      shadow: '[text-shadow:_5px_5px_15px_rgb(0_0_0_/_60%),_2px_2px_5px_rgb(0_0_0_/_40%)]',
      twoLines: true,
    },
    {
      id: 36,
      name: '2 Lignes - Décalé Beige',
      style: 'font-sans font-bold tracking-[0.3em]',
      subtitle: 'font-sans text-xs tracking-[0.25em] uppercase',
      shadow: '[text-shadow:_3px_3px_0px_rgb(212_197_169)]',
      twoLines: true,
    },
    {
      id: 37,
      name: '2 Lignes - Multi-Couches',
      style: 'font-sans font-black tracking-tight',
      subtitle: 'font-sans text-xs tracking-wide uppercase',
      shadow: '[text-shadow:_2px_2px_0px_rgb(212_197_169),_4px_4px_0px_rgb(192_174_142),_6px_6px_12px_rgb(0_0_0_/_40%)]',
      twoLines: true,
    },
    {
      id: 38,
      name: '2 Lignes - Serif Ombré',
      style: 'font-serif font-semibold tracking-[0.15em]',
      subtitle: 'font-serif text-xs tracking-widest uppercase',
      shadow: '[text-shadow:_4px_4px_10px_rgb(0_0_0_/_55%)]',
      twoLines: true,
    },
    {
      id: 39,
      name: '2 Lignes - Flat Noir',
      style: 'font-sans font-bold tracking-[0.4em]',
      subtitle: 'font-sans text-xs tracking-[0.2em] uppercase',
      shadow: '[text-shadow:_4px_4px_0px_rgb(10_10_10)]',
      twoLines: true,
    },
    {
      id: 40,
      name: '2 Lignes - Ultra 3D',
      style: 'font-sans font-black tracking-normal',
      subtitle: 'font-sans text-xs tracking-wide uppercase',
      shadow: '[text-shadow:_1px_1px_0px_rgb(232_220_196),_3px_3px_0px_rgb(212_197_169),_5px_5px_0px_rgb(192_174_142),_7px_7px_20px_rgb(0_0_0_/_60%)]',
      twoLines: true,
    },
  ]

  return (
    <div className="min-h-screen bg-neutral-cream py-32">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-20 text-center">
          <h1 className="heading-lg mb-4">Propositions de Logos ECR</h1>
          <p className="text-lg text-primary-700">
            40 variations typographiques : styles purs, effets 3D/2D, et versions 2 lignes
          </p>
        </div>

        {/* Grid de logos */}
        <div className="grid gap-12 md:grid-cols-2">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="group relative bg-white p-12 transition-all duration-300 hover:shadow-lg"
            >
              {/* Numéro */}
              <div className="absolute right-6 top-6 text-xs font-light text-primary-400">
                #{logo.id}
              </div>

              {/* Logo */}
              <div className="mb-8 flex min-h-[160px] flex-col items-center justify-center border-b border-primary-100 pb-8">
                <div
                  className={`${logo.style} ${logo.shadow} mb-4 text-5xl text-primary-950 md:text-6xl`}
                >
                  ECR
                </div>
                {logo.twoLines ? (
                  <div className="text-center">
                    <div className={`${logo.subtitle} ${logo.shadow && logo.id >= 21 ? '[text-shadow:_2px_2px_4px_rgb(0_0_0_/_30%)]' : ''} text-primary-800`}>
                      Étude Conception
                    </div>
                    <div className={`${logo.subtitle} ${logo.shadow && logo.id >= 21 ? '[text-shadow:_2px_2px_4px_rgb(0_0_0_/_30%)]' : ''} text-primary-800`}>
                      Réalisations
                    </div>
                  </div>
                ) : (
                  <div className={`${logo.subtitle} ${logo.shadow && logo.id >= 21 ? '[text-shadow:_2px_2px_4px_rgb(0_0_0_/_30%)]' : ''} text-primary-800`}>
                    Étude Conception Réalisations
                  </div>
                )}
              </div>

              {/* Nom de la variation */}
              <div className="text-center">
                <p className="text-sm font-medium uppercase tracking-wider text-primary-700">
                  {logo.name}
                </p>
              </div>

              {/* Version avec fond sombre */}
              <div className="mt-8 flex min-h-[120px] items-center justify-center bg-primary-950 p-8">
                <div className="text-center">
                  <div
                    className={`${logo.style} ${logo.shadow} mb-2 text-4xl text-white md:text-5xl`}
                  >
                    ECR
                  </div>
                  {logo.twoLines ? (
                    <div className="text-center">
                      <div className={`${logo.subtitle} ${logo.shadow && logo.id >= 21 ? '[text-shadow:_2px_2px_6px_rgb(0_0_0_/_50%)]' : ''} text-neutral-beige`}>
                        Étude Conception
                      </div>
                      <div className={`${logo.subtitle} ${logo.shadow && logo.id >= 21 ? '[text-shadow:_2px_2px_6px_rgb(0_0_0_/_50%)]' : ''} text-neutral-beige`}>
                        Réalisations
                      </div>
                    </div>
                  ) : (
                    <div className={`${logo.subtitle} ${logo.shadow && logo.id >= 21 ? '[text-shadow:_2px_2px_6px_rgb(0_0_0_/_50%)]' : ''} text-neutral-beige`}>
                      Étude Conception Réalisations
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div className="mt-20 rounded-none bg-primary-950 p-12 text-center">
          <h2 className="heading-sm mb-4 text-white">Notes d'utilisation</h2>
          <p className="mx-auto max-w-3xl text-neutral-beige/80">
            Chaque proposition est présentée sur fond clair et fond sombre. 
            <strong className="text-white"> N°1-20 :</strong> Styles typographiques purs. 
            <strong className="text-white"> N°21-30 :</strong> Effets 3D/2D prononcés avec ombrages marqués. 
            <strong className="text-white"> N°31-40 :</strong> Versions 2 lignes avec "Réalisations" séparé, incluant styles purs et effets 3D.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="rounded-none bg-accent px-6 py-3">
              <span className="text-sm uppercase tracking-wider text-primary-950">
                Typographies : Inter + Playfair Display
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

