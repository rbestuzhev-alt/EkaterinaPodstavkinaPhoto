import { useEffect, useRef } from 'react';
import './portfolio.css';

/* ============================================
   SVG КОМПОНЕНТЫ
   ============================================ */

const ArrowIcon = () => (
  <svg className="arrow-icon" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="6" x2="34" y2="6" stroke="currentColor" strokeWidth="1.2" />
    <polyline points="30,2 36,6 30,10" fill="none" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);





/* ============================================
   ГЛАВНЫЙ КОМПОНЕНТ ПРИЛОЖЕНИЯ
   ============================================ */

export default function App() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /* ---------- Intersection Observer для .reveal ---------- */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const openMenu = () => {
    overlayRef.current?.classList.add('active');
  };

  const closeMenu = () => {
    overlayRef.current?.classList.remove('active');
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* ========== МОБИЛЬНОЕ МЕНЮ ========== */}
      <div className="mobile-overlay" ref={overlayRef}>
        <button className="mobile-overlay__close" onClick={closeMenu} aria-label="Закрыть меню">×</button>
        <a href="#about" onClick={closeMenu}>О себе</a>
        <a href="#portfolio" onClick={closeMenu}>Портфолио</a>
        <a href="#services" onClick={closeMenu}>Услуги</a>
        <a href="#journal" onClick={closeMenu}>Журнал</a>
        <a href="#contact" onClick={closeMenu}>Контакты</a>
      </div>

      {/* ========== HERO СЕКЦИЯ ========== */}
      <header className="hero" id="hero">
        <div className="hero__bg">
          <img
            src="https://i.postimg.cc/MZmBXBHJ/hiro-fon-kati.webp"
            alt="hiro-fon-kati"
          />
        </div>
        <div className="hero__overlay"></div>

        <div className="hero__top">
          <div className="hero__socials">
            <a href="https://www.instagram.com/eppho.to/?hl=ru" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://t.me/pro100katerinkaa" target="_blank" rel="noopener noreferrer" aria-label="Telegram" title="Telegram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z"/>
              </svg>
            </a>
            <a href="tel:+70000000000" aria-label="Телефон" title="Телефон">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </a>
          </div>
          <a href="#contact" className="hero__join arrow-link">
            ПОДПИСАТЬСЯ <ArrowIcon />
          </a>
          <button className="mobile-menu-btn" onClick={openMenu}>
            Меню <ArrowIcon />
          </button>
        </div>

        <h1 className="hero__name">
          ПОДСТАВКИНА<br />ЕКАТЕРИНА
        </h1>

        <div className="hero__nav">
          <nav>
            <a href="#about">О СЕБЕ</a>
            <a href="#portfolio">ПОРТФОЛИО</a>
            <a href="#services">УСЛУГИ</a>
            <a href="#journal">ЖУРНАЛ</a>
            <a href="#contact">КОНТАКТЫ</a>
          </nav>
        </div>

        <p className="hero__tagline">
          Ловлю свет и создаю <em>истории</em>.
        </p>
      </header>

      {/* ========== МАНИФЕСТ ========== */}
      <section className="manifesto" id="about">
        <div className="manifesto__inner">
          <h2 className="manifesto__headline mixed-headline reveal">
            <em>ты</em> НЕ ПОЗИРУЕШЬ.
          </h2>

          <div className="manifesto__collage reveal">
            <img
              className="manifesto__collage-img1"
              src="https://i.postimg.cc/wMnMn920/611280113-17850826491613066-4070977003915591454-n.jpg"
              alt="Кадр со съёмки Екатерины Подставкиной"
              loading="lazy"
            />
            <img
              className="manifesto__collage-img2"
              src="https://i.postimg.cc/4yQ2S3Xx/649246192-17859272616613066-4078323034697577703-n.webp"
              alt="Ч/б кадр со съёмки"
              loading="lazy"
            />
          </div>

          <div className="reveal">
            <p className="manifesto__text">
              Я Екатерина — editorial и love story-фотограф из Барнаула.
              Мои работы живут на стыке живых эмоций и{' '}
              <em style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>строгой композиции</em>.
              Каждая съёмка создана так, чтобы вы забыли о присутствии камеры.
            </p>
            <a href="#services" className="btn arrow-link">
              КАК Я РАБОТАЮ <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* ========== ПОРТФОЛИО ========== */}
      <section className="portfolio curved-top curved-top--milk" id="portfolio">
        <span className="watermark watermark--light" style={{ top: '10%', right: '-5%' }}>РАБОТЫ</span>

        <div className="portfolio__inner">
          <h2 className="portfolio__title reveal">ИЗБРАННЫЕ РАБОТЫ</h2>

          <div className="portfolio__grid">
            <div className="portfolio__card reveal">
              <span className="portfolio__card-label">СВАДЬБЫ</span>
              <img
                className="portfolio__card-img"
                src="https://picsum.photos/seed/wedding1/500/667"
                alt="Свадебная фотография"
                loading="lazy"
              />
              <a href="#" className="portfolio__card-link arrow-link">СМОТРЕТЬ <ArrowIcon /></a>
            </div>

            <div className="portfolio__card reveal">
              <span className="portfolio__card-label">ПОРТРЕТЫ</span>
              <img
                className="portfolio__card-img"
                src="https://picsum.photos/seed/portrait1/500/667"
                alt="Портретная съёмка"
                loading="lazy"
              />
              <a href="#" className="portfolio__card-link arrow-link">СМОТРЕТЬ <ArrowIcon /></a>
            </div>

            <div className="portfolio__card reveal">
              <span className="portfolio__card-label">СЕМЬИ</span>
              <img
                className="portfolio__card-img"
                src="https://picsum.photos/seed/family1/500/667"
                alt="Семейная съёмка"
                loading="lazy"
              />
              <a href="#" className="portfolio__card-link arrow-link">СМОТРЕТЬ <ArrowIcon /></a>
            </div>

            <div className="portfolio__card reveal">
              <span className="portfolio__card-label">БРЕНДИНГ</span>
              <img
                className="portfolio__card-img"
                src="https://picsum.photos/seed/brand1/500/667"
                alt="Бренд-съёмка"
                loading="lazy"
              />
              <a href="#" className="portfolio__card-link arrow-link">СМОТРЕТЬ <ArrowIcon /></a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== УСЛУГИ ========== */}
      <section className="services" id="services">
        <div className="services__inner">
          <h2 className="services__headline mixed-headline reveal">
            <em>опыт</em> — ЭТО ВСЁ.
          </h2>

          <div className="services__steps">
            <div className="services__step reveal">
              <span className="services__step-num">01</span>
              <div className="services__step-content">
                <h3>КОНСУЛЬТАЦИЯ</h3>
                <p>Всё начинается с разговора — ваше видение, ваша история, ощущение, которое вы хотите унести с собой. Я помогу подобрать образ, локацию и настроение.</p>
              </div>
            </div>

            <div className="services__step reveal">
              <span className="services__step-num">02</span>
              <div className="services__step-content">
                <h3>СЪЁМКА</h3>
                <p>Никаких застывших поз. Никакой спешки. Я создаю пространство, где можно дышать, двигаться и быть собой. Естественный свет, осознанная композиция и настоящая связь с камерой.</p>
              </div>
            </div>

            <div className="services__step reveal">
              <span className="services__step-num">03</span>
              <div className="services__step-content">
                <h3>ГАЛЕРЕЯ</h3>
                <p>В течение двух недель вы получите кураторскую галерею отредактированных изображений — каждое отобрано вручную и обработано с уважением к моменту. Доступны печати и фотокниги.</p>
              </div>
            </div>
          </div>

          <a href="#book" className="btn arrow-link reveal">
            ЗАПИСАТЬСЯ НА СЪЁМКУ <ArrowIcon />
          </a>
        </div>
      </section>

      {/* ========== СОЦСЕТИ ========== */}
      <section className="social curved-top curved-top--milk" id="journal">
        <div className="social__watermark-wrapper">
          <span className="watermark watermark--light" style={{ top: 'clamp(20px, 5vh, 56px)', left: '50%', transform: 'translateX(-50%)', fontSize: 'clamp(64px, 15vw, 210px)', lineHeight: 1, whiteSpace: 'nowrap', width: 'max-content' }}>INSTAGRAM</span>
        </div>

        <div className="social__inner">
          <div className="reveal">
            <h2 className="social__headline">INSTAGRAM</h2>
            <p className="social__text">
              <em>Заходите за</em> <strong>ЭСТЕТИКОЙ</strong>,{' '}
              <em>живыми моментами</em> и <strong>ПЛЁНКОЙ.</strong>
            </p>
          </div>

          <div className="reveal">
            <div className="insta-shot">
              <img
                src="https://i.postimg.cc/fL65qNxp/iphone-ephoto.webp"
                alt="iPhone со скриншотом Instagram-ленты @ekaterina.podstavkina"
                width="1284"
                height="2646"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== РАССЫЛКА ========== */}
      <section className="newsletter" id="contact">
        <div className="newsletter__bg">
          <img
            src="https://i.postimg.cc/7PzNYb8M/Being-a-woman.jpg"
            alt="Being a woman"
            loading="lazy"
          />
        </div>

        <div className="newsletter__inner reveal">
          <h2 className="newsletter__headline mixed-headline">
            <em>сделаю вашу ленту более</em> <strong>ВДОХНОВЛЯЮЩЕЙ</strong>
          </h2>
          <p className="newsletter__desc">
            Все мои работы
          </p>
          <a
            href="https://www.instagram.com/eppho.to/?hl=ru"
            target="_blank"
            rel="noopener"
            className="btn arrow-link"
          >
            В INSTAGRAM <ArrowIcon />
          </a>
        </div>
      </section>

      {/* ========== ПОДВАЛ ========== */}
      <footer className="footer curved-top curved-top--black">
        <div className="marquee">
          <div className="marquee__track">
            <span className="marquee__text">СОЗДАВАТЬ —</span>
            <span className="marquee__text">СОЗДАВАТЬ —</span>
            <span className="marquee__text">СОЗДАВАТЬ —</span>
            <span className="marquee__text">СОЗДАВАТЬ —</span>
            <span className="marquee__text">СОЗДАВАТЬ —</span>
            <span className="marquee__text">СОЗДАВАТЬ —</span>
            <span className="marquee__text">СОЗДАВАТЬ —</span>
            <span className="marquee__text">СОЗДАВАТЬ —</span>
          </div>
        </div>

        <div className="footer__cta" id="book">
          <h2 className="footer__cta-title">ГОТОВЫ ЗАПИСАТЬСЯ?</h2>
          <a href="https://t.me/pro100katerinkaa" target="_blank" rel="noopener noreferrer" className="btn btn--outline arrow-link">
            СВЯЗАТЬСЯ <ArrowIcon />
          </a>
        </div>

        <div className="footer__bottom">
          <nav className="footer__bottom-nav">
            <a href="#about">О себе</a>
            <a href="#portfolio">Портфолио</a>
            <a href="#services">Услуги</a>
            <a href="#journal">Журнал</a>
            <a href="#contact">Контакты</a>
          </nav>

          <div className="footer__bottom-social">
            <a href="https://www.instagram.com/eppho.to/?hl=ru" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://t.me/pro100katerinkaa" target="_blank" rel="noopener noreferrer" aria-label="Telegram" title="Telegram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z"/>
              </svg>
            </a>
            <a href="tel:+70000000000" aria-label="Телефон" title="Телефон">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </a>
          </div>

          <span className="footer__copy">© {currentYear} eppho.to. Все права защищены.</span>
        </div>
      </footer>
    </>
  );
}
