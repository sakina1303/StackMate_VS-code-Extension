import React from 'react';

const LanguageSelector = ({ language, setLanguage, translations }) => {
    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
        marginBottom: "10px",
        position: "relative",
    };

    const selectStyle = {
        border: "2px solid #ccc",
        borderRadius: "4px",
        padding: "8px",
        marginLeft: "8px",
        maxHeight: "200px",
        overflowY: "auto",
        cursor: "pointer",
    };

    const handleLanguageChange = (e) => {
        e.preventDefault();
        setLanguage(e.target.value);
    };

    return (
        <div style={containerStyle}>
            <h3>{translations[language].languageLabel}</h3>
            <select
                value={language}
                onChange={handleLanguageChange}
                style={selectStyle}
                size={1}
            >
                <option value="english">English</option>
                <option value="hindi">हिन्दी</option>
                <option value="spanish">Español</option>
                <option value="french">Français</option>
                <option value="german">Deutsch</option>
                <option value="japanese">日本語</option>
                <option value="chinese">中文</option>
                <option value="portuguese">Português</option>
                <option value="arabic">العربية</option>
                <option value="russian">Русский</option>
                <option value="korean">한국어</option>
                <option value="italian">Italiano</option>
                <option value="dutch">Nederlands</option>
                <option value="turkish">Türkçe</option>
                <option value="polish">Polski</option>
                <option value="vietnamese">Tiếng Việt</option>
                <option value="thai">ไทย</option>
                <option value="indonesian">Bahasa Indonesia</option>
                <option value="swedish">Svenska</option>
                <option value="greek">Ελληνικά</option>
                <option value="hebrew">עברית</option>
                <option value="ukrainian">Українська</option>
                <option value="bengali">বাংলা</option>
                <option value="tamil">தமிழ்</option>
                <option value="marathi">मराठी</option>
                <option value="urdu">اردو</option>
                <option value="kannada">ಕನ್ನಡ</option>
            </select>
        </div>
    );
};

export default LanguageSelector;