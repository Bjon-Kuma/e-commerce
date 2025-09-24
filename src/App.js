import './App.css';

const modules = [
  {
    id: 'landing',
    icon: '🏠',
    title: 'Página de Inicio (Landing Page)',
    description:
      'Presenta la marca y ofrece acceso directo a las acciones más utilizadas desde cualquier dispositivo.',
    bullets: [
      'Identidad visual, logo y mensaje en un layout mobile-first.',
      'CTA gemelos: "Reservar turno" y contacto inmediato por WhatsApp.',
      'Integración con Google My Maps para mostrar locales destacados sin salir del sitio.'
    ]
  },
  {
    id: 'map',
    icon: '🗺️',
    title: 'Mapa de Comercios Activos',
    description:
      'Unifica todas las barberías o comercios asociados con estados visibles en tiempo real.',
    bullets: [
      'Marcadores por color: disponible, tentativo, ocupado u offline.',
      'Ficha emergente con horarios, servicios, stock y enlaces de reserva.',
      'Filtros por categoría o inventario embebidos desde Google My Maps.'
    ]
  },
  {
    id: 'booking',
    icon: '📅',
    title: 'Formulario de Reserva Automática',
    description:
      'Captura los datos del cliente y dispara una reserva confirmada en los calendarios del negocio.',
    bullets: [
      'Campos personalizables: cliente, servicio, fecha, hora y productos opcionales.',
      'Apps Script crea eventos en Google Calendar y notifica por email o WhatsApp.',
      'Respuestas almacenadas en Google Sheets para reportes inmediatos.'
    ]
  },
  {
    id: 'merchant',
    icon: '🧑\u200d💼',
    title: 'Panel del Comerciante',
    description:
      'Un espacio organizado para cada comercio donde se controla agenda, inventario y equipo.',
    bullets: [
      'Vista calendario sincronizada con reservas confirmadas y pendientes.',
      'Historial de clientes y asignación por empleado directamente desde Sheets.',
      'Inventario simple de productos y control de entregas con filtros avanzados.'
    ]
  },
  {
    id: 'admin',
    icon: '🔒',
    title: 'Panel del Administrador',
    description:
      'Permite al director del sistema supervisar comercios, promociones y contenido destacado.',
    bullets: [
      'Aprobación de nuevos negocios con permisos diferenciados en Google Sheets.',
      'Panel global con estadísticas de reservas y reglas automatizadas por Apps Script.',
      'Bloques promocionales para destacar barberías o lanzar campañas internas.'
    ]
  }
];

const automations = [
  {
    title: 'Reserva confirmada en segundos',
    steps: [
      'El cliente completa el Google Form incrustado en la WebApp.',
      'Apps Script valida la disponibilidad y crea el evento en Google Calendar.',
      'Se envía email / WhatsApp con la confirmación y detalles del servicio.'
    ]
  },
  {
    title: 'Gestión de inventario simplificada',
    steps: [
      'Cada comercio registra stock y productos en Google Sheets.',
      'Al recibir una reserva con producto, Apps Script actualiza el inventario.',
      'Se generan alertas automáticas cuando un artículo llega al mínimo establecido.'
    ]
  },
  {
    title: 'Panel administrador siempre actualizado',
    steps: [
      'Los comercios proponen promociones desde su hoja dedicada.',
      'El director revisa y aprueba desde la vista consolidada.',
      'Las promociones aparecen en la Landing y en los mapas sin intervención manual.'
    ]
  }
];

const googleTools = [
  {
    name: 'Google Sites',
    description: 'Estructura el front-end responsivo con anclas y menús mobile-first.'
  },
  {
    name: 'Google My Maps',
    description: 'Centraliza locales, categorías y estados de disponibilidad mediante iframes.'
  },
  {
    name: 'Google Forms',
    description: 'Recoge datos de clientes y servicios, incluyendo productos opcionales.'
  },
  {
    name: 'Google Calendar',
    description: 'Sincroniza automáticamente las reservas confirmadas y recordatorios.'
  },
  {
    name: 'Google Sheets',
    description: 'Base operativa para historial de clientes, inventario y reportes.'
  },
  {
    name: 'Apps Script',
    description: 'Orquesta la automatización entre formularios, calendarios y notificaciones.'
  }
];

const benefits = [
  'No requiere login para los clientes: reserva en dos toques desde el celular.',
  'Se puede instalar como acceso directo (PWA) para operar como app nativa.',
  'Escalable: arquitectura lista para migrar a React + Firebase + pagos integrados.',
  'Cada comercio obtiene un enlace o QR propio con branding personalizable.',
  'Todo se apoya en herramientas gratuitas de Google para minimizar costos operativos.'
];

