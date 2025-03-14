export default function Statistics() {
    return (
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Happy Dental Statistic</h2>
            <p className="max-w-2xl text-white/80">
              Purus turpis volutpat sem sed blandit. In at egestas ut adipiscing et adipiscing! Fusce integer aliquet ut
              neque. Risus enim nisi quam imperdiet. Sed turpis tellus quisque tellus quam malesuada magna amet elit.
            </p>
          </div>
  
          <div className="grid grid-cols-3 gap-8">
            {[
              { number: "780+", label: "Happy Patient" },
              { number: "560+", label: "Online Appointment" },
              { number: "340+", label: "Writing Awards" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-5xl font-bold text-tertiary mb-2">{stat.number}</h3>
                <p className="text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  