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

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" aria-label="Instagram">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" aria-label="Facebook">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-label="LinkedIn">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" aria-label="YouTube">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const PodcastIcon = () => (
  <svg viewBox="0 0 24 24" aria-label="Подкаст">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c2.275 0 4.363.785 6.023 2.097L6.097 18.023A9.953 9.953 0 012 12C2 6.486 6.486 2 12 2zm0 20c-2.275 0-4.363-.785-6.023-2.097l11.926-13.926A9.953 9.953 0 0122 12c0 5.514-4.486 10-10 10zm-1-7v-4l4 2-4 2z"/>
  </svg>
);

/* ============================================
   ГЛАВНЫЙ КОМПОНЕНТ ПРИЛОЖЕНИЯ
   ============================================ */

export default function App() {
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLParagraphElement>(null);
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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (successRef.current) {
      successRef.current.classList.add('show');
    }
    if (formRef.current) {
      formRef.current.reset();
    }
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
            src="https://picsum.photos/seed/hero/1920/1080"
            alt="Фон editorial-фотографии"
          />
        </div>
        <div className="hero__overlay"></div>

        <div className="hero__top">
          <div className="hero__socials">
            <a href="#" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" aria-label="LinkedIn"><LinkedInIcon /></a>
            <a href="#" aria-label="YouTube"><YoutubeIcon /></a>
            <a href="#" aria-label="Подкаст"><PodcastIcon /></a>
          </div>
          <a href="#contact" className="hero__join arrow-link">
            ПОДПИСАТЬСЯ <ArrowIcon />
          </a>
          <button className="mobile-menu-btn" onClick={openMenu}>
            Меню <ArrowIcon />
          </button>
        </div>

        <h1 className="hero__name">
          АННА<br />ВОЛКОВА
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
          Мы ловим свет, создаём истории и позволяем <em>вам</em> чувствовать это вечно.
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
              src="https://picsum.photos/seed/manifesto1/600/800"
              alt="Цветной editorial-портрет"
              loading="lazy"
            />
            <img
              className="manifesto__collage-img2"
              src="https://picsum.photos/seed/manifesto2/400/530?grayscale"
              alt="Чёрно-белый портрет"
              loading="lazy"
            />
          </div>

          <div className="reveal">
            <p className="manifesto__text">
              Я Анна — editorial и fashion-фотограф, работаю между Миланом и Москвой.
              Уже более десяти лет я помогаю женщинам вставать перед камерой не для того,
              чтобы <em style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>играть</em>,
              а чтобы быть собой. Мои работы живут на стыке живых эмоций и выверенной композиции —
              там, где несовершенство становится самой сильной формой красоты. Каждая съёмка
              создана так, чтобы вы забыли о присутствии камеры.
            </p>
            <a href="#services" className="btn arrow-link">
              КАК Я РАБОТАЮ <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* ========== ПОРТФОЛИО ========== */}
      <section className="portfolio curved-top curved-top--cream" id="portfolio">
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
                <p>Всё начинается с разговора — ваше видение, ваша история, ощущение, которое вы хотите унести с собой. Я помогу подобрать образ, локацию и настроение, чтобы каждая деталь работала на результат.</p>
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

          <a href="#contact" className="btn arrow-link reveal">
            ЗАПИСАТЬСЯ НА СЪЁМКУ <ArrowIcon />
          </a>
        </div>
      </section>

      {/* ========== СОЦСЕТИ ========== */}
      <section className="social curved-top curved-top--cream" id="journal">
        <span className="watermark watermark--light" style={{ top: '5%', left: '-5%' }}>ЛЕНТА</span>

        <div className="social__inner">
          <div className="reveal">
            <h2 className="social__headline">ЛЕНТА</h2>
            <p className="social__text">
              <em>Заходите за</em> <strong>ЗАКАДРЬЕМ</strong>,{' '}
              <em>живыми моментами</em> и <strong>ВДОХНОВЛЕНИЕМ.</strong>
            </p>
            <p className="social__desc">
              Подписывайтесь — здесь закулисье каждой съёмки, советы по стилю,
              секреты локаций и редкие моменты чистого творчества.
              Именно здесь работа живёт между галереями.
            </p>
          </div>

          <div className="reveal">
            <div className="phone">
              <div className="phone__notch"></div>
              <div className="phone__screen">
                <div className="phone__profile">
                  <img
                    className="phone__avatar"
                    src="https://picsum.photos/seed/avatar/100/100"
                    alt="Аватар Анны Волковой"
                  />
                  <div className="phone__nick">@anna.volkova</div>
                  <div className="phone__bio">Editorial & fashion-фотограф</div>
                </div>
                <div className="phone__grid">
                  <img src="https://picsum.photos/seed/ig1/200/200" alt="Пост 1" loading="lazy" />
                  <img src="https://picsum.photos/seed/ig2/200/200" alt="Пост 2" loading="lazy" />
                  <img src="https://picsum.photos/seed/ig3/200/200" alt="Пост 3" loading="lazy" />
                  <img src="https://picsum.photos/seed/ig4/200/200" alt="Пост 4" loading="lazy" />
                  <img src="https://picsum.photos/seed/ig5/200/200" alt="Пост 5" loading="lazy" />
                  <img src="https://picsum.photos/seed/ig6/200/200" alt="Пост 6" loading="lazy" />
                  <img src="https://picsum.photos/seed/ig7/200/200" alt="Пост 7" loading="lazy" />
                  <img src="https://picsum.photos/seed/ig8/200/200" alt="Пост 8" loading="lazy" />
                  <img src="https://picsum.photos/seed/ig9/200/200" alt="Пост 9" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== РАССЫЛКА ========== */}
      <section className="newsletter" id="contact">
        <div className="newsletter__bg">
          <img
            src="https://picsum.photos/seed/window/1920/1080?grayscale"
            alt="Окно с занавесками"
            loading="lazy"
          />
        </div>

        <div className="newsletter__inner reveal">
          <h2 className="newsletter__headline mixed-headline">
            <em>Делаем почту более</em> <strong>ВДОХНОВЛЯЮЩЕЙ</strong> <em>с 2020 года.</em>
          </h2>
          <p className="newsletter__desc">
            Ежемесячное письмо с историями из закулисья, ранним доступом к новым работам
            и редкими размышлениями о золотом часе. Никакого спама — только вдохновение.
          </p>
          <form className="newsletter__form" ref={formRef} onSubmit={handleFormSubmit}>
            <input
              className="newsletter__input"
              type="email"
              placeholder="ваш@email.ru"
              required
              aria-label="Адрес электронной почты"
            />
            <button type="submit" className="btn arrow-link">
              ПОДПИСАТЬСЯ <ArrowIcon />
            </button>
          </form>
          <p className="newsletter__success" ref={successRef}>
            Спасибо! Проверьте вашу почту.
          </p>
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

        <div className="footer__cta">
          <h2 className="footer__cta-title">ГОТОВЫ ЗАПИСАТЬСЯ?</h2>
          <a href="mailto:hello@annavolkova.ru" className="btn btn--outline arrow-link">
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
            <a href="#" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" aria-label="LinkedIn"><LinkedInIcon /></a>
            <a href="#" aria-label="YouTube"><YoutubeIcon /></a>
          </div>

          <span className="footer__copy">© {currentYear} Анна Волкова. Все права защищены.</span>
        </div>
      </footer>
    </>
  );
}