function App() {
  return (
    <div className="app">
      <header className="top-bar">
        <div className="brand">
          <span className="brand-icon" aria-hidden="true">
            📅
          </span>
          <span className="brand-text">AgendaPro</span>
        </div>
        <nav className="main-nav" aria-label="Secciones principales">
          <a href="#home">Inicio</a>
          <a href="#modules">Módulos</a>
          <a href="#map-showcase">Mapa</a>
          <a href="#automation">Automatizaciones</a>
          <a href="#contact">Contacto</a>
        </nav>
        <a className="nav-cta" href="#contact">
          Solicitar demo
        </a>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-text">
            <span className="badge">PWA lista para instalar</span>
            <h1>AgendaPro – Sistema de reservas online para negocios locales</h1>
            <p>
              Centraliza turnos, productos y promociones en una WebApp responsive que
              aprovecha al máximo el ecosistema gratuito de Google. Diseñada para
              barberías, salones, consultorios y cualquier comercio que necesite
              ordenar su agenda sin inversiones complejas.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#booking-demo">
                Reservar turno demo
              </a>
              <a className="button ghost" href="#modules">
                Ver funcionalidades
              </a>
            </div>
            <ul className="hero-highlights">
              <li>Diseño mobile-first con instalación como app en el hogar.</li>
              <li>Automatizaciones con Apps Script para calendarios y alertas.</li>
              <li>Multi-comercio: suma locales ilimitados con filtros personalizados.</li>
            </ul>
          </div>
          <div className="hero-card">
            <div className="hero-card-header">
              <span>Próximos turnos</span>
              <span>Hoy</span>
            </div>
            <ul className="hero-calendar">
              <li>
                <span className="dot available" aria-hidden="true" />
                <div>
                  <strong>10:00</strong>
                  <p>Alejandro · Corte + Barba</p>
                </div>
              </li>
              <li>
                <span className="dot tentative" aria-hidden="true" />
                <div>
                  <strong>12:30</strong>
                  <p>Lucía · Color + Tratamiento</p>
                </div>
              </li>
              <li>
                <span className="dot busy" aria-hidden="true" />
                <div>
                  <strong>16:00</strong>
                  <p>Julián · Afeitado premium</p>
                </div>
              </li>
            </ul>
            <p className="hero-note">
              Conecta con Google Calendar y envía recordatorios automáticos.
            </p>
          </div>
        </section>

        <section id="modules" className="section">
          <h2>Módulos listos para implementar</h2>
          <p className="section-intro">
            Cada bloque de AgendaPro está pensado para replicarse en minutos y
            adaptarse al branding de cada comercio sin conocimientos técnicos.
          </p>
          <div className="cards-grid">
            {modules.map((module) => (
              <article key={module.id} className="card">
                <header className="card-header">
                  <span className="card-icon" aria-hidden="true">
                    {module.icon}
                  </span>
                  <h3>{module.title}</h3>
                </header>
                <p>{module.description}</p>
                <ul>
                  {module.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="map-showcase" className="section highlight">
          <div className="section-header">
            <h2>Mapa interactivo en vivo</h2>
            <p>
              El mapa se incrusta desde Google My Maps, lo que permite a cada
              comercio actualizar direcciones, servicios y estados sin editar la
              WebApp. Los clientes pueden filtrar por categoría, disponibilidad o
              stock antes de reservar.
            </p>
          </div>
          <div className="map-wrapper" role="figure" aria-label="Mapa de locales AgendaPro">
            <iframe
              title="Mapa de comercios AgendaPro"
              src="https://www.google.com/maps/d/embed?mid=1zH8EhKLX4tEUq9MXgA6RCgh4kL2R3rY&ehbc=2E312F"
              loading="lazy"
              allowFullScreen
            />
          </div>
          <div className="legend">
            <span><span className="dot available" aria-hidden="true" /> Disponible</span>
            <span><span className="dot tentative" aria-hidden="true" /> Tentativo</span>
            <span><span className="dot busy" aria-hidden="true" /> Ocupado</span>
            <span><span className="dot offline" aria-hidden="true" /> Offline</span>
          </div>
        </section>

        <section id="booking-demo" className="section">
          <div className="two-column">
            <div>
              <h2>Formulario de reservas con automatización total</h2>
              <p>
                Con Google Forms + Apps Script, cada envío genera una reserva y
                envía notificaciones personalizadas. Puedes clonar la plantilla y
                personalizar servicios, empleados, precios y recordatorios.
              </p>
              <ul className="checklist">
                <li>Validación de agenda en tiempo real.</li>
                <li>Confirmación automática al cliente y al negocio.</li>
                <li>Sincronización inmediata con Google Calendar.</li>
              </ul>
            </div>
            <div className="form-wrapper" role="figure" aria-label="Demo del formulario de reserva">
              <iframe
                title="Formulario de reserva AgendaPro"
                src="https://docs.google.com/forms/d/e/1FAIpQLSc6zJf4dEfBZmV7K9NmJT8-IDy5SgqxGn8xp25fH344JF0P5Q/viewform?embedded=true"
                loading="lazy"
              >
                Cargando…
              </iframe>
            </div>
          </div>
        </section>

        <section id="automation" className="section highlight">
          <h2>Flujos automatizados con Apps Script</h2>
          <p className="section-intro">
            AgendaPro se apoya en automatizaciones que eliminan tareas manuales y
            aseguran que cada parte del sistema esté sincronizada 24/7.
          </p>
          <div className="cards-grid">
            {automations.map((automation) => (
              <article key={automation.title} className="card">
                <h3>{automation.title}</h3>
                <ol>
                  {automation.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Herramientas de Google integradas</h2>
          <div className="tools-grid">
            {googleTools.map((tool) => (
              <article key={tool.name} className="tool-card">
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Beneficios clave para el negocio</h2>
          <ul className="benefits">
            {benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </section>

        <section id="contact" className="section cta">
          <div className="cta-content">
            <h2>Listo para lanzar AgendaPro en tu ciudad</h2>
            <p>
              Recibe la plantilla completa, las automatizaciones listas y un paso a
              paso para replicar el sistema con múltiples comercios. Ideal para
              agencias locales, franquicias o emprendedores digitales.
            </p>
            <div className="cta-actions">
              <a className="button primary" href="https://wa.me/549000000000" target="_blank" rel="noreferrer">
                Contactar por WhatsApp
              </a>
              <a className="button ghost" href="mailto:hola@agendapro.com">
                Solicitar documentación
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} AgendaPro · Sistema integral de reservas para comercios locales.</p>
        <p className="footer-note">Migración lista a React + Firebase + pasarelas de pago cuando el negocio lo requiera.</p>
      </footer>
    </div>
  );
}

export default App;
