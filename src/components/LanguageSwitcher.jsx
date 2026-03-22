export default function LanguageSwitcher({ language, onChange }) {
  return (
    <div className="language-switcher" aria-label="Language switcher">
      <button
        type="button"
        className={language === "en" ? "active" : ""}
        onClick={() => onChange("en")}
        aria-label="Switch to English"
      >
        🇬🇧
      </button>

      <button
        type="button"
        className={language === "mk" ? "active" : ""}
        onClick={() => onChange("mk")}
        aria-label="Префрли на македонски"
      >
        🇲🇰
      </button>
    </div>
  );
}
